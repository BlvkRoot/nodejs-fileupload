import { Request, Response } from "express";
import { FilesService } from '../services/FilesService';
 
class FilesController {
  show = async (req: Request, res: Response) => {
    return res.render('index');
  }

  upload = async (req: Request, res: Response) => {
    const { filename, mime, imageBase64 } = req.body;

    try {
      let filesService = new FilesService();

      const file = await filesService.create({ filename, mime, imageBase64});
    
      return res.json({message: 'File successfully uploaded..'});

    } catch ({message}) {
      console.log('Error ao cadastrar: ', message);
      return res.json({error: message});
    }
  }

}

export { FilesController }