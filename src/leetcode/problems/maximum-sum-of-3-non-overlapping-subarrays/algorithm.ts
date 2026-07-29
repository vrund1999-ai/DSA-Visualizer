import type { Step } from "@/core/types";

export interface ThreeSubData {
  nums: number[];
  k: number;
  /** window sums per start index */
  W: number[];
  l: number | null;
  m: number | null;
  r: number | null;
  best: number;
  ans: number[];
  answer: number[] | null;
}

export type ThreeSubStep = Step<ThreeSubData>;

/**
 * Fix the middle window's start; then the best left window lies entirely before it and the best right
 * window entirely after it, independently. Prefix "best-so-far" arrays give those in O(1), so one
 * sweep over the middle position finds the optimum (lexicographically smallest on ties). `line` indexes CODE.
 */
export function threeSubSteps(nums: number[], k: number): ThreeSubStep[] {
  const steps: ThreeSubStep[] = [];
  const n = nums.length;

  const W: number[] = [];
  let run = 0;
  for (let i = 0; i < n; i++) {
    run += nums[i];
    if (i >= k) run -= nums[i - k];
    if (i >= k - 1) W.push(run);
  }

  const left = new Array(W.length).fill(0);
  for (let i = 1; i < W.length; i++) left[i] = W[i] > W[left[i - 1]] ? i : left[i - 1];
  const right = new Array(W.length).fill(W.length - 1);
  for (let i = W.length - 2; i >= 0; i--) right[i] = W[i] >= W[right[i + 1]] ? i : right[i + 1];

  let best = -1;
  let ans: number[] = [];

  const snap = (o: Partial<ThreeSubData>): ThreeSubData => ({ nums, k, W, l: null, m: null, r: null, best, ans: [...ans], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ThreeSubData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Window sums W[i] = sum of k=${k} elements starting at i: [${W.join(", ")}].`);

  for (let m = k; m + k <= W.length - 1 + k; m++) {
    if (m - k < 0 || m + k >= W.length) continue;
    const l = left[m - k];
    const r = right[m + k];
    const total = W[l] + W[m] + W[r];
    if (total > best) {
      best = total;
      ans = [l, m, r];
      push(10, `Middle start ${m}: best sides ${l} & ${r}, total ${total} → new best.`, { l, m, r, best });
    } else {
      push(7, `Middle start ${m}: total ${total} ≤ best ${best}, keep current.`, { l, m, r, best });
    }
  }

  push(13, `Best triple of starts: [${ans.join(", ")}] (sum ${best}).`, { answer: [...ans] });
  return steps;
}
