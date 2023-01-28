# minswap-batching

What are the valid responses laminar could batch transactions?

i.e.

```
where both send_a_tx and send_b_tx are same interaction
(i.e. a market buy of min/ada)

block 0: send_a_tx
block 1: send_b_tx
block 2: receive_a_tx
block 3: receive_b_tx

-or-

block 0: send_a_tx
block 1: send_b_tx
block 2: receive_a_and_b_tx

-or-

block 0: send_a_tx
block 1: receive_a_tx, send_b_tx
block 2: receive_b_tx

-never-

block 0: send_a_tx
block 1: send_b_tx
block 2: receive_b_tx
block 3: receive_a_tx
```

the **test** dir contains tests of these cases
