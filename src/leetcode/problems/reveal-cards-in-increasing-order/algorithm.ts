import type { Step } from "@/core/types";

export interface RevealData {
  sorted: number[];
  /** result deck; null = not yet placed */
  res: (number | null)[];
  /** remaining position queue */
  idx: number[];
  /** index into `sorted` being placed */
  cardIdx: number | null;
  /** position slot just filled */
  placed: number | null;
  answer: number[] | null;
}

export type RevealStep = Step<RevealData>;

/**
 * Simulate the reveal in reverse-friendly order: with the cards sorted ascending, a queue of the deck's
 * positions tells us where each next-smallest card lands. Each round reveals the front slot, then rotates
 * the following slot to the back — mirroring "reveal one, move one under." `line` indexes CODE.
 */
export function revealSteps(deck: number[]): RevealStep[] {
  const steps: RevealStep[] = [];
  const sorted = [...deck].sort((a, b) => a - b);
  const n = sorted.length;
  const idx = [...Array(n).keys()];
  const res: (number | null)[] = new Array(n).fill(null);

  const snap = (o: Partial<RevealData>): RevealData => ({ sorted, res: [...res], idx: [...idx], cardIdx: null, placed: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RevealData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Sort deck to [${sorted.join(", ")}]; queue holds the deck positions in reveal order.`);

  for (let c = 0; c < sorted.length; c++) {
    const pos = idx.shift()!;
    res[pos] = sorted[c];
    push(7, `Place smallest remaining ${sorted[c]} at position ${pos}.`, { cardIdx: c, placed: pos });
    if (idx.length) {
      idx.push(idx.shift()!);
      push(9, "Rotate the next position to the bottom of the queue.", { cardIdx: c });
    }
  }

  push(11, `Arranged deck: [${res.join(", ")}].`, { answer: res as number[] });
  return steps;
}
