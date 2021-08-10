import express from 'express';
import { routes } from '../routes';
import expressEdge from 'express-edge';
import { resolve } from 'path';

const APP = express();

const PORT = process.env.PORT || 3333;

APP.use(express.json());
APP.use(express.urlencoded({extended: false}));

APP.use(express.static(resolve('src/public')));

// Configure Edge if need to
expressEdge.config({ cache: process.env.NODE_ENV === 'production' });

// Automatically sets view engine and adds dot notation to app.render
APP.use(expressEdge.engine);
APP.set('views', `${__dirname}/../public/views`);
APP.use(routes);

APP.listen(PORT, () => console.log(`Server running at port ${PORT}`)); 