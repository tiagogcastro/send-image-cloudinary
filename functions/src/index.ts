import * as functions from "firebase-functions";
import { app } from './server/app';

export const send_image_cloudinary = functions.https.onRequest(app);