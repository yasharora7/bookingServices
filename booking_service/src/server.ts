import express from 'express';
import { serverConfig} from './config';
import v1Router from './routers/v1/index.router';
import { genericErrorHandler } from './middlewares/error.middleware';
// import v2Router from './routers/v2/index.router';
// import { pingHandler } from './controllers/ping.controller';
// import { createPingHandler } from './routers/ping.router';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';


let app=express();

app.use(express.json());

// createPingHandler(app); // routing line


/**
 * Registering all the routers and their corresponding routes without app server object
 */
app.use(attachCorrelationIdMiddleware);
app.use('/api/v1',v1Router);
// app.use('/api/v1',v2Router);

app.use(genericErrorHandler)

app.listen(serverConfig.PORT,()=>{
    logger.info("server is run on "+serverConfig.PORT);
    logger.info("ctrl+c for stop the server.");
})
