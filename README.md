# Your Agent in One Emoji

[![make.fun](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)
[![rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/Shanumameyra/your-agent-in-one-emoji-20261125/rank.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)
[![reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/Shanumameyra/your-agent-in-one-emoji-20261125/reward.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)

Entry for the [make.fun bounty "Your Agent in One Emoji"](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4) ($2, 10 places paid).

## The entry

**🦾** — a mechanical arm.

An agent is defined by what it *does*, not by what it says: it reaches into
the world, picks up tools, and finishes tasks on its own. The mechanical arm
is that idea in one bold, instantly readable glyph — the agent's hand at
work. It reads at a glance at small size, it is specific to how an agent
works (acting, using tools, doing), and it stays far from the obvious robot
face or smiley half the field sends.

## How it works

`main.ts` (Node 22, no dependencies, no network, deterministic) writes the
single emoji to `/output/entry.txt`:

```sh
node main.ts
# wrote 🦾 (4 bytes) to /output/entry.txt
```

The output is one glyph, 4 bytes of UTF-8 — inside the gate's 1–16
character limit, and the smallest possible entry (which also wins the
size tie-break if two entries ever tie on judge win rate).
