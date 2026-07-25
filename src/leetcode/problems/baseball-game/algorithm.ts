import type { Step } from "@/core/types";

export interface BaseballData {
  operations: string[];
  idx: number | null;
  stack: number[];
  /** indices in stack read by the current op (for + and D) */
  used: number[];
  action: "push" | "sum" | "double" | "cancel" | null;
  total: number;
  answer: number | null;
}

export type BaseballStep = Step<BaseballData>;

/**
 * Each operation edits a running scoreboard held on a stack: a number pushes, 'D' pushes double the
 * last, '+' pushes the sum of the last two, and 'C' cancels the last. The final answer is the sum of
 * whatever remains. `line` indexes CODE.
 */
export function baseballSteps(operations: string[]): BaseballStep[] {
  const steps: BaseballStep[] = [];
  const stack: number[] = [];

  const snap = (o: Partial<BaseballData>): BaseballData => ({ operations, idx: null, stack: [...stack], used: [], action: null, total: stack.reduce((a, b) => a + b, 0), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BaseballData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Maintain a stack of scores; each operation edits its top.");

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const n = stack.length;
    if (op === "+") {
      const v = stack[n - 1] + stack[n - 2];
      push(4, `'+' → push ${stack[n - 1]} + ${stack[n - 2]} = ${v}.`, { idx: i, used: [n - 1, n - 2], action: "sum" });
      stack.push(v);
    } else if (op === "D") {
      const v = 2 * stack[n - 1];
      push(6, `'D' → push 2 × ${stack[n - 1]} = ${v}.`, { idx: i, used: [n - 1], action: "double" });
      stack.push(v);
    } else if (op === "C") {
      push(8, `'C' → cancel the last score ${stack[n - 1]}.`, { idx: i, used: [n - 1], action: "cancel" });
      stack.pop();
    } else {
      stack.push(Number(op));
      push(9, `Record score ${op}.`, { idx: i, action: "push" });
    }
  }

  const total = stack.reduce((a, b) => a + b, 0);
  push(11, `Sum of the record: ${total}.`, { answer: total });
  return steps;
}
