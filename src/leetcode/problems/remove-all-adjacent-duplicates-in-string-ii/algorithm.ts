import type { Highlight, Step } from "@/core/types";

export interface RemoveAdjInput {
  s: string;
  k: number;
}

export interface StackFrame {
  char: string;
  count: number;
}

export interface RemoveAdjData {
  chars: string[];
  k: number;
  i: number | null;
  stack: StackFrame[];
  removedChar: string | null;
  done: boolean;
}

export type RemoveAdjStep = Step<RemoveAdjData>;

/**
 * A stack of (char, run-length) collapses adjacent duplicates: each character
 * either extends the top run or starts a new one, and whenever a run reaches k it
 * is popped entirely. `line` indexes CODE.
 */
export function removeAdjSteps(input: RemoveAdjInput): RemoveAdjStep[] {
  const chars = [...input.s];
  const k = input.k;
  const steps: RemoveAdjStep[] = [];
  const stack: StackFrame[] = [];

  const snap = (o: Partial<RemoveAdjData>): RemoveAdjData => ({
    chars: [...chars],
    k,
    i: null,
    stack: stack.map((f) => ({ ...f })),
    removedChar: null,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, data: RemoveAdjData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, `Collapse runs of ${k} identical adjacent characters.`, snap({}), []);

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    const top = stack[stack.length - 1];
    if (top && top.char === c) {
      top.count++;
      push(4, `'${c}' extends the top run to ${top.count}.`, snap({ i }), [{ ref: i, role: "current" }]);
    } else {
      stack.push({ char: c, count: 1 });
      push(5, `'${c}' starts a new run.`, snap({ i }), [{ ref: i, role: "active" }]);
    }
    if (stack[stack.length - 1].count === k) {
      stack.pop();
      push(6, `Run of '${c}' reached ${k} — remove it.`, snap({ i, removedChar: c }), [{ ref: i, role: "swapped" }]);
    }
  }

  push(8, "Done collapsing.", snap({ done: true }), []);
  return steps;
}
