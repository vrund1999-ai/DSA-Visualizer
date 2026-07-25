import type { Step } from "@/core/types";

export interface CircularDistData {
  words: string[];
  target: string;
  startIndex: number;
  /** index currently examined */
  cur: number | null;
  /** distance for the current match, if any */
  dist: number | null;
  best: number;
  /** index achieving the current best */
  bestIndex: number | null;
  answer: number | null;
}

export type CircularDistStep = Step<CircularDistData>;

const INF = Number.POSITIVE_INFINITY;

/**
 * The circular distance from start to index i is min(|i−start|, n−|i−start|). Check
 * every occurrence of the target and keep the smallest such distance. `line` indexes
 * CODE.
 */
export function circularDistSteps(words: string[], target: string, startIndex: number): CircularDistStep[] {
  const steps: CircularDistStep[] = [];
  const n = words.length;
  let best = INF;
  let bestIndex: number | null = null;

  const snap = (o: Partial<CircularDistData>): CircularDistData => ({ words: [...words], target, startIndex, cur: null, dist: null, best, bestIndex, answer: null, ...o });
  const push = (line: number, explanation: string, data: CircularDistData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Find the nearest "${target}" from index ${startIndex} (moving either way).`, snap({}));

  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      const d = Math.abs(i - startIndex);
      const circular = Math.min(d, n - d);
      if (circular < best) {
        best = circular;
        bestIndex = i;
      }
      push(6, `"${target}" at ${i}: distance ${circular}${circular === best ? " (best)" : ""}.`, snap({ cur: i, dist: circular }));
    }
  }

  const answer = best === INF ? -1 : best;
  push(9, answer === -1 ? `"${target}" not found → -1.` : `Shortest distance: ${answer}.`, snap({ answer }));
  return steps;
}
