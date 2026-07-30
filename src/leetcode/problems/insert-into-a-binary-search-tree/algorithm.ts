import type { Step } from "@/core/types";

export interface InsertBSTData {
  heap: (number | null)[];
  val: number;
  cur: number | null;
  /** heap indices on the search path */
  path: number[];
  /** heap index of the newly inserted node */
  inserted: number | null;
  answer: (number | null)[] | null;
}

export type InsertBSTStep = Step<InsertBSTData>;

/**
 * A BST insert walks down from the root, going left when the value is smaller and right otherwise, until
 * it reaches an empty spot — the only place the new node can go while preserving the BST order. `line`
 * indexes CODE.
 */
export function insertBSTSteps(input: (number | null)[], val: number): InsertBSTStep[] {
  const steps: InsertBSTStep[] = [];
  const heap = [...input];
  const has = (i: number) => i < heap.length && heap[i] !== null;
  const setHeap = (idx: number, v: number) => {
    while (heap.length <= idx) heap.push(null);
    heap[idx] = v;
  };

  const snap = (o: Partial<InsertBSTData>): InsertBSTData => ({ heap: [...heap], val, cur: null, path: [], inserted: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<InsertBSTData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Insert ${val}: walk down the BST until an empty child is found.`);

  if (!has(0)) {
    setHeap(0, val);
    push(1, `Empty tree → ${val} becomes the root.`, { inserted: 0, answer: [...heap] });
    return steps;
  }

  const path: number[] = [];
  let i = 0;
  for (;;) {
    path.push(i);
    if (val < (heap[i] as number)) {
      const l = 2 * i + 1;
      push(4, `${val} < ${heap[i]} → go left.`, { cur: i, path: [...path] });
      if (!has(l)) {
        setHeap(l, val);
        push(5, `Left child empty → insert ${val}.`, { cur: i, path: [...path], inserted: l });
        i = l;
        break;
      }
      i = l;
    } else {
      const r = 2 * i + 2;
      push(8, `${val} ≥ ${heap[i]} → go right.`, { cur: i, path: [...path] });
      if (!has(r)) {
        setHeap(r, val);
        push(8, `Right child empty → insert ${val}.`, { cur: i, path: [...path], inserted: r });
        i = r;
        break;
      }
      i = r;
    }
  }

  push(12, `Inserted ${val}.`, { inserted: i, path, answer: [...heap] });
  return steps;
}
