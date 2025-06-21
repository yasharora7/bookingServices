import express from "express";
import { pingHandler } from "../../controllers/ping.controller";
import { pingSchema } from "../../vaildators/ping.validator";
import { validateRequestBody } from "../../vaildators";

// export function createPingHandler(app:Express) {
//     app.get('/ping', pingHandler);
// }

const pingRouter=express.Router();



// pingRouter.get('/',pingHandler);

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler);


export default pingRouter;