import type { Step } from "@/core/types";

export interface PathSumData {
  heap: (number | null)[];
  target: number;
  /** heap indices on the current root-to-node path */
  path: number[];
  remain: number;
  /** node currently visited */
  current: number | null;
  results: number[][];
  found: boolean;
}

export type PathSumStep = Step<PathSumData>;

/**
 * DFS from the root carrying the remaining target. Each node subtracts its value; a
 * leaf that drives the remainder to zero yields a valid path. Backtrack on the way
 * up. `line` indexes CODE.
 */
export function pathSumSteps(heap: (number | null)[], target: number): PathSumStep[] {
  const steps: PathSumStep[] = [];
  const path: number[] = [];
  const results: number[][] = [];

  const snap = (o: Partial<PathSumData>): PathSumData => ({ heap: [...heap], target, path: [...path], remain: 0, current: null, results: results.map((r) => [...r]), found: false, ...o });
  const push = (line: number, explanation: string, data: PathSumData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Find every root-to-leaf path summing to ${target}.`, snap({ remain: target }));

  const dfs = (i: number, remain: number) => {
    if (i >= heap.length || heap[i] === null) return;
    const val = heap[i] as number;
    path.push(i);
    remain -= val;
    const isLeaf = (2 * i + 1 >= heap.length || heap[2 * i + 1] === null) && (2 * i + 2 >= heap.length || heap[2 * i + 2] === null);
    if (isLeaf && remain === 0) {
      results.push(path.map((p) => heap[p] as number));
      push(7, `Leaf ${val} — path sums to target! Record it.`, snap({ current: i, remain, found: true }));
    } else {
      push(5, `Visit ${val}; remaining ${remain}.`, snap({ current: i, remain }));
      dfs(2 * i + 1, remain);
      dfs(2 * i + 2, remain);
    }
    path.pop();
  };
  dfs(0, target);

  push(14, `Found ${results.length} path(s).`, snap({}));
  return steps;
}
