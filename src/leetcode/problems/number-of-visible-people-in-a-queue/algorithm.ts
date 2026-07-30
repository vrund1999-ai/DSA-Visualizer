import type { Step } from "@/core/types";

export interface VisibleData {
  heights: number[];
  res: number[];
  i: number | null;
  /** indices currently on the stack (decreasing heights) */
  stack: number[];
  /** index just popped (a visible shorter person) */
  popped: number | null;
  answer: number[] | null;
}

export type VisibleStep = Step<VisibleData>;

/**
 * A person sees everyone to the right until the first taller person blocks the view. Scanning right to
 * left with a stack of decreasing heights, everyone shorter than the current person is visible (and
 * popped), plus the first remaining taller blocker. `line` indexes CODE.
 */
export function visibleSteps(heights: number[]): VisibleStep[] {
  const steps: VisibleStep[] = [];
  const n = heights.length;
  const res = new Array(n).fill(0);
  const stack: number[] = [];

  const snap = (o: Partial<VisibleData>): VisibleData => ({ heights, res: [...res], i: null, stack: [...stack], popped: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<VisibleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Scan right to left with a stack of decreasing heights.");

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] < heights[i]) {
      const p = stack.pop()!;
      res[i]++;
      push(7, `Person ${i} (h=${heights[i]}) sees shorter person ${p} (h=${heights[p]}).`, { i, popped: p });
    }
    if (stack.length) {
      res[i]++;
      push(9, `Person ${i} also sees the taller blocker ${stack[stack.length - 1]} (h=${heights[stack[stack.length - 1]]}).`, { i });
    } else {
      push(9, `Person ${i} sees ${res[i]} people; nothing taller ahead.`, { i });
    }
    stack.push(i);
  }

  push(12, `Visible counts: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
