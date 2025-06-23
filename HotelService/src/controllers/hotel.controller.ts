import { Request, Response, NextFunction} from "express";
import { createHotelService, getHotelByIdService, getAllHotelsService, deleteHotelService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res:Response, next:NextFunction){
    // 1. call the service layer

    const hotelResponse = await createHotelService(req.body);

    // 2. send the response

    res.status(StatusCodes.CREATED).json({
        message: "hotel created Successfully",
        date: hotelResponse,
        success: true,
    })
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction){
     // 1. call the service layer

    const hotelResponse = await getHotelByIdService(Number(req.params.id));

    // 2. send the response

    res.status(StatusCodes.OK).json({
        message: "hotel found Successfully",
        date: hotelResponse,
        success: true,
    })
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {

         // 1. call the service layer

    const hotelResponse = await getAllHotelsService();

    // 2. send the response

    res.status(StatusCodes.OK).json({
        message: "hotel found Successfully",
        date: hotelResponse,
        success: true,
    })
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {

      // 1. call the service layer

    const hotelResponse = await deleteHotelService(Number(req.params.id));

    // 2. send the response

    res.status(StatusCodes.OK).json({
        message: "hotel deleted Successfully",
        date: hotelResponse,
        success: true,
    })
    
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.NOT_IMPLEMENTED);
}