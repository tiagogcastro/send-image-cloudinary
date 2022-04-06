import { v2 as cloudinary} from 'cloudinary';
const express = require('express');

import '../config/cloudinary';

import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

export {
  app,
  cloudinary
};