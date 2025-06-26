import express from "express";
import pingRouter from "../v1/ping.router";

// export function createPingHandler(app:Express) {
//     app.get('/ping', pingHandler);
// }

const v2Router=express.Router();

v2Router.use('/ping1',pingRouter);

export default v2Router;