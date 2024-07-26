import { Energy } from "../../domain/models/Energy";
import { EnergyService } from "../../domain/services/EnergyService";

export class GetConsumptionByRoomUseCase {
    constructor(private readonly energyService: EnergyService) {}

    async execute(room: number): Promise<Energy[] | null> {
        try {
            const energy = await this.energyService.getConsumptionByRoom(room)

            return energy;
        }
        catch (error) {
            return null;
        }
    }
}