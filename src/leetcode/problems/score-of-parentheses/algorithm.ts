import type { Step } from "@/core/types";

export interface ParenScoreData {
  s: string;
  i: number | null;
  stack: number[];
  answer: number | null;
}

export type ParenScoreStep = Step<ParenScoreData>;

/**
 * The stack holds the accumulated score at each nesting depth. Opening a parenthesis pushes a fresh 0;
 * closing one folds the inner score up: an empty pair scores 1, otherwise the inner score doubles, and
 * the result adds into the enclosing level. `line` indexes CODE.
 */
export function parenScoreSteps(s: string): ParenScoreStep[] {
  const steps: ParenScoreStep[] = [];
  const stack = [0];

  const snap = (o: Partial<ParenScoreData>): ParenScoreData => ({ s, i: null, stack: [...stack], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ParenScoreData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "The stack tracks the running score at each nesting depth.");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(0);
      push(4, `'(' at ${i}: open a deeper level.`, { i });
    } else {
      const v = stack.pop()!;
      const add = Math.max(2 * v, 1);
      stack[stack.length - 1] += add;
      push(8, `')' at ${i}: inner ${v} → ${add}; add to the level above.`, { i });
    }
  }

  push(11, `Total score: ${stack[0]}.`, { answer: stack[0] });
  return steps;
}
