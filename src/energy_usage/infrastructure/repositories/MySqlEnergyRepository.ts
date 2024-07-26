import { db } from "../../../database/db";
import { EnergyService } from "../../domain/services/EnergyService";
import { Energy } from "../../domain/models/Energy";

export class MySqlEnergyRepository implements EnergyService {
    async createEnergy(energy: Energy): Promise<Energy | null> {
        const query = "INSERT INTO energy_usage (room_id, energy_usage, date) VALUES (?, ?, ?)";
        const [result]:any = await db.query(query, [energy.room_id, energy.consumption, energy.voltage, energy.current, energy.power_factor, energy.timestamp, energy.movement]);
        
        if (result.affectedRows === 0) {
            return null;
        }

        return result;
    }

    async getConsumptionByRoom(room_id: number): Promise<Energy[] | null> {
        const query = "SELECT comsumption, voltage, current, power_factor, timestamp, movement FROM energy_usage WHERE room_id = ?";
        const [rows]:any = await db.query(query, [room_id]);
        if (rows.length === 0) {
            return null;
        }
        return rows;
    }

    async getConsumptionByDate(room_id: number, start_date: Date, end_date: Date): Promise<Energy[] | null> {
        const query = "SELECT comsumption, voltage, current, power_factor, timestamp, movement WHERE room_id = ? AND timestamp BETWEEN ? AND ?";
        const [rows]:any = await db.query(query, [room_id, start_date, end_date]);
        if (rows.length === 0) {
            return null;
        }
        return rows;
    }
}