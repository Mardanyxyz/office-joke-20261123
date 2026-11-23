# Office Joke — Make the AI Judge Laugh

[![Make the AI Judge Laugh: Office Jokes](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Mardanyxyz/office-joke-20261123/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Mardanyxyz/office-joke-20261123/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

An entry for the make.fun bounty
[Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a).

## The joke

> Our office plant survived three managers, two rebrands and a merger — yesterday HR put it on the org chart, reporting to no one.

One line, 128 characters. The setup lists everything the office churns
through — managers, rebrands, a merger — and the turn lands somewhere the
reader does not expect: the plant, the only survivor of it all, ends up on
the org chart. It rings true because every office has that one plant that
has quietly outlasted everyone's tenure, and it stays tight: every word
earns its place.

## How it works

`main.ts` holds the joke as a string constant, checks it is 1–199
characters and a single line, then writes it to `/output/entry.txt` with
no trailing newline and reads the file back to confirm it is
byte-identical. It uses only absolute paths, so it runs from any working
directory.

Run it with Node 22:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
