import type { Step } from "@/core/types";

export interface ConsecData {
  s: string;
  i: number | null;
  /** length of the current run ending at i */
  run: number;
  best: number;
  /** start index of the current run */
  runStart: number;
  answer: number | null;
}

export type ConsecStep = Step<ConsecData>;

/**
 * The "power" is the longest run of one repeated character. A single pass keeps the length of the
 * run ending at the current position — extending it on a match, resetting to 1 otherwise — and
 * tracks the maximum seen. `line` indexes CODE.
 */
export function consecSteps(s: string): ConsecStep[] {
  const steps: ConsecStep[] = [];
  let best = 1;
  let run = 1;
  let runStart = 0;

  const snap = (o: Partial<ConsecData>): ConsecData => ({ s, i: null, run, best, runStart, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ConsecData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Track the current run length; keep the longest.");

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      run++;
      push(3, `'${s[i]}' extends the run → length ${run}.`, { i });
    } else {
      run = 1;
      runStart = i;
      push(4, `'${s[i]}' ≠ '${s[i - 1]}' → new run of length 1.`, { i });
    }
    best = Math.max(best, run);
    push(5, `Longest run so far: ${best}.`, { i });
  }

  push(7, `Maximum consecutive power: ${best}.`, { answer: best });
  return steps;
}
