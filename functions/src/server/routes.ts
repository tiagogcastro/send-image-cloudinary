import { Router } from 'express';

import { image_to_cloudinary_router } from '../useCases/SendImageToCloudinary/routes';

export const routes = Router();

routes.use('/image', image_to_cloudinary_router);