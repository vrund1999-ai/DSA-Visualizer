import type { Step } from "@/core/types";

export interface MinStepsData {
  s: string;
  t: string;
  /** count[letter] = (#in s) − (#in t); only letters that ever appear are shown */
  letters: string[];
  count: number[];
  /** index into letters currently highlighted */
  active: number | null;
  phase: "s" | "t" | "sum";
  steps: number;
  answer: number | null;
}

export type MinStepsStep = Step<MinStepsData>;

/**
 * t already has the right length, so making it an anagram of s means replacing
 * letters. Count each letter as +1 for s and −1 for t; the total positive surplus
 * (letters s has that t lacks) is the number of replacements. `line` indexes CODE.
 */
export function minStepsSteps(s: string, t: string): MinStepsStep[] {
  const steps: MinStepsStep[] = [];
  const present = Array.from(new Set([...s, ...t])).sort();
  const idx = new Map(present.map((c, i) => [c, i]));
  const count = present.map(() => 0);

  const snap = (o: Partial<MinStepsData>): MinStepsData => ({ s, t, letters: present, count: [...count], active: null, phase: "s", steps: 0, answer: null, ...o });
  const push = (line: number, explanation: string, data: MinStepsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Tally each letter: +1 for s, −1 for t.", snap({}));

  for (const ch of s) {
    const i = idx.get(ch)!;
    count[i]++;
    push(3, `'${ch}' in s → count now ${count[i]}.`, snap({ active: i, phase: "s" }));
  }
  for (const ch of t) {
    const i = idx.get(ch)!;
    count[i]--;
    push(5, `'${ch}' in t → count now ${count[i]}.`, snap({ active: i, phase: "t" }));
  }

  let stepCount = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      stepCount += count[i];
      push(8, `'${present[i]}': surplus ${count[i]} → ${stepCount} replacement(s) so far.`, snap({ active: i, phase: "sum", steps: stepCount }));
    }
  }

  push(9, `Minimum steps: ${stepCount}.`, snap({ phase: "sum", steps: stepCount, answer: stepCount }));
  return steps;
}
