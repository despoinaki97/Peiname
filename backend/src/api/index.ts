import * as express from 'express';
import { apiV1Router } from './v1';
import { UserModel } from '@app/models/';
import { ItemModel } from '@app/models/';
import { debug } from 'winston';
import { logger } from '@app/utils/logger';

export class Api {

  /**
   * Apply all app routes including models and auth
   *
   * @param {express.Application} app
   * @returns {Promise<express.Router>}
   */
  public static async applyRoutes(app: express.Application): Promise<express.Router> {

    const apiRouter = express.Router();

    apiRouter.use('/api/', apiV1Router);
    return apiRouter;
  }

}
