import { Router, Request, Response } from "express";
import UserRouter from "./users/adapters/routes/UserRoutes";
import RoomRouter from "./rooms/adapters/routes/RoomRoutes";
import EnergyRouter from "./energy_usage/adapters/routes/EnergyRoutes";

const subfix = '/api';
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

indexRouter.use(`${subfix}/users`, UserRouter);
indexRouter.use(`${subfix}/rooms`, RoomRouter);
indexRouter.use(`${subfix}/energy`, EnergyRouter);

export default indexRouter;