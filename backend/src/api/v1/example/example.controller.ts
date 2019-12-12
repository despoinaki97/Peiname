import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import { UserModel, ItemModel } from '@app/models';

export class ExampleController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router
            .post('/sendMessageToClients', this.sendMessageToClients)
            .get('/reset', this.reset);

        return router;
    }

    /**
     * Sens a message back as a response
     */
    public reset(req: Request, res: Response) {
        UserModel.remove({}, (err: any) => { // reset users
            logger.warn('Users collection removed');
        });
        ItemModel.remove({}, (err: any) => { // reset users
            logger.warn('Items collection removed');
        });
        res.json({ message: 'reset' });
    }

    /**
     * Broadcasts a received message to all connected clients
     */
    public sendMessageToClients(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        logger.debug(req.body.event);
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

        res.json({ message: 'ok' });

    }

}
