import type { Step } from "@/core/types";

export interface NumLisData {
  nums: number[];
  len: number[];
  cnt: number[];
  i: number | null;
  j: number | null;
  maxLen: number | null;
  answer: number | null;
}

export type NumLisStep = Step<NumLisData>;

/**
 * Two parallel DP arrays: len[i] is the longest increasing subsequence ending at i, and cnt[i] how
 * many achieve it. Extending from a smaller earlier element either beats the current length (reset the
 * count) or ties it (add the ways). The answer sums cnt over all i at the global maximum length. `line` indexes CODE.
 */
export function numLisSteps(nums: number[]): NumLisStep[] {
  const steps: NumLisStep[] = [];
  const n = nums.length;
  const len = new Array(n).fill(1);
  const cnt = new Array(n).fill(1);

  const snap = (o: Partial<NumLisData>): NumLisData => ({ nums, len: [...len], cnt: [...cnt], i: null, j: null, maxLen: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NumLisData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "len[i] = longest chain ending at i; cnt[i] = how many such chains.");

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (len[j] + 1 > len[i]) {
          len[i] = len[j] + 1;
          cnt[i] = cnt[j];
          push(9, `nums[${j}]=${nums[j]} < nums[${i}]=${nums[i]}: longer chain len ${len[i]}, count reset to ${cnt[i]}.`, { i, j });
        } else if (len[j] + 1 === len[i]) {
          cnt[i] += cnt[j];
          push(11, `Another length-${len[i]} chain via index ${j}: count[${i}] = ${cnt[i]}.`, { i, j });
        }
      }
    }
  }

  const maxLen = Math.max(...len);
  let answer = 0;
  for (let k = 0; k < n; k++) if (len[k] === maxLen) answer += cnt[k];
  push(14, `Longest length ${maxLen}; total chains of that length: ${answer}.`, { maxLen, answer });
  return steps;
}
