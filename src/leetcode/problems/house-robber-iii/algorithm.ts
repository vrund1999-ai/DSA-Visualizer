import type { Step } from "@/core/types";

export interface RobTreeData {
  heap: (number | null)[];
  /** [rob, skip] per node index */
  dp: Record<number, [number, number]>;
  cur: number | null;
  /** node indices in the chosen (robbed) set */
  robbed: number[];
  answer: number | null;
}

export type RobTreeStep = Step<RobTreeData>;

/**
 * Each node returns two totals: the best if it is robbed (its value plus the "skip" totals of its
 * children, since neighbors can't both be robbed) and the best if skipped (children free to choose their
 * max). A post-order DFS fills these; the root's larger option is the answer. `line` indexes CODE.
 */
export function robTreeSteps(heap: (number | null)[]): RobTreeStep[] {
  const steps: RobTreeStep[] = [];
  const dp: Record<number, [number, number]> = {};
  const has = (i: number) => i < heap.length && heap[i] !== null;

  const snap = (o: Partial<RobTreeData>): RobTreeData => ({ heap, dp: { ...dp }, cur: null, robbed: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RobTreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Post-order DFS; each node returns [best if robbed, best if skipped].");

  function dfs(i: number): [number, number] {
    if (!has(i)) return [0, 0];
    const l = dfs(2 * i + 1);
    const r = dfs(2 * i + 2);
    const robThis = (heap[i] as number) + l[1] + r[1];
    const skipThis = Math.max(...l) + Math.max(...r);
    dp[i] = [robThis, skipThis];
    push(9, `Node ${heap[i]}: rob = ${robThis}, skip = ${skipThis}.`, { cur: i });
    return [robThis, skipThis];
  }

  dfs(0);

  // reconstruct robbed set
  const robbed: number[] = [];
  const choose = (i: number, canRob: boolean) => {
    if (!has(i)) return;
    const [robThis, skipThis] = dp[i];
    if (canRob && robThis >= skipThis) {
      robbed.push(i);
      choose(2 * i + 1, false);
      choose(2 * i + 2, false);
    } else {
      choose(2 * i + 1, true);
      choose(2 * i + 2, true);
    }
  };
  choose(0, true);

  const answer = Math.max(...dp[0]);
  push(11, `Maximum robbed amount: ${answer}.`, { robbed, answer });
  return steps;
}
