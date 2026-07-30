import type { Step } from "@/core/types";

export interface EnvelopeData {
  sorted: number[][];
  i: number | null;
  tails: number[];
  /** position in tails just written */
  placed: number | null;
  answer: number | null;
}

export type EnvelopeStep = Step<EnvelopeData>;

/**
 * An envelope fits inside another only if strictly larger in both dimensions. Sorting by width ascending
 * and — for equal widths — height descending makes any strictly increasing run of heights a valid nesting
 * (equal widths can't chain), so the answer is the longest increasing subsequence of heights. `line` indexes CODE.
 */
export function envelopeSteps(input: number[][]): EnvelopeStep[] {
  const steps: EnvelopeStep[] = [];
  const sorted = input.map((e) => [...e]).sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  const tails: number[] = [];

  const snap = (o: Partial<EnvelopeData>): EnvelopeData => ({ sorted, i: null, tails: [...tails], placed: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EnvelopeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Sort by width asc, height desc: ${sorted.map((e) => `[${e}]`).join(", ")}. Then LIS on heights.`);

  for (let i = 0; i < sorted.length; i++) {
    const h = sorted[i][1];
    let lo = 0;
    let hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < h) lo = mid + 1;
      else hi = mid;
    }
    const extended = lo === tails.length;
    tails[lo] = h;
    push(11, `Height ${h}: ${extended ? `extends the chain to length ${tails.length}` : `replaces tails[${lo}]`}.`, { i, placed: lo });
  }

  push(13, `Maximum nested envelopes: ${tails.length}.`, { answer: tails.length });
  return steps;
}
