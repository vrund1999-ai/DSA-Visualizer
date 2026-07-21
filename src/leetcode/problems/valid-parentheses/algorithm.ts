import type { Highlight, Step } from "@/core/types";

export interface StackFrame {
  char: string;
  index: number;
}

export interface ParenData {
  chars: string[];
  i: number | null;
  stack: StackFrame[];
  result: boolean | null;
}

export type ParenStep = Step<ParenData>;

const PAIRS: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
const isOpen = (ch: string) => ch === "(" || ch === "[" || ch === "{";

/**
 * Stack matching: every opening bracket is pushed; every closing bracket must
 * pop its exact partner off the top. A mismatch (or leftover openers at the end)
 * means the string is invalid. `line` indexes CODE.
 */
export function validParenSteps(s: string): ParenStep[] {
  const chars = [...s];
  const steps: ParenStep[] = [];
  const stack: StackFrame[] = [];
  let result: boolean | null = null;

  const snap = (o: Partial<ParenData>): ParenData => ({
    chars: [...chars],
    i: null,
    stack: stack.map((f) => ({ ...f })),
    result,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: ParenData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { depth: stack.length } });
  };

  push(1, "Scan left to right, using a stack to remember unmatched openers.", snap({}), []);

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (isOpen(ch)) {
      stack.push({ char: ch, index: i });
      push(5, `'${ch}' is an opener — push it onto the stack.`, snap({ i }), [
        { ref: i, role: "current" },
      ]);
    } else {
      const top = stack.pop();
      if (top && top.char === PAIRS[ch]) {
        push(6, `'${ch}' closes the '${top.char}' pushed at index ${top.index} — matched.`, snap({ i }), [
          { ref: top.index, role: "sorted" },
          { ref: i, role: "sorted" },
        ]);
      } else {
        result = false;
        push(7, `'${ch}' has no matching opener on top — invalid.`, snap({ i }), [
          { ref: i, role: "swapped" },
        ]);
        return steps;
      }
    }
  }

  result = stack.length === 0;
  push(
    10,
    result
      ? "Reached the end with an empty stack — every bracket matched, valid."
      : "Reached the end but the stack still has unmatched openers — invalid.",
    snap({ i: null }),
    stack.map((f) => ({ ref: f.index, role: "swapped" }) as Highlight),
  );
  return steps;
}
