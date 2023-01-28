import { Leg, LegSendOrReceive } from '../model/leg';

const leg_0_send = new Leg();
leg_0_send.id = 0;
leg_0_send.sendOrReceive = LegSendOrReceive.send;
leg_0_send.order_id = 0;

const leg_0_receive = new Leg();
leg_0_receive.id = 1;
leg_0_receive.sendOrReceive = LegSendOrReceive.receive;
leg_0_receive.order_id = 0;

const leg_1_send = new Leg();
leg_0_send.id = 2;
leg_0_send.sendOrReceive = LegSendOrReceive.send;
leg_0_send.order_id = 1;

const leg_1_receive = new Leg();
leg_0_receive.id = 3;
leg_0_receive.sendOrReceive = LegSendOrReceive.receive;
leg_0_receive.order_id = 1;

export { leg_0_send, leg_0_receive, leg_1_send, leg_1_receive };
