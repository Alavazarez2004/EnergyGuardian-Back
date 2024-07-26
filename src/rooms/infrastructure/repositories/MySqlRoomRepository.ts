import { db } from "../../../database/db";
import { RoomService } from "../../domain/services/RoomService";
import { Room } from "../../domain/models/Room";

export class MySqlRoomRepository implements RoomService {
    async createRoom(room: Room): Promise<Room | null> {
        const query = "INSERT INTO rooms (room_name, user_id) VALUES (?, ?)";
        const [result]:any = await db.query(query, [room.room_name, room.user_id]);
        
        if (result.affectedRows === 0) {
            return null;
        }

        return result;
    }

    async getRoom(room_id: number): Promise<Room | null> {
        const query = "SELECT room_id, room_name, user_id, deleted FROM rooms WHERE room_id = ?";
        const [rows]:any = await db.query(query, [room_id]);
        if (rows.length === 0) {
            if (rows.deleted === 1) {
                return null;
            }
            return null;
        }
        return rows[0];
        
    }

    async getRoomsByUserId(user_id: number): Promise<Room[] | null> {
        const query = "SELECT room_id, room_name, user_id, deleted FROM rooms WHERE user_id = ?";
        const [rows]:any = await db.query(query, [user_id]);
        if (rows.length === 0) {
            if (rows.deleted === 1) {
                return null;
            }
            return null;
        }
        return rows;
    }

    async updateRoom(room_id: number, room: Room): Promise<Room | null> {
        const query = "UPDATE rooms SET room_name = ?, updated_at = ? WHERE room_id = ?";
        const date = new Date();
        const [result]:any = await db.query(query, [room.room_name, date, room_id]);

        if (result.affectedRows === 0) {
            if (result.deleted === 1) {
                return null;
            }
            return null;
        }

        return result;
    }

    async deleteRoom(room_id: number): Promise<boolean | null> {
        const query = "UPDATE rooms SET deleted_at = ?, deleted = 1 WHERE room_id = ?";
        const date = new Date();
        const [result]:any = await db.query(query, [date, room_id]);

        if (result.affectedRows === 0) {
            if (result.deleted === 1) {
                return null;
            }
            return null;
        }

        return true;
    }
}