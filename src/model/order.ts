import { AssetPair } from './asset';
import { Leg } from './leg';

export enum OrderType {
  marketBuy,
}

export class Order {
  id!: number;
  orderType!: OrderType;
  assetPair!: AssetPair;
  sendLeg!: Leg;
  receiveLeg!: Leg;
}
