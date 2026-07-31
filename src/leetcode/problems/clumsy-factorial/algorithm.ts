import type { Step } from "@/core/types";

export interface ClumsyData {
  n: number;
  /** operand i currently applied */
  i: number | null;
  op: string | null;
  stack: number[];
  answer: number | null;
}

export type ClumsyStep = Step<ClumsyData>;

/**
 * Clumsy Factorial: apply the rotating operators *, /, +, - to n, n−1, …, 1. Multiplication and division
 * bind tighter, so they update the stack's top immediately, while + and − just push (a negative for −),
 * and the final answer is the sum of the stack. `line` indexes CODE.
 */
export function clumsySteps(n: number): ClumsyStep[] {
  const steps: ClumsyStep[] = [];
  const stack = [n];
  const ops = ["*", "/", "+", "-"];

  const snap = (o: Partial<ClumsyData>): ClumsyData => ({ n, i: null, op: null, stack: [...stack], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ClumsyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Evaluate ${n} with rotating operators *, /, +, -.`);

  for (let i = n - 1, k = 0; i > 0; i--, k++) {
    const op = ops[k % 4];
    if (op === "*") stack.push(stack.pop()! * i);
    else if (op === "/") stack.push(Math.trunc(stack.pop()! / i));
    else if (op === "+") stack.push(i);
    else stack.push(-i);
    push(op === "*" ? 5 : op === "/" ? 7 : op === "+" ? 8 : 9, `${op} ${i} → stack [${stack.join(", ")}].`, { i, op });
  }

  const answer = stack.reduce((a, b) => a + b, 0);
  push(11, `Sum the stack → ${answer}.`, { answer });
  return steps;
}
