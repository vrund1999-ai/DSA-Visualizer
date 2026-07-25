import type { Step } from "@/core/types";

export interface EqualOccData {
  s: string;
  idx: number | null;
  /** [letter, count] pairs in insertion order */
  freq: [string, number][];
  /** letter whose count is being compared to the reference */
  checking: string | null;
  target: number | null;
  answer: boolean | null;
}

export type EqualOccStep = Step<EqualOccData>;

/**
 * Tally each character, then all frequencies must equal the first one. A single mismatch is enough
 * to fail, otherwise every distinct character appears the same number of times. `line` indexes CODE.
 */
export function equalOccSteps(s: string): EqualOccStep[] {
  const steps: EqualOccStep[] = [];
  const freq = new Map<string, number>();

  const snap = (o: Partial<EqualOccData>): EqualOccData => ({ s, idx: null, freq: [...freq.entries()], checking: null, target: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EqualOccData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Count each character, then verify all counts match.");

  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) ?? 0) + 1);
    push(3, `Count '${s[i]}' → ${freq.get(s[i])}.`, { idx: i });
  }

  const counts = [...freq.values()];
  const target = counts[0];
  push(4, `Reference count = ${target} (first character's).`, { target });

  for (const [letter, c] of freq.entries()) {
    if (c !== target) {
      push(5, `'${letter}' occurs ${c} ≠ ${target} → not all equal, false.`, { checking: letter, target, answer: false });
      return steps;
    }
    push(5, `'${letter}' occurs ${c} = ${target} ✓.`, { checking: letter, target });
  }

  push(5, "Every character's count matches → true.", { target, answer: true });
  return steps;
}
