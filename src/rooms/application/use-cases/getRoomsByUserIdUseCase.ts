import { Room } from "../../domain/models/Room";
import { RoomService } from "../../domain/services/RoomService";

export class GetRoomsByUserIdUseCase {
    constructor(private readonly roomService: RoomService) {}

    async execute(user_id: number): Promise<Room[] | null> {
        try {
            const rooms = await this.roomService.getRoomsByUserId(user_id);

            return rooms;
        }
        catch (error) {
            return null;
        }
    }
}