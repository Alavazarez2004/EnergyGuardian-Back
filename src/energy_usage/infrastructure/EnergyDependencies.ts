//Use Cases
import { CreateEnergyUseCase } from "../application/use-cases/createEnergyUseCase";
import { GetConsumptionByDateUseCase } from "../application/use-cases/getConsumptionByDateUseCase";
import { GetConsumptionByRoomUseCase } from "../application/use-cases/getConsumptionByRoomUseCase";

//Controllers
import { CreateEnergyController } from "../adapters/controllers/createEnergyController";
import { GetConsumptionByDateController } from "../adapters/controllers/getConsumptionByDateController";
import { GetConsumptionByRoomController } from "../adapters/controllers/getConsumptionByRoomController";

//Repositories
import { MySqlEnergyRepository } from "./repositories/MySqlEnergyRepository";

export const MySqlEnergyRepositoryInstance = new MySqlEnergyRepository();

export const createEnergyUseCase = new CreateEnergyUseCase(MySqlEnergyRepositoryInstance);
export const getConsumptionByDateUseCase = new GetConsumptionByDateUseCase(MySqlEnergyRepositoryInstance);
export const getConsumptionByRoomUseCase = new GetConsumptionByRoomUseCase(MySqlEnergyRepositoryInstance);

export const createEnergyController = new CreateEnergyController(createEnergyUseCase);
export const getConsumptionByDateController = new GetConsumptionByDateController(getConsumptionByDateUseCase);
export const getConsumptionByRoomController = new GetConsumptionByRoomController(getConsumptionByRoomUseCase);