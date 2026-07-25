import type { Step } from "@/core/types";

export interface ReverseParenData {
  s: string;
  idx: number | null;
  /** stack of segment strings; top is the currently-building one */
  stack: string[];
  action: "open" | "close" | "char" | null;
  answer: string | null;
}

export type ReverseParenStep = Step<ReverseParenData>;

/**
 * Each '(' opens a fresh segment on the stack; letters append to the top segment. On ')' we
 * pop the finished segment, reverse it, and append it to the segment now on top — so nested
 * groups get reversed exactly once, inner ones first. `line` indexes CODE.
 */
export function reverseParenSteps(s: string): ReverseParenStep[] {
  const steps: ReverseParenStep[] = [];
  const stack: string[] = [""];

  const snap = (o: Partial<ReverseParenData>): ReverseParenData => ({ s, idx: null, stack: [...stack], action: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ReverseParenData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Keep a stack of segments; the top is the one currently being built.");

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(") {
      stack.push("");
      push(4, `'(' → push a new empty nested segment.`, { idx: i, action: "open" });
    } else if (ch === ")") {
      const done = stack.pop()!;
      const reversed = [...done].reverse().join("");
      stack[stack.length - 1] += reversed;
      push(7, `')' → reverse "${done}" to "${reversed}" and merge up.`, { idx: i, action: "close" });
    } else {
      stack[stack.length - 1] += ch;
      push(9, `Append '${ch}' to the current segment.`, { idx: i, action: "char" });
    }
  }

  push(12, `Fully resolved string: "${stack[0]}".`, { answer: stack[0] });
  return steps;
}
