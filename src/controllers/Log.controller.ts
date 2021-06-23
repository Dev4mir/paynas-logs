import { Request, Response } from "express";
import { BaseCrudController } from "./BaseCrud.controller";
import { Log } from "../models/log.model";

export class LogController extends BaseCrudController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const doc = await Log.create(req.body);
      res.status(201).json({ data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  }

  public async findAll(req: Request, res: Response): Promise<any> {
    try {
      const docs = await Log.find();

      res.status(200).json({ data: docs });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  }
}
