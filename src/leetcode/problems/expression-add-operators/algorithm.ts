import type { Step } from "@/core/types";

export interface ExprData {
  num: string;
  target: number;
  /** expression at the current leaf */
  current: string;
  currentVal: number | null;
  /** whether the current leaf matched the target */
  hit: boolean;
  found: string[];
  answer: string[] | null;
}

export type ExprStep = Step<ExprData>;

const MAX_STEPS = 400;

/**
 * Insert +, − and × between the digits of `num` so the expression evaluates to `target`. Backtracking tries
 * every split; multiplication is handled by undoing the previous operand (calc − prev + prev·cur) so it
 * binds tighter, and multi-digit operands may not have a leading zero. `line` indexes CODE.
 */
export function exprSteps(num: string, target: number): ExprStep[] {
  const steps: ExprStep[] = [];
  const found: string[] = [];

  const snap = (o: Partial<ExprData>): ExprData => ({
    num,
    target,
    current: "",
    currentVal: null,
    hit: false,
    found: [...found],
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ExprData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const dfs = (i: number, expr: string, calc: number, prev: number) => {
    if (i === num.length) {
      const hit = calc === target;
      if (hit) found.push(expr);
      push(4, hit ? `"${expr}" = ${calc} = target ✓` : `"${expr}" = ${calc} ≠ ${target}.`, { current: expr, currentVal: calc, hit });
      return;
    }
    for (let j = i; j < num.length; j++) {
      const s = num.slice(i, j + 1);
      if (s.length > 1 && s[0] === "0") break;
      const cur = Number(s);
      if (i === 0) {
        dfs(j + 1, s, cur, cur);
      } else {
        dfs(j + 1, expr + "+" + s, calc + cur, cur);
        dfs(j + 1, expr + "-" + s, calc - cur, -cur);
        dfs(j + 1, expr + "*" + s, calc - prev + prev * cur, prev * cur);
      }
    }
  };

  push(19, `Try every way to place +, − and × in "${num}" to reach ${target}.`);
  dfs(0, "", 0, 0);

  push(20, `Found ${found.length} expression(s) equal to ${target}.`, { answer: found });
  return steps;
}
