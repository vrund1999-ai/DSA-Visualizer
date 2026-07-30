import type { Step } from "@/core/types";

export interface ConsecDiffData {
  n: number;
  k: number;
  /** numbers of the current length */
  level: number[];
  length: number;
  /** number being extended */
  cur: number | null;
  answer: number[] | null;
}

export type ConsecDiffStep = Step<ConsecDiffData>;

/**
 * Build the numbers a digit at a time: every valid number of the current length grows by appending a
 * digit that differs from its last digit by exactly k (in either direction, staying within 0–9). After
 * n−1 extensions the level holds all valid n-digit numbers. `line` indexes CODE.
 */
export function consecDiffSteps(n: number, k: number): ConsecDiffStep[] {
  const steps: ConsecDiffStep[] = [];
  let level = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let length = 1;

  const snap = (o: Partial<ConsecDiffData>): ConsecDiffData => ({ n, k, level: [...level], length, cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ConsecDiffData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (n === 1) {
    push(1, "Length 1: every single digit 0–9 qualifies.", { answer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] });
    return steps;
  }

  push(1, `Start with digits 1–9; extend so adjacent digits differ by ${k}.`);

  for (let len = 1; len < n; len++) {
    const next: number[] = [];
    for (const num of level) {
      const d = num % 10;
      const options: number[] = [];
      for (const nd of new Set([d + k, d - k])) {
        if (nd >= 0 && nd <= 9) {
          next.push(num * 10 + nd);
          options.push(nd);
        }
      }
      push(8, `Extend ${num} (last digit ${d}): append ${options.length ? options.join(", ") : "nothing"}.`, { cur: num });
    }
    level = next;
    length = len + 1;
    push(11, `Now have ${level.length} number(s) of length ${length}.`);
  }

  push(13, `Result: [${level.join(", ")}].`, { answer: [...level] });
  return steps;
}
