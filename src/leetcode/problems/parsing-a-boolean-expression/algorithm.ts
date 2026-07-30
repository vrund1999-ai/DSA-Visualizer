import type { Step } from "@/core/types";

export interface BoolExprData {
  expr: string;
  scan: number | null;
  stack: string[];
  /** the sub-expression just evaluated */
  lastEval: { op: string; operands: string[]; result: string } | null;
  answer: boolean | null;
}

export type BoolExprStep = Step<BoolExprData>;

/**
 * Parse a boolean expression of t/f, !(x), &(...) and |(...). A stack collects tokens; on ')', operands are
 * popped back to the matching '(', the operator is applied, and the result is pushed. `line` indexes CODE.
 */
export function boolExprSteps(expr: string): BoolExprStep[] {
  const steps: BoolExprStep[] = [];
  const stack: string[] = [];

  const snap = (o: Partial<BoolExprData>): BoolExprData => ({
    expr,
    scan: null,
    stack: [...stack],
    lastEval: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<BoolExprData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Evaluate "${expr}" with a stack.`);

  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    if (c === ",") continue;
    if (c !== ")") {
      stack.push(c);
      if (c === "t" || c === "f") push(4, `Push operand '${c}'.`, { scan: i });
      continue;
    }
    const ops: string[] = [];
    while (stack[stack.length - 1] !== "(") ops.push(stack.pop()!);
    stack.pop();
    const op = stack.pop()!;
    const result = op === "!" ? (ops[0] === "t" ? "f" : "t") : op === "&" ? (ops.every((x) => x === "t") ? "t" : "f") : ops.some((x) => x === "t") ? "t" : "f";
    stack.push(result);
    push(10, `Apply ${op}(${ops.slice().reverse().join(",")}) = ${result}.`, { scan: i, lastEval: { op, operands: ops.slice().reverse(), result } });
  }

  const answer = stack[0] === "t";
  push(15, `Result = ${stack[0]} → ${answer}.`, { answer });
  return steps;
}
