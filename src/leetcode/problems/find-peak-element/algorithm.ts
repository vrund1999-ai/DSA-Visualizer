import type { Highlight, Step } from "@/core/types";

export interface PeakData {
  nums: number[];
  lo: number;
  hi: number;
  mid: number | null;
  peak: number | null;
}

export type PeakStep = Step<PeakData>;

/**
 * Binary search on the slope: if nums[mid] < nums[mid+1] a peak must lie to the
 * right (values are rising), otherwise one lies at mid or to its left. The range
 * always brackets a peak. `line` indexes CODE.
 */
export function peakSteps(nums: number[]): PeakStep[] {
  const steps: PeakStep[] = [];
  let lo = 0;
  let hi = nums.length - 1;
  let peak: number | null = null;

  const outside = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < nums.length; k++) if (k < lo || k > hi) hl.push({ ref: k, role: "visited" });
    return hl;
  };
  const snap = (o: Partial<PeakData>): PeakData => ({ nums: [...nums], lo, hi, mid: null, peak, ...o });
  const push = (line: number, explanation: string, data: PeakData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Binary search for any peak (a value greater than its neighbours).", snap({}), []);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] < nums[mid + 1]) {
      push(4, `nums[${mid}] = ${nums[mid]} < nums[${mid + 1}] = ${nums[mid + 1]} — climb right.`, snap({ mid }), [
        ...outside(),
        { ref: mid, role: "current" },
        { ref: mid + 1, role: "compared" },
      ]);
      lo = mid + 1;
    } else {
      push(5, `nums[${mid}] = ${nums[mid]} ≥ nums[${mid + 1}] = ${nums[mid + 1]} — a peak is at mid or left.`, snap({ mid }), [
        ...outside(),
        { ref: mid, role: "current" },
        { ref: mid + 1, role: "compared" },
      ]);
      hi = mid;
    }
  }

  peak = lo;
  push(7, `Converged — index ${lo} (value ${nums[lo]}) is a peak.`, snap({ mid: null, peak }), [{ ref: lo, role: "target" }]);
  return steps;
}
