import { Request, Response } from "express";
import { CreateEnergyUseCase } from "../../application/use-cases/createEnergyUseCase";

export class CreateEnergyController {
    constructor(private readonly createEnergyUseCase: CreateEnergyUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const energy = req.body;

        try {
            const newEnergy = await this.createEnergyUseCase.execute(energy);
            if (!newEnergy) {
                return res.status(400).json({ error: "Failed to create energy" });
            }

            return res.status(201).json({message : "Energy created successfully", energy: energy});
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}