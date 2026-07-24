import type { Step } from "@/core/types";

export interface MergeStringsInput {
  w1: string;
  w2: string;
}

export interface MergeStringsData {
  w1: string[];
  w2: string[];
  i: number | null;
  from: 1 | 2 | null;
  result: string[];
  done: boolean;
}

export type MergeStringsStep = Step<MergeStringsData>;

/**
 * Walk one index at a time, appending w1[i] then w2[i] whenever each still has a
 * character. When one string runs out, the other's tail is appended in order.
 * `line` indexes CODE.
 */
export function mergeStringsSteps(input: MergeStringsInput): MergeStringsStep[] {
  const w1 = [...input.w1];
  const w2 = [...input.w2];
  const steps: MergeStringsStep[] = [];
  const result: string[] = [];

  const snap = (o: Partial<MergeStringsData>): MergeStringsData => ({ w1: [...w1], w2: [...w2], i: null, from: null, result: [...result], done: false, ...o });
  const push = (line: number, explanation: string, data: MergeStringsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Alternate characters from the two strings.", snap({}));

  for (let i = 0; i < Math.max(w1.length, w2.length); i++) {
    if (i < w1.length) {
      result.push(w1[i]);
      push(3, `Take word1[${i}] = '${w1[i]}'.`, snap({ i, from: 1 }));
    }
    if (i < w2.length) {
      result.push(w2[i]);
      push(4, `Take word2[${i}] = '${w2[i]}'.`, snap({ i, from: 2 }));
    }
  }

  push(7, `Merged: "${result.join("")}".`, snap({ done: true }));
  return steps;
}
