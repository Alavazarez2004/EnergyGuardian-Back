import { Energy } from "../models/Energy";

export interface EnergyService {
    createEnergy(energy: Energy): Promise<Energy | null>;
    getConsumptionByDate(room_id: number, start_date: Date, end_date: Date): Promise<Energy[] | null>;
    getConsumptionByRoom(room_id: number): Promise<Energy[] | null>;
}