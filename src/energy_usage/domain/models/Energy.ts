export class Energy {
  constructor(
    readonly usage_id: number,
    readonly room_id: number,
    readonly consumption: string,
    readonly voltage: string,
    readonly current: string,
    readonly power_factor: string,
    readonly timestamp: Date,
    readonly movement: number,
  ) {}
}