import { Room } from "../../domain/models/Room";
import { RoomService } from "../../domain/services/RoomService";

export class UpdateRoomUseCase {
    constructor(private readonly roomService: RoomService) {}

    async execute(room_id: number, room: Room): Promise<Room | null> {
        try {
            const roomExists = await this.roomService.getRoom(room.room_id);
            if (!roomExists) {
                throw new Error("Room does not exist");
            }
            const updatedRoom = await this.roomService.updateRoom(room_id, room);

            return updatedRoom;
        }
        catch (error) {
            return null;
        }
    }
}