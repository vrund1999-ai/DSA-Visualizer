import type { Step } from "@/core/types";

export interface InvertData {
  heap: (number | null)[];
  current: number | null;
  swapped: number[];
  done: number[];
}

export type InvertStep = Step<InvertData>;

function completeSize(len: number): number {
  let d = 0;
  while (2 ** d - 1 < len) d++;
  return 2 ** d - 1;
}

/** BFS indices of the subtree rooted at `root` within a complete array. */
function subtreeIndices(root: number, size: number): number[] {
  const res: number[] = [];
  const q = [root];
  while (q.length) {
    const j = q.shift()!;
    if (j >= size) continue;
    res.push(j);
    q.push(2 * j + 1, 2 * j + 2);
  }
  return res;
}

/**
 * Invert = swap every node's two children. In this heap-array view, swapping a
 * node's children means exchanging its entire left and right subtree blocks, then
 * recursing. `line` indexes CODE.
 */
export function invertSteps(input: (number | null)[]): InvertStep[] {
  const size = completeSize(input.length);
  const heap: (number | null)[] = [...input];
  while (heap.length < size) heap.push(null);
  const steps: InvertStep[] = [];
  const done: number[] = [];

  const snap = (line: number, explanation: string, current: number | null, swapped: number[]) => {
    steps.push({ id: steps.length, line, explanation, data: { heap: [...heap], current, swapped: [...swapped], done: [...done] }, highlights: [] });
  };

  const has = (i: number) => i < size && heap[i] !== null;

  const invert = (i: number) => {
    if (!has(i)) return;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (has(l) || has(r)) {
      const L = subtreeIndices(l, size);
      const R = subtreeIndices(r, size);
      for (let t = 0; t < L.length; t++) {
        const tmp = heap[L[t]];
        heap[L[t]] = heap[R[t]];
        heap[R[t]] = tmp;
      }
      snap(3, `Swap the children of ${heap[i]}.`, i, [l, r]);
    }
    done.push(i);
    invert(l);
    invert(r);
  };

  if (!has(0)) {
    snap(1, "Empty tree — nothing to invert.", null, []);
    return steps;
  }
  snap(0, "Mirror the tree by swapping every node's two children.", 0, []);
  invert(0);
  snap(6, "Tree fully inverted.", null, []);
  return steps;
}
