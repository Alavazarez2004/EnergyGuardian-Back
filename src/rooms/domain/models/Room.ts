export class Room {
    constructor(
        readonly room_id: number,
        readonly room_name: string,
        readonly user_id: number,
        readonly creadted_at: Date,
        readonly updated_at: Date,
        readonly updated_by: number,
        readonly deleted_at: Date,
        readonly deleted_by: number,
        readonly deleted: number
    ) {}
}