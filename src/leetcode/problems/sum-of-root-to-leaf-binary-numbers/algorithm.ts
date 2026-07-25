import type { Step } from "@/core/types";

export interface RootToLeafData {
  heap: (number | null)[];
  /** node index currently visited */
  cur: number | null;
  /** binary value accumulated along the path to cur */
  value: number | null;
  /** indices on the current root→node path */
  path: number[];
  /** leaf values already added */
  leafValues: number[];
  sum: number;
  answer: number | null;
}

export type RootToLeafStep = Step<RootToLeafData>;

/**
 * Each root-to-leaf path spells a binary number, high bit first. Descending, we shift the running
 * value left and OR in the current bit (value·2 + node); at a leaf that value is the path's number,
 * and the answer sums them over all leaves. `line` indexes CODE.
 */
export function rootToLeafSteps(heap: (number | null)[]): RootToLeafStep[] {
  const steps: RootToLeafStep[] = [];
  const leafValues: number[] = [];
  let sum = 0;

  const snap = (o: Partial<RootToLeafData>): RootToLeafData => ({ heap, cur: null, value: null, path: [], leafValues: [...leafValues], sum, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RootToLeafData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const valid = (i: number) => i < heap.length && heap[i] !== null;

  push(1, "Descend each path, shifting the binary value left and adding the node's bit.");

  const dfs = (i: number, value: number, path: number[]) => {
    if (!valid(i)) return;
    const v = value * 2 + heap[i]!;
    const newPath = [...path, i];
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    const isLeaf = !valid(left) && !valid(right);
    if (isLeaf) {
      leafValues.push(v);
      sum += v;
      push(5, `Leaf ${heap[i]}: path value = ${v} (binary). Sum now ${sum}.`, { cur: i, value: v, path: newPath });
    } else {
      push(3, `Visit ${heap[i]}: value = ${value}·2 + ${heap[i]} = ${v}.`, { cur: i, value: v, path: newPath });
    }
    dfs(left, v, newPath);
    dfs(right, v, newPath);
  };

  dfs(0, 0, []);
  push(9, `Sum of all root-to-leaf binary numbers: ${sum}.`, { answer: sum });
  return steps;
}
