// Use Cases
import { CreateRoomUseCase } from "../application/use-cases/createRoomUseCase";
import { GetRoomsByUserIdUseCase } from "../application/use-cases/getRoomsByUserIdUseCase";
import { UpdateRoomUseCase } from "../application/use-cases/updateRoomUseCase";
import { DeleteRoomUseCase } from "../application/use-cases/deleteRoomUseCase";

//Controllers
import { CreateRoomController } from "../adapters/controllers/createRoomController";
import { DeleteRoomController } from "../adapters/controllers/deleteRoomController";
import { GetRoomsByUserIdController } from "../adapters/controllers/getRoomsByUserIdController";
import { UpdateRoomController } from "../adapters/controllers/updateRoomController";

//Repositories
import { MySqlRoomRepository } from "./repositories/MySqlRoomRepository";

export const MySqlRoomRepositoryInstance = new MySqlRoomRepository();

export const createRoomUseCase = new CreateRoomUseCase(MySqlRoomRepositoryInstance);
export const getRoomsByUserIdUseCase = new GetRoomsByUserIdUseCase(MySqlRoomRepositoryInstance);
export const updateRoomUseCase = new UpdateRoomUseCase(MySqlRoomRepositoryInstance);
export const deleteRoomUseCase = new DeleteRoomUseCase(MySqlRoomRepositoryInstance);

export const createRoomController = new CreateRoomController(createRoomUseCase);
export const getRoomsByUserIdController = new GetRoomsByUserIdController(getRoomsByUserIdUseCase);
export const updateRoomController = new UpdateRoomController(updateRoomUseCase);
export const deleteRoomController = new DeleteRoomController(deleteRoomUseCase);