import e, { Router } from "express";

import { createEnergyController } from "../../infrastructure/EnergyDependencies";
import { getConsumptionByDateController } from "../../infrastructure/EnergyDependencies";
import { getConsumptionByRoomController } from "../../infrastructure/EnergyDependencies";

const EnergyRouter = Router();

EnergyRouter
    .get('/:id', (req, res) => getConsumptionByDateController.handle(req, res))
    .get('/room/:id', (req, res) => getConsumptionByRoomController.handle(req, res))
    .post('/', (req, res) => createEnergyController.handle(req, res));

export default EnergyRouter;