import { Room } from "../models/Room";

export interface RoomService {
    createRoom(room: Room): Promise<Room | null>;
    getRoom(room_id: number): Promise<Room | null>;
    getRoomsByUserId(user_id: number): Promise<Room[] | null>;
    updateRoom(room_id: number, room: Room): Promise<Room | null>;
    deleteRoom(room_id: number): Promise<boolean | null>;
}