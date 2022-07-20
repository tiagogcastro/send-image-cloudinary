import { cloudinary } from '../server/app';

import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
