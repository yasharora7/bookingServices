import express from "express";
import pingRouter from "./ping.router";

// export function createPingHandler(app:Express) {
//     app.get('/ping', pingHandler);
// }

const v1Router=express.Router();

v1Router.use('/ping',pingRouter);

export default v1Router;