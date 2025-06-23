import express from "express";
import { createHotelHandler, getHotelByIdHandler, getAllHotelsHandler, deleteHotelHandler } from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../vaildators";
import { hotelSchema } from "../../vaildators/hotel.validator";

const hotelRouter= express.Router();

hotelRouter.post(
    '/',
    validateRequestBody(hotelSchema),
    createHotelHandler
);

hotelRouter.get('/:id', getHotelByIdHandler);

hotelRouter.get('/', getAllHotelsHandler);
hotelRouter.delete('/:id', deleteHotelHandler)

export default hotelRouter;