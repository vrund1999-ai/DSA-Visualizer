import type { Step } from "@/core/types";

export interface MountainData {
  arr: number[];
  target: number;
  phase: "peak" | "ascend" | "descend" | "done";
  lo: number;
  hi: number;
  mid: number | null;
  peak: number | null;
  answer: number | null;
}

export type MountainStep = Step<MountainData>;

/**
 * Three binary searches: find the peak, search the strictly ascending left side, then
 * (if not found) the strictly descending right side. `line` indexes CODE.
 */
export function mountainSteps(target: number, arr: number[]): MountainStep[] {
  const steps: MountainStep[] = [];

  const snap = (o: Partial<MountainData>): MountainData => ({ arr: [...arr], target, phase: "peak", lo: 0, hi: arr.length - 1, mid: null, peak: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: MountainData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  // 1) peak
  let lo = 0;
  let hi = arr.length - 1;
  push(1, `Find the peak of the mountain, then hunt for ${target}.`, snap({ lo, hi, phase: "peak" }));
  while (lo < hi) {
    const m = (lo + hi) >> 1;
    push(5, `Peak search: arr[${m}]=${arr[m]} vs arr[${m + 1}]=${arr[m + 1]}.`, snap({ lo, hi, mid: m, phase: "peak" }));
    if (arr[m] < arr[m + 1]) lo = m + 1;
    else hi = m;
  }
  const peak = lo;
  push(7, `Peak at index ${peak} (value ${arr[peak]}).`, snap({ lo: peak, hi: peak, peak, phase: "peak" }));

  // 2) ascending search helper inline
  const search = (l: number, r: number, asc: boolean, phase: "ascend" | "descend"): number => {
    let lo2 = l;
    let hi2 = r;
    while (lo2 <= hi2) {
      const m = (lo2 + hi2) >> 1;
      push(9, `${phase} search: arr[${m}] = ${arr[m]}.`, snap({ lo: lo2, hi: hi2, mid: m, peak, phase }));
      if (arr[m] === target) return m;
      const goRight = asc ? arr[m] < target : arr[m] > target;
      if (goRight) lo2 = m + 1;
      else hi2 = m - 1;
    }
    return -1;
  };

  const left = search(0, peak, true, "ascend");
  if (left !== -1) {
    push(10, `Found ${target} on the ascending side at index ${left}.`, snap({ peak, answer: left, phase: "done" }));
    return steps;
  }
  const right = search(peak + 1, arr.length - 1, false, "descend");
  push(12, right !== -1 ? `Found ${target} on the descending side at index ${right}.` : `${target} is not in the array → -1.`, snap({ peak, answer: right, phase: "done" }));
  return steps;
}
