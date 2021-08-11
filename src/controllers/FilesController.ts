import { Request, Response } from "express";
import { FilesService } from '../services/FilesService';
 
class FilesController {
  show = async (req: Request, res: Response) => {
    return res.render('index');
  }

  upload = async (req: Request, res: Response) => {
    console.log('Uploading file ', req.body);

    let filesService = new FilesService();

    // filesService.create();
    
    return res.json('File successfully uploaded..');
  }

}

export { FilesController }