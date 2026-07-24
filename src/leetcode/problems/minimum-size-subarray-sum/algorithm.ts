import type { Highlight, Step } from "@/core/types";

export interface MinSubarrayInput {
  target: number;
  nums: number[];
}

export interface MinSubarrayData {
  nums: number[];
  target: number;
  left: number;
  right: number | null;
  sum: number;
  best: number;
}

export type MinSubarrayStep = Step<MinSubarrayData>;

/**
 * Grow the window on the right, adding to the sum; whenever the sum reaches the
 * target, record the length and shrink from the left to look for a shorter valid
 * window. `line` indexes CODE.
 */
export function minSubarraySteps(input: MinSubarrayInput): MinSubarrayStep[] {
  const { target, nums } = input;
  const steps: MinSubarrayStep[] = [];
  let left = 0;
  let sum = 0;
  let best = Infinity;

  const win = (l: number, r: number, extra: Highlight[] = []): Highlight[] => {
    const hl: Highlight[] = [];
    for (let j = l; j <= r; j++) hl.push({ ref: j, role: "active" });
    return [...hl, ...extra];
  };
  const snap = (o: Partial<MinSubarrayData>): MinSubarrayData => ({ nums: [...nums], target, left, right: null, sum, best: best === Infinity ? 0 : best, ...o });
  const push = (line: number, explanation: string, data: MinSubarrayData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best: best === Infinity ? 0 : best } });
  };

  push(1, `Grow a window until its sum ≥ ${target}, then shrink for the shortest.`, snap({}), []);

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    push(3, `Add ${nums[right]}: window sum ${sum}.`, snap({ right }), win(left, right, [{ ref: right, role: "current" }]));
    while (sum >= target) {
      if (right - left + 1 < best) best = right - left + 1;
      push(5, `Sum ${sum} ≥ ${target} — window length ${right - left + 1} (best ${best}).`, snap({ right }), win(left, right, [{ ref: left, role: "target" }]));
      sum -= nums[left];
      left++;
      if (left <= right) push(6, `Shrink: drop the left; sum ${sum}.`, snap({ right }), win(left, right, [{ ref: left - 1, role: "swapped" }]));
    }
  }

  push(9, best === Infinity ? "No window reaches the target — return 0." : `Shortest window length: ${best}.`, snap({ right: null }), []);
  return steps;
}
