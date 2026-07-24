import type { Highlight, Step } from "@/core/types";

export interface NextGreaterInput {
  nums1: number[];
  nums2: number[];
}

export interface MapEntry {
  value: number;
  next: number;
}

export interface NextGreaterData {
  nums1: number[];
  nums2: number[];
  i: number | null;
  stack: number[];
  map: MapEntry[];
  result: number[] | null;
}

export type NextGreaterStep = Step<NextGreaterData>;

/**
 * A monotonic decreasing stack over nums2: when a value exceeds the stack top, it
 * is that top's "next greater", so pop and record. A map then answers each nums1
 * query in O(1). `line` indexes CODE.
 */
export function nextGreaterSteps(input: NextGreaterInput): NextGreaterStep[] {
  const { nums1, nums2 } = input;
  const steps: NextGreaterStep[] = [];
  const stack: number[] = [];
  const map = new Map<number, number>();

  const entries = (): MapEntry[] => [...map.entries()].map(([value, next]) => ({ value, next }));
  const snap = (o: Partial<NextGreaterData>): NextGreaterData => ({ nums1: [...nums1], nums2: [...nums2], i: null, stack: [...stack], map: entries(), result: null, ...o });
  const push = (line: number, explanation: string, data: NextGreaterData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Build a 'next greater' map for nums2 with a decreasing stack.", snap({}), []);

  for (let i = 0; i < nums2.length; i++) {
    const x = nums2[i];
    while (stack.length && x > stack[stack.length - 1]) {
      const popped = stack.pop()!;
      map.set(popped, x);
      push(4, `${x} > ${popped} — ${x} is the next greater of ${popped}.`, snap({ i }), [{ ref: `n2-${i}`, role: "sorted" }]);
    }
    stack.push(x);
    push(5, `Push ${x} onto the stack.`, snap({ i }), [{ ref: `n2-${i}`, role: "active" }]);
  }

  const result = nums1.map((x) => map.get(x) ?? -1);
  push(7, `Answer for nums1: [${result.join(", ")}].`, snap({ i: null, result }), []);
  return steps;
}
