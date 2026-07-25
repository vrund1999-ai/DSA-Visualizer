import type { Step } from "@/core/types";

export interface ScoreData {
  s: string;
  /** the pair (i-1, i) being scored */
  i: number | null;
  diff: number | null;
  score: number;
  answer: number | null;
}

export type ScoreStep = Step<ScoreData>;

/**
 * The score sums the absolute ASCII gap between every pair of adjacent characters, so a single
 * left-to-right pass accumulates |code[i] − code[i−1]| at each step. `line` indexes CODE.
 */
export function scoreSteps(s: string): ScoreStep[] {
  const steps: ScoreStep[] = [];
  let score = 0;

  const snap = (o: Partial<ScoreData>): ScoreData => ({ s, i: null, diff: null, score, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ScoreData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Sum the absolute ASCII difference between each pair of adjacent characters.");

  for (let i = 1; i < s.length; i++) {
    const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    score += diff;
    push(4, `|'${s[i]}'(${s.charCodeAt(i)}) − '${s[i - 1]}'(${s.charCodeAt(i - 1)})| = ${diff} → score ${score}.`, { i, diff });
  }

  push(6, `Score of the string: ${score}.`, { answer: score });
  return steps;
}
