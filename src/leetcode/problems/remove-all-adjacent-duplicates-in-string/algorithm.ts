import type { Step } from "@/core/types";

export interface RemoveAdjData {
  s: string;
  idx: number | null;
  stack: string[];
  /** "pop" when the current char cancelled the top, "push" otherwise */
  action: "pop" | "push" | null;
  answer: string | null;
}

export type RemoveAdjStep = Step<RemoveAdjData>;

/**
 * A stack cancels adjacent equal characters: if the incoming char equals the top, they form
 * a removable pair so we pop; otherwise we push. Whatever remains, read bottom-to-top, is the
 * fully reduced string. `line` indexes CODE.
 */
export function removeAdjSteps(s: string): RemoveAdjStep[] {
  const steps: RemoveAdjStep[] = [];
  const stack: string[] = [];

  const snap = (o: Partial<RemoveAdjData>): RemoveAdjData => ({ s, idx: null, stack: [...stack], action: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RemoveAdjData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Use a stack; equal adjacent characters cancel on contact.");

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
      push(4, `'${ch}' matches the top → pop the pair.`, { idx: i, action: "pop" });
    } else {
      stack.push(ch);
      push(6, `'${ch}' differs from the top → push it.`, { idx: i, action: "push" });
    }
  }

  const answer = stack.join("");
  push(8, `No more adjacent duplicates: "${answer}".`, { answer });
  return steps;
}
