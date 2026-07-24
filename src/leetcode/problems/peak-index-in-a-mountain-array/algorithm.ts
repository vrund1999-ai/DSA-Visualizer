import type { Step } from "@/core/types";

export interface PeakIndexData {
  arr: number[];
  lo: number;
  hi: number;
  mid: number | null;
  peak: number | null;
}

export type PeakIndexStep = Step<PeakIndexData>;

/**
 * Binary search on the slope: if arr[mid] < arr[mid+1] we're still climbing, so the
 * peak is strictly to the right; otherwise the peak is at mid or to its left. `line`
 * indexes CODE.
 */
export function peakIndexSteps(arr: number[]): PeakIndexStep[] {
  const steps: PeakIndexStep[] = [];
  let lo = 0;
  let hi = arr.length - 1;

  const snap = (o: Partial<PeakIndexData>): PeakIndexData => ({ arr: [...arr], lo, hi, mid: null, peak: null, ...o });
  const push = (line: number, explanation: string, data: PeakIndexData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Binary search for the single peak of the mountain.", snap({}));

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    push(3, `mid = ${mid} (value ${arr[mid]}), next = ${arr[mid + 1]}.`, snap({ mid }));
    if (arr[mid] < arr[mid + 1]) {
      lo = mid + 1;
      push(5, `Still ascending — peak is to the right, lo = ${lo}.`, snap({ mid }));
    } else {
      hi = mid;
      push(7, `Descending — peak is here or left, hi = ${hi}.`, snap({ mid }));
    }
  }

  push(10, `Peak found at index ${lo} (value ${arr[lo]}).`, snap({ peak: lo }));
  return steps;
}
