import { Request, Response } from "express";
import { DeleteRoomUseCase } from "../../application/use-cases/deleteRoomUseCase";

export class DeleteRoomController {
  constructor(private deleteRoomUseCase: DeleteRoomUseCase) {}

  async handle(req: Request, res: Response) {
    const room_id = parseInt(req.params.id);

    try {
      const deletedRoom = await this.deleteRoomUseCase.execute(room_id);
      if (!deletedRoom) {
        return res.status(404).json({ message: "Room not found" });
      }
      return res.status(204).json({message : "Room deleted successfully"});
    } catch (error: any) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}