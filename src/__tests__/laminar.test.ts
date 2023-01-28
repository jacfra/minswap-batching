import { describe, expect, it } from '@jest/globals';
import { order_0, order_1 } from '../data/order';
import {
  leg_0_receive,
  leg_0_send,
  leg_1_receive,
  leg_1_send,
} from '../data/leg';

describe('Laminar Understanding', () => {
  beforeEach(() => {
    // reset order relations
    leg_0_send.block_height = undefined;
    leg_0_receive.block_height = undefined;
    leg_1_send.block_height = undefined;
    leg_1_receive.block_height = undefined;
  });

  it('2_sent_2_received', () => {
    order_0.sendLeg.block_height = 0;
    order_0.receiveLeg.block_height = 2;

    order_1.sendLeg.block_height = 1;
    order_1.receiveLeg.block_height = 3;

    expect(order_0.sendLeg.block_height).toBeLessThan(
      order_0.receiveLeg.block_height,
    );
    expect(order_1.sendLeg.block_height).toBeLessThan(
      order_1.receiveLeg.block_height,
    );
    expect(order_0.receiveLeg.block_height).toBeLessThanOrEqual(
      order_1.receiveLeg.block_height,
    );
  });

  it('2_sent_1_received_batched', () => {
    order_0.sendLeg.block_height = 0;
    order_0.receiveLeg.block_height = 2;

    order_1.sendLeg.block_height = 1;
    order_1.receiveLeg.block_height = 2;

    expect(order_0.sendLeg.block_height).toBeLessThan(
      order_0.receiveLeg.block_height,
    );
    expect(order_1.sendLeg.block_height).toBeLessThan(
      order_1.receiveLeg.block_height,
    );
    expect(order_0.receiveLeg.block_height).toBeLessThanOrEqual(
      order_1.receiveLeg.block_height,
    );
  });

  it('2_sent_2_received_fast_laminar', () => {
    order_0.sendLeg.block_height = 0;
    order_0.receiveLeg.block_height = 1;

    order_1.sendLeg.block_height = 1;
    order_1.receiveLeg.block_height = 2;

    expect(order_0.sendLeg.block_height).toBeLessThan(
      order_0.receiveLeg.block_height,
    );
    expect(order_1.sendLeg.block_height).toBeLessThan(
      order_1.receiveLeg.block_height,
    );
    expect(order_0.receiveLeg.block_height).toBeLessThanOrEqual(
      order_1.receiveLeg.block_height,
    );
  });

  it('invalid_receive_order', () => {
    order_0.sendLeg.block_height = 0;
    order_0.receiveLeg.block_height = 3;

    order_1.sendLeg.block_height = 1;
    order_1.receiveLeg.block_height = 2;

    expect(order_0.sendLeg.block_height).toBeLessThan(
      order_0.receiveLeg.block_height,
    );
    expect(order_1.sendLeg.block_height).toBeLessThan(
      order_1.receiveLeg.block_height,
    );
    expect(order_0.receiveLeg.block_height).not.toBeLessThanOrEqual(
      order_1.receiveLeg.block_height,
    );
  });
});
