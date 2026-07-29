import type { Step } from "@/core/types";

export interface NextLetterData {
  letters: string[];
  target: string;
  lo: number;
  hi: number;
  mid: number | null;
  answer: string | null;
}

export type NextLetterStep = Step<NextLetterData>;

/**
 * The letters are sorted, so binary search finds the first letter strictly greater than the target:
 * whenever the middle letter is ≤ target we discard the left half. If no letter qualifies the search
 * runs off the end and wraps to the first letter. `line` indexes CODE.
 */
export function nextLetterSteps(letters: string[], target: string): NextLetterStep[] {
  const steps: NextLetterStep[] = [];
  let lo = 0;
  let hi = letters.length;

  const snap = (o: Partial<NextLetterData>): NextLetterData => ({ letters, target, lo, hi, mid: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NextLetterData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Binary-search the smallest letter strictly greater than '${target}'.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (letters[mid] <= target) {
      push(5, `'${letters[mid]}' ≤ '${target}' → search right (lo = ${mid + 1}).`, { mid });
      lo = mid + 1;
    } else {
      push(7, `'${letters[mid]}' > '${target}' → candidate, search left (hi = ${mid}).`, { mid });
      hi = mid;
    }
  }

  const answer = letters[lo % letters.length];
  push(9, `Answer: '${answer}' (index ${lo % letters.length}${lo >= letters.length ? ", wrapped" : ""}).`, { answer });
  return steps;
}
