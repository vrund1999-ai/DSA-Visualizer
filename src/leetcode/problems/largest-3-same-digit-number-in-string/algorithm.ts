import type { Step } from "@/core/types";

export interface GoodIntData {
  num: string;
  i: number | null;
  /** whether positions i..i+2 are all equal */
  match: boolean;
  best: string;
  answer: string | null;
}

export type GoodIntStep = Step<GoodIntData>;

/**
 * A "good" integer is three identical consecutive digits. We slide a length-3 window; each all-equal
 * window is a candidate, and since equal-length numeric strings compare lexicographically, we simply
 * keep the largest such triple. `line` indexes CODE.
 */
export function goodIntSteps(num: string): GoodIntStep[] {
  const steps: GoodIntStep[] = [];
  let best = "";

  const snap = (o: Partial<GoodIntData>): GoodIntData => ({ num, i: null, match: false, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GoodIntData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Slide a window of 3; keep the largest triple of identical digits.");

  for (let i = 0; i + 2 < num.length; i++) {
    const match = num[i] === num[i + 1] && num[i + 1] === num[i + 2];
    if (match) {
      const triple = num.slice(i, i + 3);
      if (triple > best) {
        best = triple;
        push(6, `"${triple}" at ${i} is three identical digits and larger → new best.`, { i, match: true });
      } else {
        push(6, `"${triple}" at ${i} is good but not larger than "${best}".`, { i, match: true });
      }
    } else {
      push(3, `"${num.slice(i, i + 3)}" at ${i} not all equal.`, { i });
    }
  }

  push(9, best ? `Largest good integer: "${best}".` : "No three-in-a-row → empty string.", { answer: best });
  return steps;
}
