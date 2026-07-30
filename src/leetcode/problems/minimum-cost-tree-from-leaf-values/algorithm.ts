import type { Step } from "@/core/types";

export interface LeafValuesData {
  arr: number[];
  scan: number | null;
  /** stack values (Infinity sentinel at the bottom) */
  stack: number[];
  cost: number;
  /** the product just added to the cost */
  product: { a: number; b: number } | null;
  answer: number | null;
}

export type LeafValuesStep = Step<LeafValuesData>;

/**
 * Minimum Cost Tree From Leaf Values: each internal node costs (max left leaf)·(max right leaf). Greedily,
 * a smaller leaf should be merged with the smaller of its neighbours as early as possible — a decreasing
 * monotonic stack pops each value and pays value × min(neighbour, current). `line` indexes CODE.
 */
export function leafValuesSteps(arr: number[]): LeafValuesStep[] {
  const steps: LeafValuesStep[] = [];
  let res = 0;
  const stack: number[] = [Infinity];

  const snap = (o: Partial<LeafValuesData>): LeafValuesData => ({
    arr,
    scan: null,
    stack: [...stack],
    cost: res,
    product: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<LeafValuesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Merge leaves greedily with a decreasing monotonic stack.`);

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    while (stack[stack.length - 1] <= x) {
      const mid = stack.pop()!;
      const partner = Math.min(stack[stack.length - 1], x);
      res += mid * partner;
      push(6, `Pop ${mid}; pay ${mid} × min(${stack[stack.length - 1] === Infinity ? "∞" : stack[stack.length - 1]}, ${x}) = ${mid * partner}. Cost ${res}.`, {
        scan: i,
        product: { a: mid, b: partner },
      });
    }
    stack.push(x);
    push(8, `Push ${x}.`, { scan: i });
  }

  while (stack.length > 2) {
    const top = stack.pop()!;
    res += top * stack[stack.length - 1];
    push(11, `Collapse remaining: pay ${top} × ${stack[stack.length - 1]} = ${top * stack[stack.length - 1]}. Cost ${res}.`, {
      product: { a: top, b: stack[stack.length - 1] },
    });
  }

  push(12, `Minimum tree cost = ${res}.`, { answer: res });
  return steps;
}
