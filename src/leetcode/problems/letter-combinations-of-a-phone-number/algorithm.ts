import type { Step } from "@/core/types";

export interface LetterComboData {
  digits: string[];
  activeDigit: number | null;
  current: string;
  results: string[];
}

export type LetterComboStep = Step<LetterComboData>;

const MAP: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

/**
 * Backtracking: each digit maps to a set of letters; build combinations by
 * choosing one letter per digit in turn. A string covering every digit is one
 * combination. `line` indexes CODE.
 */
export function letterComboSteps(digits: string): LetterComboStep[] {
  const steps: LetterComboStep[] = [];
  const results: string[] = [];
  const ds = [...digits];

  const push = (line: number, explanation: string, activeDigit: number | null, current: string) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { digits: [...ds], activeDigit, current, results: [...results] },
      highlights: [],
      metrics: { found: results.length },
    });
  };

  if (digits.length === 0) {
    push(1, "No digits — no combinations.", null, "");
    return steps;
  }

  const bt = (i: number, cur: string) => {
    if (i === ds.length) {
      results.push(cur);
      push(6, `Reached the last digit — record "${cur}".`, null, cur);
      return;
    }
    for (const ch of MAP[ds[i]]) {
      push(8, `Digit ${ds[i]} → try '${ch}' (building "${cur + ch}").`, i, cur + ch);
      bt(i + 1, cur + ch);
    }
  };

  push(0, `Expand each digit to its letters and combine.`, 0, "");
  bt(0, "");
  push(11, `Found ${results.length} combination(s).`, null, "");
  return steps;
}

export { MAP };
