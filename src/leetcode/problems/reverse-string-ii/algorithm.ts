import type { Step } from "@/core/types";

export interface ReverseStrData {
  chars: string[];
  k: number;
  /** [start, end] of the block being reversed */
  block: [number, number] | null;
  /** the two indices swapped this step */
  swap: [number, number] | null;
  answer: string | null;
}

export type ReverseStrStep = Step<ReverseStrData>;

/**
 * Walk the string in strides of 2k. In each stride, reverse the first k characters
 * (or all that remain if fewer) and leave the rest untouched. `line` indexes CODE.
 */
export function reverseStrSteps(s: string, k: number): ReverseStrStep[] {
  const steps: ReverseStrStep[] = [];
  const a = s.split("");

  const snap = (o: Partial<ReverseStrData>): ReverseStrData => ({ chars: [...a], k, block: null, swap: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: ReverseStrData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Reverse the first ${k} chars of every ${2 * k}-char block.`, snap({}));

  for (let i = 0; i < a.length; i += 2 * k) {
    let l = i;
    let r = Math.min(i + k - 1, a.length - 1);
    push(3, `Block at ${i}: reverse indices ${l}..${r}.`, snap({ block: [l, r] }));
    while (l < r) {
      [a[l], a[r]] = [a[r], a[l]];
      push(5, `Swap '${a[r]}' ↔ '${a[l]}'.`, snap({ block: [i, Math.min(i + k - 1, a.length - 1)], swap: [l, r] }));
      l++;
      r--;
    }
  }

  push(9, `Result: "${a.join("")}".`, snap({ answer: a.join("") }));
  return steps;
}
