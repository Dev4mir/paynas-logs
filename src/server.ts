import { Express, Request, Response } from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import { connect } from "./utils/db";
import LogRoute from "./routes/Log.route";

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.get("/api", (req: Request, res: Response): void => {
      res.send("You have reached the API!");
    });

    this.app.use("/api/logs", LogRoute);
  }

  public async start($port: number) {
    try {
      await connect();
      this.app.listen($port, () => {
        console.log(`REST API on http://localhost:${$port}/api`);
      });
    } catch (e) {
      console.error(e);
    }
  }
}
