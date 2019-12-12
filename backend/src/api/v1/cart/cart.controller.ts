import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import { OK, CREATED, NO_CONTENT } from 'http-status-codes';
import { UserModel } from '@app/models';

export class CartController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router
            .post('/user/:id/updatecart', this.addToCart);

        return router;
    }

    /**
     * Sens a message back as a response
     */
    public reset(req: Request, res: Response) {
        UserModel.remove({}, (err: any) => { // reset users
            logger.warn('Users collection removed');
        });
        res.json({ message: 'reset' });
    }

    public addToCart() {
        return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
            try {
                const modelId = req.params.id;
                const resource = await UserModel
                    .findOne(
                        { _id: modelId }
                    )
                    .populate('orderedItems')
                    .orFail(new NotFound())
                    .exec();
                return res
                    .status(OK)
                    .json(resource);
            } catch (e) {
                next(e);
            }
        };
    }


}
