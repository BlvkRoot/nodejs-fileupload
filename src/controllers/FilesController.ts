import { Request, Response } from "express";
import { FilesService } from '../services/FilesService';
 
class FilesController {
  show = async (req: Request, res: Response) => {
    try {
      
      const filesService = new FilesService();
      const files = await filesService.show();

      // console.log(files);
      
      return res.render('index', { files }); 

    } catch ({message}) {
      return res.json({error: message});
    }
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