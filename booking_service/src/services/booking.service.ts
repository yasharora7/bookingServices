import { CreateBookingDTO } from "../dto/booking.dto";
import { createIdempotencyKey, confirmBooking, createBooking, finalizeIdempotencyKey,getIdempotencyKeyWithLock } from "../repositories/booking.repository";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";
import { generateIdempotencyKey } from "../utils/generateIdempotencyKey";
import prismaClient from "../prisma/client";

export async function createBookingService(createBookingDTO: CreateBookingDTO) {
    const booking = await createBooking({
        userId: createBookingDTO.userId,
        hotelId: createBookingDTO.hotelId,
        totalGuests: createBookingDTO.totalGuests,
        bookingAmount: createBookingDTO.bookingAmount,
    });
    const idempotencyKey = generateIdempotencyKey();
    await createIdempotencyKey(idempotencyKey,booking.id);
    return {
        bookingId: booking.id,
        idempotencyKey: idempotencyKey
    };
}

export async function confirmBookingService(idempotencyKey: string){
    return await prismaClient.$transaction(async (tx) => {
        const idempotencyKeyData =await getIdempotencyKeyWithLock(tx, idempotencyKey);

        if(!idempotencyKeyData || !idempotencyKeyData.bookingId){
            throw new NotFoundError('Idempotency key not found');
        }
        if(idempotencyKeyData.finalized){
        throw new BadRequestError('Idmepotency key already finalized');
    }
    const booking = await confirmBooking(tx,idempotencyKeyData.bookingId);
    await finalizeIdempotencyKey(tx,idempotencyKey);
        return booking;
    });

}