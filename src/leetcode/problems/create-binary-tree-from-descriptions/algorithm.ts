import type { Step } from "@/core/types";

export interface CreateTreeData {
  descriptions: number[][];
  /** description index currently processed */
  di: number | null;
  /** tree so far as a heap array (once root known) */
  heap: (number | null)[];
  root: number | null;
  answer: (number | null)[] | null;
}

export type CreateTreeStep = Step<CreateTreeData>;

/**
 * Each description links a parent to a left or right child; the one value that never appears as a child
 * is the root. After wiring up the child pointers, the root is found and the tree laid out into a heap
 * array (children of i at 2i+1 / 2i+2). `line` indexes CODE.
 */
export function createTreeSteps(descriptions: number[][]): CreateTreeStep[] {
  const steps: CreateTreeStep[] = [];
  const left = new Map<number, number>();
  const right = new Map<number, number>();
  const hasParent = new Set<number>();
  const all = new Set<number>();

  const snap = (o: Partial<CreateTreeData>): CreateTreeData => ({ descriptions, di: null, heap: [], root: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CreateTreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Wire up parent→child links; the value never used as a child is the root.");

  for (let i = 0; i < descriptions.length; i++) {
    const [p, c, isLeft] = descriptions[i];
    all.add(p);
    all.add(c);
    if (isLeft) left.set(p, c);
    else right.set(p, c);
    hasParent.add(c);
    push(8, `${p} → ${c} as ${isLeft ? "left" : "right"} child.`, { di: i });
  }

  let root = -1;
  for (const v of all) if (!hasParent.has(v)) root = v;

  // BFS into heap array
  const heap: (number | null)[] = [];
  const setHeap = (idx: number, v: number) => {
    while (heap.length <= idx) heap.push(null);
    heap[idx] = v;
  };
  const queue: [number, number][] = [[root, 0]];
  while (queue.length) {
    const [val, idx] = queue.shift()!;
    setHeap(idx, val);
    if (left.has(val)) queue.push([left.get(val)!, 2 * idx + 1]);
    if (right.has(val)) queue.push([right.get(val)!, 2 * idx + 2]);
  }

  push(11, `Root is ${root} (never a child). Tree assembled.`, { root, heap: [...heap], answer: [...heap] });
  return steps;
}
