import type { Highlight, Step } from "@/core/types";

export interface ContainerData {
  heights: number[];
  l: number | null;
  r: number | null;
  /** Area of the container formed by the current l/r. */
  area: number | null;
  best: number;
  bestPair: { l: number; r: number } | null;
}

export type ContainerStep = Step<ContainerData>;

/**
 * Greedy two pointers: the area is bounded by the shorter wall, so moving the
 * shorter wall inward is the only move that can improve things. `line` indexes
 * CODE.
 */
export function containerSteps(heights: number[]): ContainerStep[] {
  const steps: ContainerStep[] = [];
  let l = 0;
  let r = heights.length - 1;
  let best = 0;
  let bestL = -1;
  let bestR = -1;

  const snap = (o: Partial<ContainerData>): ContainerData => ({
    heights: [...heights],
    l,
    r,
    area: null,
    best,
    bestPair: bestR >= 0 ? { l: bestL, r: bestR } : null,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: ContainerData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(1, "Put one pointer at each end; the widest container starts here.", snap({}), [
    { ref: l, role: "current" },
    { ref: r, role: "current" },
  ]);

  while (l < r) {
    const area = Math.min(heights[l], heights[r]) * (r - l);
    push(
      4,
      `Width ${r - l} × shorter wall ${Math.min(heights[l], heights[r])} = area ${area}.`,
      snap({ area }),
      [
        { ref: l, role: "current" },
        { ref: r, role: "current" },
      ],
    );

    if (area > best) {
      best = area;
      bestL = l;
      bestR = r;
      push(5, `New best area: ${best}.`, snap({ area }), [
        { ref: l, role: "target" },
        { ref: r, role: "target" },
      ]);
    }

    if (heights[l] < heights[r]) {
      push(6, `Left wall ${heights[l]} is shorter — move left pointer inward.`, snap({ area }), [
        { ref: l, role: "swapped" },
        { ref: r, role: "current" },
      ]);
      l++;
    } else {
      push(7, `Right wall ${heights[r]} is shorter (or equal) — move right pointer inward.`, snap({ area }), [
        { ref: l, role: "current" },
        { ref: r, role: "swapped" },
      ]);
      r--;
    }
  }

  push(
    9,
    `Pointers met — the largest container holds ${best}.`,
    snap({ l: null, r: null, area: null }),
    bestR >= 0
      ? [
          { ref: bestL, role: "target" },
          { ref: bestR, role: "target" },
        ]
      : [],
  );

  return steps;
}
