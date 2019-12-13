import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel, IUser, UserModel, IItem, ItemModel} from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import { CartController } from './cart/cart.controller';

const apiV1Router = express.Router();


apiV1Router
  // Sockets events routes
  .use(
    '/socket-events',
    new SocketEventsController().applyRoutes()
  )

  // Sockets events routes
  .use(
    '/files',
    new FilesController().applyRoutes()
  )

  // Task routes
  .use(
    '/tasks',
    new ResourceController<ITask>(TaskModel).applyRoutes()
  )

  .use(
    '/users',
    new ResourceController<IUser>(UserModel).applyRoutes()
  )
  .use(
    '/items',
    new ResourceController<IItem>(ItemModel).applyRoutes()
  )
  .use(
    '/cart',
    new CartController().applyRoutes()
  )

  // Example routes
  .use(
    '/example',
    new ExampleController().applyRoutes()
  );


export { apiV1Router };

