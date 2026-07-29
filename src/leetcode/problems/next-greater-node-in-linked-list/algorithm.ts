import type { Step } from "@/core/types";

export interface NextGreaterData {
  vals: number[];
  idx: number | null;
  /** indices on the monotonic stack (values decreasing) */
  stack: number[];
  ans: number[];
  /** indices just resolved by the current value */
  resolved: number[];
  answer: number[] | null;
}

export type NextGreaterStep = Step<NextGreaterData>;

/**
 * A stack holds indices still waiting for a greater value, kept in decreasing value order. When a
 * larger value arrives it resolves every smaller index on top of the stack (their "next greater" is
 * this value); the current index then waits on the stack. `line` indexes CODE.
 */
export function nextGreaterSteps(vals: number[]): NextGreaterStep[] {
  const steps: NextGreaterStep[] = [];
  const ans = new Array(vals.length).fill(0);
  const stack: number[] = [];

  const snap = (o: Partial<NextGreaterData>): NextGreaterData => ({ vals, idx: null, stack: [...stack], ans: [...ans], resolved: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NextGreaterData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "A decreasing-value stack of indices waits for the next greater node.");

  for (let i = 0; i < vals.length; i++) {
    const resolved: number[] = [];
    while (stack.length && vals[stack[stack.length - 1]] < vals[i]) {
      const j = stack.pop()!;
      ans[j] = vals[i];
      resolved.push(j);
    }
    if (resolved.length) push(6, `${vals[i]} is the next-greater for node(s) ${resolved.map((j) => vals[j]).join(", ")}.`, { idx: i, resolved });
    stack.push(i);
    push(8, `Push node ${vals[i]} (index ${i}) onto the stack.`, { idx: i });
  }

  push(10, `Next-greater values: [${ans.join(", ")}].`, { answer: [...ans] });
  return steps;
}
