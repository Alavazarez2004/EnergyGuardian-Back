import { Request, Response } from "express";
import { GetConsumptionByDateUseCase } from "../../application/use-cases/getConsumptionByDateUseCase";

export class GetConsumptionByDateController {
    constructor(private readonly getConsumptionByDateUseCase: GetConsumptionByDateUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const room = Number(req.params.room);
        const { start_date, end_date } = req.body;

        try {
            const energy = await this.getConsumptionByDateUseCase.execute(room, new Date(start_date), new Date(end_date));
            if (!energy) {
                return res.status(400).json({ error: "Failed to get energy" });
            }

            return res.status(200).json(energy);
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}