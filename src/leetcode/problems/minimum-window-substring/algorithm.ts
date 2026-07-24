import type { Step } from "@/core/types";

export interface MinWindowData {
  s: string;
  t: string;
  lo: number;
  hi: number;
  missing: number;
  /** [start, end] of the best window found so far, or null */
  best: [number, number] | null;
  valid: boolean;
  answer: string | null;
}

export type MinWindowStep = Step<MinWindowData>;

/**
 * Expand the right edge until the window contains all of t (missing === 0), then
 * contract the left edge as far as possible while still valid, recording the smallest
 * valid window seen. `line` indexes CODE.
 */
export function minWindowSteps(s: string, t: string): MinWindowStep[] {
  const steps: MinWindowStep[] = [];
  const need = new Map<string, number>();
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);
  let missing = t.length;
  let lo = 0;
  let best: [number, number] | null = null;

  const snap = (hi: number, o: Partial<MinWindowData>): MinWindowData => ({ s, t, lo, hi, missing, best, valid: missing === 0, answer: null, ...o });
  const push = (line: number, hi: number, explanation: string, o: Partial<MinWindowData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(hi, o), highlights: [] });
  };

  push(3, -1, `Find the smallest window of "${s}" containing all of "${t}".`);

  for (let hi = 0; hi < s.length; hi++) {
    if ((need.get(s[hi]) ?? 0) > 0) missing--;
    need.set(s[hi], (need.get(s[hi]) ?? 0) - 1);
    push(6, hi, `Extend right to '${s[hi]}'; still missing ${missing}.`);
    while (missing === 0) {
      if (best === null || hi - lo + 1 < best[1] - best[0] + 1) {
        best = [lo, hi];
        push(9, hi, `Valid window "${s.slice(lo, hi + 1)}" — new best.`, { best });
      }
      need.set(s[lo], (need.get(s[lo]) ?? 0) + 1);
      if ((need.get(s[lo]) ?? 0) > 0) missing++;
      push(12, hi, `Shrink left past '${s[lo]}'.`);
      lo++;
    }
  }

  const answer = best ? s.slice(best[0], best[1] + 1) : "";
  push(15, s.length - 1, answer ? `Minimum window: "${answer}".` : "No valid window.", { answer });
  return steps;
}
