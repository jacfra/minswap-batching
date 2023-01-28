import { AssetPair } from '../model/asset';
import { Order, OrderType } from '../model/order';
import { leg_0_receive, leg_0_send, leg_1_receive, leg_1_send } from './leg';

const order_0 = new Order();
order_0.id = 0;
order_0.orderType = OrderType.marketBuy;
order_0.assetPair = AssetPair.minAda;
order_0.sendLeg = leg_0_send;
order_0.receiveLeg = leg_0_receive;

const order_1 = new Order();
order_1.id = 1;
order_1.orderType = OrderType.marketBuy;
order_1.assetPair = AssetPair.minAda;
order_1.sendLeg = leg_1_send;
order_1.receiveLeg = leg_1_receive;

export { order_0, order_1 };
