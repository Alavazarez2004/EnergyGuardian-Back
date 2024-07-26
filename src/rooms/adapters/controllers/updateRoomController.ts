import { Request, Response } from "express";
import { UpdateRoomUseCase } from "../../application/use-cases/updateRoomUseCase";

export class UpdateRoomController {
  constructor(private updateRoomUseCase: UpdateRoomUseCase) {}

  async handle(req: Request, res: Response) {
    const room_id = parseInt(req.params.id);
    const room = req.body;

    try {
      const updatedRoom = await this.updateRoomUseCase.execute(room_id, room);
      if (!updatedRoom) {
        return res.status(404).json({ message: "Room not found" });
      }
      return res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
    } catch (error: any) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}