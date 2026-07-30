import type { Step } from "@/core/types";

export interface CandiesData {
  candies: number[];
  k: number;
  lo: number;
  hi: number;
  s: number | null;
  count: number | null;
  ans: number;
  answer: number | null;
}

export type CandiesStep = Step<CandiesData>;

/**
 * More children can be served only with smaller piles, so the feasible pile sizes form a prefix — a
 * monotonic condition ripe for binary search. For a candidate size s, each original pile yields
 * floor(c / s) sub-piles; the largest s whose total reaches k is the answer. `line` indexes CODE.
 */
export function candiesSteps(candies: number[], k: number): CandiesStep[] {
  const steps: CandiesStep[] = [];
  let lo = 1;
  let hi = Math.max(...candies);
  let ans = 0;

  const snap = (o: Partial<CandiesData>): CandiesData => ({ candies, k, lo, hi, s: null, count: null, ans, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CandiesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Binary-search the pile size in [1, ${hi}]; each child needs one pile of that size.`);

  while (lo <= hi) {
    const s = (lo + hi) >> 1;
    let count = 0;
    for (const c of candies) count += Math.floor(c / s);
    if (count >= k) {
      ans = s;
      push(8, `Piles of ${s}: ${count} available ≥ ${k} children — feasible, try larger.`, { s, count });
      lo = s + 1;
    } else {
      push(10, `Piles of ${s}: only ${count} < ${k} — too big, go smaller.`, { s, count });
      hi = s - 1;
    }
  }

  push(12, `Largest pile size serving ${k} children: ${ans}.`, { answer: ans });
  return steps;
}
