import type { Step } from "@/core/types";

export interface BasicCalcData {
  s: string;
  pos: number | null;
  result: number;
  sign: number;
  num: number;
  stack: number[];
  answer: number | null;
}

export type BasicCalcStep = Step<BasicCalcData>;

/**
 * Evaluate +, −, and parentheses without operator precedence. A running `result` and
 * `sign` accumulate the current level; '(' pushes them and resets, ')' folds the inner
 * result back using the saved sign and outer result. `line` indexes CODE.
 */
export function basicCalcSteps(s: string): BasicCalcStep[] {
  const steps: BasicCalcStep[] = [];
  let result = 0;
  let sign = 1;
  let num = 0;
  const stack: number[] = [];

  const snap = (pos: number, o: Partial<BasicCalcData>): BasicCalcData => ({ s, pos, result, sign, num, stack: [...stack], answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<BasicCalcData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, "Track a running result and sign; parentheses save context on a stack.");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c >= "0" && c <= "9") {
      num = num * 10 + Number(c);
      push(4, i, `Read digit ${c} → num = ${num}.`);
    } else if (c === "+" || c === "-") {
      result += sign * num;
      num = 0;
      sign = c === "+" ? 1 : -1;
      push(7, i, `Apply pending; result = ${result}, next sign ${sign > 0 ? "+" : "−"}.`);
    } else if (c === "(") {
      stack.push(result, sign);
      result = 0;
      sign = 1;
      push(9, i, `'(' — push context [${stack.join(", ")}] and reset.`);
    } else if (c === ")") {
      result += sign * num;
      num = 0;
      const outerSign = stack.pop()!;
      const outerResult = stack.pop()!;
      result = result * outerSign + outerResult;
      push(13, i, `')' — combine inner with outer → result ${result}.`);
    }
  }

  const answer = result + sign * num;
  push(16, -1, `Final value: ${answer}.`, { answer });
  return steps;
}
