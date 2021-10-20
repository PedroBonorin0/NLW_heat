import { Router } from 'express';
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateMessageController from './controllers/CreateMessageController';
import GetLast3MessagesController from './controllers/GetLast3MessagesController';
import ProfileUserController from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', AuthenticateUserController.handle);

router.post('/messages', ensureAuthenticated, CreateMessageController.handle);

router.get('/messages/last3', GetLast3MessagesController.handle);

router.get('/profile', ensureAuthenticated, ProfileUserController.handle);

export { router };
