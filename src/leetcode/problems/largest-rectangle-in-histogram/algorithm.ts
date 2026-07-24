import type { Step } from "@/core/types";

export interface HistogramData {
  heights: number[];
  i: number | null;
  stack: number[];
  best: number;
  /** The rectangle just measured: [left, right, height]. */
  rect: [number, number, number] | null;
}

export type HistogramStep = Step<HistogramData>;

/**
 * A stack of indices with increasing heights. When a shorter bar appears, each
 * taller bar on the stack can no longer extend right, so we pop it and measure
 * the rectangle it bounds: its height times the gap between the new bar and the
 * bar below it on the stack. `line` indexes CODE.
 */
export function histogramSteps(heights: number[]): HistogramStep[] {
  const steps: HistogramStep[] = [];
  const stack: number[] = [];
  let best = 0;
  const n = heights.length;

  const snap = (i: number | null, rect: [number, number, number] | null): HistogramData => ({
    heights: [...heights],
    i,
    stack: [...stack],
    best,
    rect,
  });
  const push = (line: number, explanation: string, data: HistogramData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { best } });
  };

  push(1, "Use a stack of increasing-height bars; measure each when a shorter bar arrives.", snap(null, null));

  for (let i = 0; i <= n; i++) {
    const cur = i === n ? 0 : heights[i];
    while (stack.length && heights[stack[stack.length - 1]] > cur) {
      const height = heights[stack.pop()!];
      const left = stack.length ? stack[stack.length - 1] : -1;
      const width = i - left - 1;
      const area = height * width;
      if (area > best) best = area;
      push(8, `Bar height ${height} spans width ${width} → area ${area}${area === best ? " (best)" : ""}.`, snap(i < n ? i : null, [left + 1, i - 1, height]));
    }
    if (i < n) {
      stack.push(i);
      push(10, `Push bar ${i} (height ${heights[i]}).`, snap(i, null));
    }
  }

  push(12, `Largest rectangle area is ${best}.`, snap(null, null));
  return steps;
}
