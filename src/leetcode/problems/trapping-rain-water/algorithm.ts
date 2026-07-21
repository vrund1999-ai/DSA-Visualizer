import type { Highlight, Step } from "@/core/types";

export interface TrapData {
  heights: number[];
  l: number | null;
  r: number | null;
  leftMax: number;
  rightMax: number;
  water: number;
  /** Units of water resting above each column so far. */
  trapped: number[];
}

export type TrapStep = Step<TrapData>;

/**
 * Two pointers moving inward. The water over a column is bounded by the smaller
 * of the tallest wall to its left and right; since we always advance the side
 * with the smaller running max, that side's max is the true bound. `line`
 * indexes CODE.
 */
export function trapSteps(heights: number[]): TrapStep[] {
  const steps: TrapStep[] = [];
  const trapped = new Array(heights.length).fill(0);
  let l = 0;
  let r = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  const snap = (o: Partial<TrapData>): TrapData => ({
    heights: [...heights],
    l,
    r,
    leftMax,
    rightMax,
    water,
    trapped: [...trapped],
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: TrapData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { water } });
  };

  const marks = (): Highlight[] => [
    { ref: l, role: "current" },
    { ref: r, role: "active" },
  ];

  if (heights.length === 0) {
    push(14, "Empty terrain — no water.", snap({ l: null, r: null }), []);
    return steps;
  }

  push(2, "Two pointers, plus the tallest wall seen from each side.", snap({}), marks());

  while (l < r) {
    if (heights[l] < heights[r]) {
      leftMax = Math.max(leftMax, heights[l]);
      const add = leftMax - heights[l];
      water += add;
      trapped[l] = add;
      push(
        6,
        add > 0
          ? `Left wall ${heights[l]} < right ${heights[r]}. Left bound is ${leftMax}, so column ${l} traps ${add}.`
          : `Left wall ${heights[l]} is a new left-max — it holds no water itself.`,
        snap({}),
        marks(),
      );
      l++;
    } else {
      rightMax = Math.max(rightMax, heights[r]);
      const add = rightMax - heights[r];
      water += add;
      trapped[r] = add;
      push(
        10,
        add > 0
          ? `Right wall ${heights[r]} ≤ left ${heights[l]}. Right bound is ${rightMax}, so column ${r} traps ${add}.`
          : `Right wall ${heights[r]} is a new right-max — it holds no water itself.`,
        snap({}),
        marks(),
      );
      r--;
    }
  }

  push(14, `Pointers met — total trapped water is ${water}.`, snap({ l: null, r: null }), []);
  return steps;
}
