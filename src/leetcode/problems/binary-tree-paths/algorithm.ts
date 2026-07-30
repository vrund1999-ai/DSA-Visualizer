import type { Step } from "@/core/types";

export interface TreePathsData {
  heap: (number | null)[];
  cur: number | null;
  /** heap indices on the current root-to-node path */
  path: number[];
  res: string[];
  justAdded: string | null;
  answer: string[] | null;
}

export type TreePathsStep = Step<TreePathsData>;

/**
 * A depth-first walk carries the sequence of values from the root down; each time it reaches a leaf, that
 * accumulated path is recorded. `line` indexes CODE.
 */
export function treePathsSteps(heap: (number | null)[]): TreePathsStep[] {
  const steps: TreePathsStep[] = [];
  const res: string[] = [];
  const has = (i: number) => i < heap.length && heap[i] !== null;

  const snap = (o: Partial<TreePathsData>): TreePathsData => ({ heap, cur: null, path: [], res: [...res], justAdded: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TreePathsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "DFS from the root; record the value path at each leaf.");

  function dfs(i: number, path: number[]) {
    if (!has(i)) return;
    const newPath = [...path, i];
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (!has(l) && !has(r)) {
      const str = newPath.map((x) => heap[x]).join("->");
      res.push(str);
      push(6, `Leaf ${heap[i]} → record path "${str}".`, { cur: i, path: newPath, justAdded: str });
      return;
    }
    push(2, `Visit ${heap[i]}.`, { cur: i, path: newPath });
    dfs(l, newPath);
    dfs(r, newPath);
  }

  dfs(0, []);
  push(13, `${res.length} root-to-leaf path(s).`, { answer: [...res] });
  return steps;
}
