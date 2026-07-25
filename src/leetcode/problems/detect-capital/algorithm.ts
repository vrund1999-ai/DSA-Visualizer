import type { Step } from "@/core/types";

export interface DetectCapitalData {
  word: string;
  /** uppercase flag per character */
  isUpper: boolean[];
  allCaps: boolean | null;
  allLower: boolean | null;
  titleCase: boolean | null;
  answer: boolean | null;
}

export type DetectCapitalStep = Step<DetectCapitalData>;

/**
 * Capitalization is valid in exactly three shapes: every letter uppercase, every letter lowercase, or
 * only the first letter uppercase. We test each pattern against the whole word and accept if any
 * holds. `line` indexes CODE.
 */
export function detectCapitalSteps(word: string): DetectCapitalStep[] {
  const steps: DetectCapitalStep[] = [];
  const isUpper = word.split("").map((c) => c === c.toUpperCase() && c !== c.toLowerCase());

  const snap = (o: Partial<DetectCapitalData>): DetectCapitalData => ({ word, isUpper, allCaps: null, allLower: null, titleCase: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DetectCapitalData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, "Valid if all-caps, all-lowercase, or only the first letter capitalized.");

  const allCaps = word === word.toUpperCase();
  push(1, `All uppercase? "${word}" ${allCaps ? "=" : "≠"} "${word.toUpperCase()}" → ${allCaps}.`, { allCaps });

  const allLower = word === word.toLowerCase();
  push(2, `All lowercase? → ${allLower}.`, { allCaps, allLower });

  const titleCase = word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase();
  push(5, `Title case (first cap, rest lower)? → ${titleCase}.`, { allCaps, allLower, titleCase });

  const answer = allCaps || allLower || titleCase;
  push(6, `Valid capitalization: ${answer}.`, { allCaps, allLower, titleCase, answer });
  return steps;
}
