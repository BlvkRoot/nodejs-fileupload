import express from 'express';
import { FilesController } from '../controllers/FilesController';

const routes = express.Router();

const filesController = new FilesController();

routes.get('/', filesController.show);
routes.post('/file/upload', filesController.upload);

export { routes };

