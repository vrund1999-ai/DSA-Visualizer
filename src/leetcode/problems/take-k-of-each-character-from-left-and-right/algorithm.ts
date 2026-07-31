import type { Step } from "@/core/types";

export interface TakeCharsData {
  s: string;
  k: number;
  /** window [left, right] we leave untaken */
  left: number | null;
  right: number | null;
  /** counts inside the current window */
  win: Record<string, number>;
  best: number;
  /** best window [start, end] found */
  bestWindow: [number, number] | null;
  answer: number | null;
}

export type TakeCharsStep = Step<TakeCharsData>;

/**
 * Take K of Each Character: instead of choosing what to take from the two ends, find the LONGEST middle
 * window we can leave — one where the characters outside it still contain ≥ k of each of a, b, c. The answer
 * is n minus that window's length. `line` indexes CODE.
 */
export function takeCharsSteps(s: string, k: number): TakeCharsStep[] {
  const steps: TakeCharsStep[] = [];
  const total: Record<string, number> = { a: 0, b: 0, c: 0 };
  for (const c of s) total[c]++;
  const win: Record<string, number> = { a: 0, b: 0, c: 0 };

  const snap = (o: Partial<TakeCharsData>): TakeCharsData => ({
    s,
    k,
    left: null,
    right: null,
    win: { ...win },
    best: 0,
    bestWindow: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TakeCharsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (total.a < k || total.b < k || total.c < k) {
    push(4, `Not enough of some character (need ${k} each) → impossible.`, { answer: -1 });
    return steps;
  }

  push(6, `Find the longest window to leave, keeping ≥ ${k} of each outside it.`);

  let left = 0;
  let best = 0;
  let bestWindow: [number, number] | null = null;
  for (let r = 0; r < s.length; r++) {
    win[s[r]]++;
    while (total[s[r]] - win[s[r]] < k) {
      win[s[left]]--;
      left++;
    }
    if (r - left + 1 > best) {
      best = r - left + 1;
      bestWindow = [left, r];
    }
    push(13, `Window [${left}, ${r}] leavable; best kept = ${best}.`, { left, right: r, best, bestWindow });
  }

  const answer = s.length - best;
  push(15, `Take ${answer} character(s) from the ends (n − ${best}).`, { answer, bestWindow });
  return steps;
}
