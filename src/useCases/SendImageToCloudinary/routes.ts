import { Router } from 'express';

import { controller_instance } from './controller';

export const image_to_cloudinary_router = Router();

image_to_cloudinary_router.post('/cloudinary/send', controller_instance.handler);