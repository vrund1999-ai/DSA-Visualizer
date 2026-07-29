import type { Step } from "@/core/types";

export interface ShortestRemovalData {
  arr: number[];
  left: number;
  right: number;
  i: number | null;
  j: number | null;
  ans: number | null;
  answer: number | null;
}

export type ShortestRemovalStep = Step<ShortestRemovalData>;

/**
 * Whatever we keep must be a non-decreasing prefix plus a non-decreasing suffix. Fix the two
 * monotonic ends, then slide a pointer through the suffix for each prefix element, finding the
 * smallest gap that still lets prefix[i] ≤ suffix[j]. `line` indexes CODE.
 */
export function shortestRemovalSteps(arr: number[]): ShortestRemovalStep[] {
  const steps: ShortestRemovalStep[] = [];
  const n = arr.length;
  let left = 0;
  let right = n - 1;
  let ans: number | null = null;

  const snap = (o: Partial<ShortestRemovalData>): ShortestRemovalData => ({ arr, left, right, i: null, j: null, ans, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ShortestRemovalData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  while (left + 1 < n && arr[left] <= arr[left + 1]) left++;
  push(3, `Longest sorted prefix ends at index ${left} (value ${arr[left]}).`);

  if (left === n - 1) {
    push(4, "Whole array already sorted → remove nothing.", { answer: 0 });
    return steps;
  }

  right = n - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) right--;
  push(6, `Longest sorted suffix starts at index ${right} (value ${arr[right]}).`);

  ans = Math.min(n - left - 1, right);
  push(7, `Baseline: drop one end entirely → ${ans}.`, { ans });

  let i = 0;
  let j = right;
  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      const bridge = j - i - 1;
      ans = Math.min(ans!, bridge);
      push(11, `prefix ${arr[i]} ≤ suffix ${arr[j]}: bridge removes ${bridge} (best ${ans}).`, { i, j, ans });
      i++;
    } else {
      push(13, `prefix ${arr[i]} > suffix ${arr[j]}: advance suffix pointer.`, { i, j, ans });
      j++;
    }
  }

  push(15, `Shortest removable subarray length: ${ans}.`, { answer: ans! });
  return steps;
}
