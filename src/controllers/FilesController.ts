import { Request, Response } from "express";

class FilesController {
  show = async (req: Request, res: Response) => {
    return res.render('index');
  }

  upload = async (req: Request, res: Response) => {
    console.log('Uploading file ');
    
    return res.json('File successfully uploaded..');
  }

}

export { FilesController }