import { Request, Response } from "express";
import { CreateRoomUseCase } from "../../application/use-cases/createRoomUseCase";

export class CreateRoomController {
    constructor(private readonly createRoomUseCase: CreateRoomUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const room = req.body;

        try {
            const newRoom = await this.createRoomUseCase.execute(room);
            if (!newRoom) {
                return res.status(400).json({ error: "Failed to create room" });
            }

            return res.status(201).json({message : "Room created successfully", room: room});
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}