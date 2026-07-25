import type { Step } from "@/core/types";

export interface CalcData {
  s: string;
  pos: number | null;
  num: number;
  op: string;
  stack: number[];
  answer: number | null;
}

export type CalcStep = Step<CalcData>;

/**
 * Evaluate + − × ÷ without parentheses using a stack. Digits accumulate into `num`;
 * on hitting an operator (or end) the pending operator decides whether to push, or to
 * pop and combine for × / ÷ — deferring only + and − to a final sum handles
 * precedence. `line` indexes CODE.
 */
export function calcSteps(s: string): CalcStep[] {
  const steps: CalcStep[] = [];
  const stack: number[] = [];
  let num = 0;
  let op = "+";

  const snap = (pos: number, o: Partial<CalcData>): CalcData => ({ s, pos, num, op, stack: [...stack], answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<CalcData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(2, -1, "Scan the expression; a stack defers + and − past × and ÷.");

  const isDigit = (c: string) => c >= "0" && c <= "9";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isDigit(c)) {
      num = num * 10 + Number(c);
      push(5, i, `Read digit ${c} → num = ${num}.`);
    }
    if ((!isDigit(c) && c !== " ") || i === s.length - 1) {
      if (op === "+") stack.push(num);
      else if (op === "-") stack.push(-num);
      else if (op === "*") stack.push(stack.pop()! * num);
      else stack.push(Math.trunc(stack.pop()! / num));
      push(9, i, `Apply '${op}' with ${num} → stack [${stack.join(", ")}].`);
      op = c;
      num = 0;
    }
  }

  const answer = stack.reduce((a, b) => a + b, 0);
  push(14, -1, `Sum the stack → ${answer}.`, { answer });
  return steps;
}
