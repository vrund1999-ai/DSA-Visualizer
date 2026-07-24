import type { Step } from "@/core/types";

export interface LongestValidData {
  chars: string[];
  pos: number;
  stack: number[];
  best: number;
  /** [start+1, end] indices covered by the current best-length match */
  bestRange: [number, number] | null;
  answer: number | null;
}

export type LongestValidStep = Step<LongestValidData>;

/**
 * Keep a stack of indices with a base sentinel −1. Push on '(', pop on ')'; after a
 * pop, an empty stack means this ')' is a new base, otherwise the distance to the new
 * stack top is a valid-substring length. `line` indexes CODE.
 */
export function longestValidSteps(s: string): LongestValidStep[] {
  const steps: LongestValidStep[] = [];
  const chars = s.split("");
  const stack = [-1];
  let best = 0;
  let bestRange: [number, number] | null = null;

  const snap = (pos: number, o: Partial<LongestValidData>): LongestValidData => ({ chars: [...chars], pos, stack: [...stack], best, bestRange, answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<LongestValidData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(2, -1, "Stack of indices with a −1 base; track the longest valid span.");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(") {
      stack.push(i);
      push(5, i, `'(' at ${i} — push index.`);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
        push(8, i, `Unmatched ')' at ${i} — new base index.`);
      } else {
        const len = i - stack[stack.length - 1];
        if (len > best) {
          best = len;
          bestRange = [stack[stack.length - 1] + 1, i];
        }
        push(9, i, `Matched ')' — valid length ${len}${len === best ? ` (best ${best})` : ""}.`, { bestRange });
      }
    }
  }

  push(12, -1, `Longest valid substring length: ${best}.`, { answer: best });
  return steps;
}
