import express from 'express';
import { serverConfig} from './config';
import v1Router from './routers/v1/index.router';
import { genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import sequelize from './db/models/sequelize';

let app=express();

app.use(express.json());
app.use(attachCorrelationIdMiddleware);
app.use('/api/v1',v1Router);
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, async () => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
    await sequelize.authenticate(); // Test the connection to the database
    logger.info('Database connection has been established successfully.');
    
})
