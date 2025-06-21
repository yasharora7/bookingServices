 import { NextFunction, Request, Response } from "express";
//  import fs from "fs/promises";
//  import { NotFoundError } from "../utils/errors/app.error";
 import logger from "../config/logger.config";

  // export const pingHandler=(req: Request,res: Response)=>{
  //   // console.log(req.body);
  //   // res.send("pong");
  //   res.status(200).json({
  //     message:"Pong",
  //     success: true,
  //   })
  //   }
 
  // export const pingHandler= async(req: Request, res: Response, next: NextFunction)=> {
  //   try{
  //     await fs.readFile("sample");
  //     res.status(200).json({message:"Pong!"});
  //   }catch(error){
  //     throw new NotFoundError("File not found!");
  //   }
  // }

  export const pingHandler = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("Ping request received");
    res.status(200).json({ message: "Pong!" });
}