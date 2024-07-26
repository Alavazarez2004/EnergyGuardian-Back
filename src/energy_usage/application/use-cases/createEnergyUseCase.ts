import { Energy } from "../../domain/models/Energy";
import { EnergyService } from "../../domain/services/EnergyService";

export class CreateEnergyUseCase {
    constructor(private readonly energyService: EnergyService) {}

    async execute(energy: Energy): Promise<Energy | null> {
        try {
            const newEnergy = await this.energyService.createEnergy(energy)

            return newEnergy;
        }
        catch (error) {
            return null;
        }
    }
}