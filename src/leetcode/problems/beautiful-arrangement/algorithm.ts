import type { Step } from "@/core/types";

export interface BeautifulArrData {
  n: number;
  /** current partial arrangement: arrangement[pos] = value placed at position pos (1-indexed) */
  arrangement: (number | null)[];
  /** position being filled */
  pos: number | null;
  count: number;
  answer: number | null;
}

export type BeautifulArrStep = Step<BeautifulArrData>;

const MAX_STEPS = 400;

/**
 * Beautiful Arrangement: count permutations of 1..n where each value v at position pos satisfies v % pos ==
 * 0 or pos % v == 0. Backtracking places a divisible value at each position, counting complete arrangements.
 * `line` indexes CODE.
 */
export function beautifulArrSteps(n: number): BeautifulArrStep[] {
  const steps: BeautifulArrStep[] = [];
  const used = new Array(n + 1).fill(false);
  const arrangement: (number | null)[] = new Array(n + 1).fill(null);
  let count = 0;

  const snap = (o: Partial<BeautifulArrData>): BeautifulArrData => ({
    n,
    arrangement: arrangement.slice(1),
    pos: null,
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<BeautifulArrData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Count beautiful arrangements of 1..${n} by backtracking.`);

  const dfs = (pos: number) => {
    if (pos > n) {
      count++;
      push(4, `Complete arrangement [${arrangement.slice(1).join(", ")}] → count ${count}.`, { pos: null });
      return;
    }
    for (let v = 1; v <= n; v++) {
      if (used[v]) continue;
      if (v % pos === 0 || pos % v === 0) {
        used[v] = true;
        arrangement[pos] = v;
        push(8, `Place ${v} at position ${pos} (divisible).`, { pos });
        dfs(pos + 1);
        used[v] = false;
        arrangement[pos] = null;
      }
    }
  };

  dfs(1);
  push(15, `Total beautiful arrangements = ${count}.`, { answer: count });
  return steps;
}
