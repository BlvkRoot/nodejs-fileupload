import { Request, Response } from "express";
import { FilesService } from '../services/FilesService';
 
class FilesController {
  show = async (req: Request, res: Response) => {
    return res.render('index');
  }

  upload = async (req: Request, res: Response) => {
    const { filename, mime, imageBase64 } = req.body;

    console.log(filename, mime);
    
    let filesService = new FilesService();

    filesService.create({ filename, mime, imageBase64});
    
    return res.json('File successfully uploaded..');
  }

}

export { FilesController }