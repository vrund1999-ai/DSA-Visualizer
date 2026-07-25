import type { Step } from "@/core/types";

export interface PangramData {
  sentence: string;
  pos: number | null;
  /** letters seen so far (lowercase) */
  seen: string[];
  answer: boolean | null;
}

export type PangramStep = Step<PangramData>;

/**
 * Add each letter to a set as you scan; the sentence is a pangram exactly when the set
 * reaches all 26 letters. `line` indexes CODE.
 */
export function pangramSteps(sentence: string): PangramStep[] {
  const steps: PangramStep[] = [];
  const seen = new Set<string>();

  const snap = (pos: number, o: Partial<PangramData>): PangramData => ({ sentence, pos, seen: [...seen], answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<PangramData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, "Collect distinct letters; a pangram has all 26.", -1);

  for (let i = 0; i < sentence.length; i++) {
    const c = sentence[i];
    if (!seen.has(c)) {
      seen.add(c);
      push(1, `New letter '${c}' — ${seen.size}/26 seen.`, i);
    }
  }

  const answer = seen.size === 26;
  push(2, `${seen.size} distinct letters → ${answer ? "pangram" : "not a pangram"}.`, -1, { answer });
  return steps;
}
