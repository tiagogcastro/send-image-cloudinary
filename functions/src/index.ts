import * as functions from "firebase-functions";
import { app } from './server/app';

export const run_app = functions.https.onRequest(app);