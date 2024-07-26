import { Room } from "../../domain/models/Room";
import { RoomService } from "../../domain/services/RoomService";

export class DeleteRoomUseCase {
    constructor(private readonly roomService: RoomService) {}

    async execute(room_id: number): Promise<boolean | null> {
        try {
            const roomExists = await this.roomService.getRoom(room_id);
            if (!roomExists) {
                throw new Error("Room does not exist");
            }
            const roomDeleted = await this.roomService.deleteRoom(room_id);

            return roomDeleted;
        }
        catch (error) {
            return null;
        }
    }
}