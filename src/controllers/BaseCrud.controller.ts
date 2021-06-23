import { Request, Response } from "express";

export abstract class BaseCrudController {
  public abstract create(req: Request, res: Response): Promise<any>;
  public abstract findAll(req: Request, res: Response): void;
  //   public abstract update(req: Request, res: Response): void;
  //   public abstract delete(req: Request, res: Response): void;
}
