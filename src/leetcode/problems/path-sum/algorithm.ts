import type { Step } from "@/core/types";

export interface PathSumInput {
  heap: (number | null)[];
  target: number;
}

export interface PathSumData {
  heap: (number | null)[];
  target: number;
  current: number | null;
  running: number;
  path: number[];
  found: boolean | null;
}

export type PathSumStep = Step<PathSumData>;

const has = (heap: (number | null)[], i: number) => i < heap.length && heap[i] !== null;

/**
 * DFS every root-to-leaf path, accumulating the running sum. A path succeeds when
 * a leaf makes the total equal the target. `line` indexes CODE.
 */
export function pathSumSteps(input: PathSumInput): PathSumStep[] {
  const { heap, target } = input;
  const steps: PathSumStep[] = [];
  const path: number[] = [];

  const snap = (line: number, explanation: string, current: number | null, running: number, res: boolean | null = null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { heap: [...heap], target, current, running, path: [...path], found: res },
      highlights: [],
    });
  };

  const dfs = (i: number, sum: number): boolean => {
    const val = heap[i] as number;
    const running = sum + val;
    path.push(i);
    snap(2, `Visit ${val}; running sum ${running} (need ${target}).`, i, running);
    const leaf = !has(heap, 2 * i + 1) && !has(heap, 2 * i + 2);
    if (leaf) {
      if (running === target) {
        snap(3, `Leaf ${val} makes the sum ${running} = target — path found!`, i, running, true);
        return true;
      }
      snap(3, `Leaf ${val} gives ${running} ≠ ${target} — dead end.`, i, running);
      path.pop();
      return false;
    }
    if (has(heap, 2 * i + 1) && dfs(2 * i + 1, running)) return true;
    if (has(heap, 2 * i + 2) && dfs(2 * i + 2, running)) return true;
    path.pop();
    snap(5, `No path through ${val} works — backtrack.`, i, running);
    return false;
  };

  if (!has(heap, 0)) {
    snap(1, "Empty tree — no path.", null, 0, false);
    return steps;
  }
  snap(0, `Look for a root-to-leaf path summing to ${target}.`, 0, 0);
  const ok = dfs(0, 0);
  snap(ok ? 3 : 1, ok ? "A qualifying path exists." : "No root-to-leaf path sums to the target.", null, 0, ok);
  return steps;
}
