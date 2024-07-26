export class User {
    constructor(
        readonly user_id: number,
        readonly username: string,
        readonly password: string,
        readonly email: string,
        readonly created_at: Date,
        readonly updated_at: Date,
        readonly updated_by: number,
        readonly deleted_at: Date,
        readonly deleted_by: number,
        readonly deleted: number
    ) {}
}