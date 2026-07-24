import type { Step } from "@/core/types";

export interface VerticalOrderData {
  heap: (number | null)[];
  current: number | null;
  visited: number[];
  columns: { col: number; vals: number[] }[];
}

export type VerticalOrderStep = Step<VerticalOrderData>;

const val = (heap: (number | null)[], i: number) => (i < heap.length ? heap[i] : null);

/**
 * BFS carrying a column index (root = 0, left = col-1, right = col+1). Group node
 * values by column, then read columns left to right. `line` indexes CODE.
 */
export function verticalOrderSteps(heap: (number | null)[]): VerticalOrderStep[] {
  const steps: VerticalOrderStep[] = [];
  const cols = new Map<number, number[]>();
  const visited: number[] = [];
  const queue: [number, number][] = heap.length && heap[0] !== null ? [[0, 0]] : [];
  let min = 0;
  let max = 0;

  const columns = () =>
    [...cols.keys()].sort((a, b) => a - b).map((col) => ({ col, vals: [...cols.get(col)!] }));
  const snap = (o: Partial<VerticalOrderData>): VerticalOrderData => ({ heap: [...heap], current: null, visited: [...visited], columns: columns(), ...o });
  const push = (line: number, explanation: string, data: VerticalOrderData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "BFS from the root, carrying each node's column index (root = 0).", snap({}));

  while (queue.length) {
    const [i, col] = queue.shift()!;
    visited.push(i);
    if (!cols.has(col)) cols.set(col, []);
    cols.get(col)!.push(heap[i] as number);
    min = Math.min(min, col);
    max = Math.max(max, col);
    push(8, `Node ${heap[i]} sits in column ${col}.`, snap({ current: i }));
    if (val(heap, 2 * i + 1) !== null) queue.push([2 * i + 1, col - 1]);
    if (val(heap, 2 * i + 2) !== null) queue.push([2 * i + 2, col + 1]);
  }

  push(15, `Read columns ${min}…${max} left to right.`, snap({}));
  push(16, `Vertical order done — ${max - min + 1} column(s).`, snap({}));
  return steps;
}
