import type { Step } from "@/core/types";

export interface RPNData {
  tokens: string[];
  pos: number;
  stack: number[];
  /** the two operands just popped for an operator, if any */
  operands: [number, number] | null;
  result: number | null;
}

export type RPNStep = Step<RPNData>;

const OPS = new Set(["+", "-", "*", "/"]);

const apply = (op: string, a: number, b: number): number => {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    default: return Math.trunc(a / b);
  }
};

/**
 * Evaluate a postfix (RPN) expression with a stack: push operands; on an operator
 * pop the two most recent operands, apply, and push the result. `line` indexes CODE.
 */
export function rpnSteps(tokens: string[]): RPNStep[] {
  const steps: RPNStep[] = [];
  const stack: number[] = [];

  const snap = (pos: number, o: Partial<RPNData>): RPNData => ({ tokens: [...tokens], pos, stack: [...stack], operands: null, result: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<RPNData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, "Scan tokens left to right, using a stack.");

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (OPS.has(t)) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      const r = apply(t, a, b);
      stack.push(r);
      push(9, i, `Operator ${t}: ${a} ${t} ${b} = ${r}.`, { operands: [a, b] });
    } else {
      stack.push(Number(t));
      push(11, i, `Push operand ${t}.`);
    }
  }

  push(14, -1, `Expression evaluates to ${stack[0]}.`, { result: stack[0] });
  return steps;
}
