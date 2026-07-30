import type { Step } from "@/core/types";

export interface StringMatchData {
  words: string[];
  /** candidate word index */
  i: number | null;
  /** container word index being tested */
  j: number | null;
  found: boolean;
  res: string[];
  answer: string[] | null;
}

export type StringMatchStep = Step<StringMatchData>;

/**
 * A word qualifies if it appears inside some other word. Checking each candidate against every other word
 * and stopping at the first containment collects all substrings. `line` indexes CODE.
 */
export function stringMatchSteps(words: string[]): StringMatchStep[] {
  const steps: StringMatchStep[] = [];
  const res: string[] = [];

  const snap = (o: Partial<StringMatchData>): StringMatchData => ({ words, i: null, j: null, found: false, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<StringMatchData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "A word counts if it is a substring of another word in the list.");

  for (let i = 0; i < words.length; i++) {
    let found = false;
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;
      if (words[j].includes(words[i])) {
        res.push(words[i]);
        found = true;
        push(6, `"${words[i]}" is inside "${words[j]}" → keep it.`, { i, j, found: true });
        break;
      } else {
        push(5, `"${words[i]}" not in "${words[j]}".`, { i, j });
      }
    }
    if (!found) push(9, `"${words[i]}" is not a substring of any other word.`, { i });
  }

  push(11, `Substrings found: ${res.length ? res.join(", ") : "none"}.`, { answer: [...res] });
  return steps;
}
