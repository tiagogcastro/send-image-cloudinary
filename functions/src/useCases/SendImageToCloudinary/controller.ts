import { Request, Response } from 'express';

import { cloudinary } from '../../server/app';

type Data = {
  file_url: string;
}

export class Controller {
  async  handler(request: Request, response: Response) {
    const { file_url }: Data = request.body;

    if(!file_url) {
      return response.json({
        status: 'error',
        statusCode: 403,
        message: 'file_url field is required',
        data: null,
      });
    }

    cloudinary.uploader.upload(file_url, (error, result) => {
      if(result) { 
        return response.json({
          status: 'success',
          statusCode: 201,
          data: result
        });
      }

      if(error) {
        return response.json({
          status: 'error',
          statusCode: 403,
          data: error
        });
      }
    });
  }
}

export const controller_instance = new Controller();