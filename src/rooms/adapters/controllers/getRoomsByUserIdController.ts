import { Request, Response } from "express";
import { GetRoomsByUserIdUseCase } from "../../application/use-cases/getRoomsByUserIdUseCase";

export class GetRoomsByUserIdController {
  constructor(private getRoomsByUserIdUseCase: GetRoomsByUserIdUseCase) {}

  async handle(req: Request, res: Response) {
    const user_id = parseInt(req.params.id);

    try {
      const rooms = await this.getRoomsByUserIdUseCase.execute(user_id);
      if (!rooms) {
        return res.status(404).json({ message: "Rooms not found" });
      }
      return res.status(200).json(rooms);
    } catch (error: any) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}