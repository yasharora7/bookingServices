import express from "express";
import { createHotelHandler, getHotelByIdHandler } from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../vaildators";
import { hotelSchema } from "../../vaildators/hotel.validator";

const hotelRouter= express.Router();

hotelRouter.post(
    '/',
    validateRequestBody(hotelSchema),
    createHotelHandler
);

hotelRouter.get('/:id', getHotelByIdHandler);

export default hotelRouter;