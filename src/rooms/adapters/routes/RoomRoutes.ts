import { Router } from "express";

import { createRoomController } from "../../infrastructure/RoomDependencies";
import { deleteRoomController } from "../../infrastructure/RoomDependencies";
import { getRoomsByUserIdController } from "../../infrastructure/RoomDependencies";
import { updateRoomController } from "../../infrastructure/RoomDependencies";

const RoomRouter = Router();

RoomRouter
    .get('/:id', (req, res) => getRoomsByUserIdController.handle(req, res))
    .post('/', (req, res) => createRoomController.handle(req, res))
    .put('/:id', (req, res) => updateRoomController.handle(req, res))
    .delete('/:id', (req, res) => deleteRoomController.handle(req, res));

export default RoomRouter;