import { Energy } from "../../domain/models/Energy";
import { EnergyService } from "../../domain/services/EnergyService";

export class GetConsumptionByDateUseCase {
    constructor(private readonly energyService: EnergyService) {}

    async execute(room: number, start_date: Date, end_date: Date): Promise<Energy[] | null> {
        try {
            const energy = await this.energyService.getConsumptionByDate(room, start_date, end_date);

            return energy;
        }
        catch (error) {
            return null;
        }
    }
}