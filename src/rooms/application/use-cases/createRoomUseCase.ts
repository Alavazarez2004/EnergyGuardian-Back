import { Room } from "../../domain/models/Room";
import { RoomService } from "../../domain/services/RoomService";

export class CreateRoomUseCase {
    constructor(private readonly roomService: RoomService) {}

    async execute(room: Room): Promise<Room | null> {
        try {
            const roomExists = await this.roomService.getRoom(room.room_id);
            if (roomExists) {
                throw new Error("Room already exists");
            }
            const newRoom = await this.roomService.createRoom(room)

            return newRoom;
        }
        catch (error) {
            return null;
        }
    }
}