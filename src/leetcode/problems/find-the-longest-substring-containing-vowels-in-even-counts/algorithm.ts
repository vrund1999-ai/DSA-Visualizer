import type { Step } from "@/core/types";

export interface VowelMaskData {
  s: string;
  i: number | null;
  /** 5-bit vowel parity mask */
  mask: number;
  best: number;
  bestRange: [number, number] | null;
  answer: number | null;
}

export type VowelMaskStep = Step<VowelMaskData>;

const V = "aeiou";

/**
 * A substring has all vowels in even counts exactly when the vowel-parity bitmask is the same at both
 * ends. Tracking each mask's first occurrence, whenever a mask repeats the span between is a valid
 * substring; the longest such span is the answer. `line` indexes CODE.
 */
export function vowelMaskSteps(s: string): VowelMaskStep[] {
  const steps: VowelMaskStep[] = [];
  const first = new Map<number, number>([[0, -1]]);
  let mask = 0;
  let best = 0;
  let bestRange: [number, number] | null = null;

  const snap = (o: Partial<VowelMaskData>): VowelMaskData => ({ s, i: null, mask, best, bestRange, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<VowelMaskData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Track a 5-bit vowel-parity mask; equal masks bound an all-even-vowel substring.");

  for (let i = 0; i < s.length; i++) {
    const b = V.indexOf(s[i]);
    if (b >= 0) mask ^= 1 << b;
    if (first.has(mask)) {
      const len = i - first.get(mask)!;
      if (len > best) {
        best = len;
        bestRange = [first.get(mask)! + 1, i];
      }
      push(8, `'${s[i]}' → mask ${mask.toString(2).padStart(5, "0")} seen at ${first.get(mask)}: length ${len} (best ${best}).`, { i });
    } else {
      first.set(mask, i);
      push(9, `'${s[i]}' → new mask ${mask.toString(2).padStart(5, "0")} first seen at ${i}.`, { i });
    }
  }

  push(11, `Longest all-even-vowel substring: ${best}.`, { answer: best });
  return steps;
}
