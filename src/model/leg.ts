export enum LegSendOrReceive {
  send,
  receive,
}

export class Leg {
  id!: number;
  sendOrReceive!: LegSendOrReceive;
  order_id!: number;
  block_height?: number;
}
