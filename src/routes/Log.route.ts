import { Router } from "express";

import { LogController } from "../controllers/Log.controller";

const router = Router();
const logController = new LogController();

router.get("/", logController.findAll).post("/", logController.create);

export default router;
