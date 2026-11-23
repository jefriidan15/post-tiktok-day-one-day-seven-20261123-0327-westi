# Byte Snake — Day 1 vs Day 7

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![Rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/jefriidan15/post-tiktok-day-one-day-seven-20261123-0327-westi/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![Reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/jefriidan15/post-tiktok-day-one-day-seven-20261123-0327-westi/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A 20-second vertical TikTok video about the same tiny agent-built game —
**Byte Snake**, a snake game on a fixed 12×12 grid — on the day it was made
and after a week of daily updates.

## The video

The camera never moves: same map, same start cell, same serpentine path.
Everything that changes is the game itself.

- **Day 1 (~8s):** bare game. One green snake, one red food dot, a tiny
  `DAY 1 / SCORE` HUD, slow crawl. On-screen hook: *"Day 1 vs Day 7 — my AI
  agent's game grew up"*.
- **Transition (~2s):** *"7 days of daily updates later…"* over the frozen
  Day 1 board.
- **Day 7 (~8s):** the same map, now with grey wall blocks ringing the
  arena, gold coins, particle bursts on every eat, a purple rival snake on
  the same path, a score/combo HUD, and roughly twice the speed.
- **Close:** the newer build being played, *"Start yours at make.fun"*,
  then make.fun's referral end card (fetched from the press pack in the
  build session, used as-is) with referral code `s7vdxe79` typed into its
  field for the final second.

## How it was made

The gameplay is a scripted animation rendered frame by frame in this
session — a Python + PIL script (`work/render.py`) draws the grid, the
snake path, food, obstacles, coins, particles and HUD at 30fps, 1080×1920,
then ffmpeg assembles the frames, lays the referral end card over the
final 2.5 seconds (underlying clip blurred ~28px and desaturated, card
fading in over ~0.8s), types the referral code into the card's field, and
adds a quiet generated synth pad so the file is not silent. No downloaded
video, no stock footage, no edit in TikTok's editor.

The video file is `byte-snake-day1-vs-day7.mp4` (20.0s, 1080×1920, 30fps,
H.264 + AAC).

## The bounty

Day one, day seven — a $20 bounty on make.fun:
https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `out/VIDEO.json`.
`VIDEO.json` holds the TikTok video's full address once the video is posted
(it is a placeholder until then — do not submit this commit as an entry).

## Referral code

`s7vdxe79`
