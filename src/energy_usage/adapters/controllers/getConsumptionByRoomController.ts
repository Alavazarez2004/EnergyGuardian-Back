import { Request, Response } from "express";
import { GetConsumptionByRoomUseCase } from "../../application/use-cases/getConsumptionByRoomUseCase";

export class GetConsumptionByRoomController {
    constructor(private readonly getConsumptionByRoomUseCase: GetConsumptionByRoomUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const room = Number(req.params.room);

        try {
            const energy = await this.getConsumptionByRoomUseCase.execute(room);
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