import type { Step } from "@/core/types";

export interface DiffWaysData {
  expr: string;
  /** the sub-expression currently being split */
  sub: string | null;
  /** operator index within the FULL expression being split on */
  splitAt: number | null;
  results: number[];
  answer: number[] | null;
}

export type DiffWaysStep = Step<DiffWaysData>;

const apply = (op: string, a: number, b: number): number => (op === "+" ? a + b : op === "-" ? a - b : a * b);

/**
 * Divide and conquer: split the expression at every operator, recursively evaluate all
 * parenthesizations of the left and right halves, then combine each pair with that
 * operator. `line` indexes CODE. (We surface the top-level splits.)
 */
export function diffWaysSteps(expr: string): DiffWaysStep[] {
  const steps: DiffWaysStep[] = [];

  const snap = (o: Partial<DiffWaysData>): DiffWaysData => ({ expr, sub: null, splitAt: null, results: [], answer: null, ...o });
  const push = (line: number, explanation: string, data: DiffWaysData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const compute = (s: string): number[] => {
    if (/^\d+$/.test(s)) return [Number(s)];
    const res: number[] = [];
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === "+" || c === "-" || c === "*") {
        const left = compute(s.slice(0, i));
        const right = compute(s.slice(i + 1));
        for (const a of left) for (const b of right) res.push(apply(c, a, b));
      }
    }
    return res;
  };

  push(2, `Split "${expr}" at every operator and combine sub-results.`, snap({}));

  // surface the top-level splits of the whole expression
  const res: number[] = [];
  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    if (c === "+" || c === "-" || c === "*") {
      const left = compute(expr.slice(0, i));
      const right = compute(expr.slice(i + 1));
      for (const a of left) for (const b of right) res.push(apply(c, a, b));
      push(10, `Split on '${c}' at ${i}: "${expr.slice(0, i)}" ${c} "${expr.slice(i + 1)}" → ${left.length}×${right.length} combos.`, snap({ sub: expr, splitAt: i, results: [...res] }));
    }
  }

  const finalRes = /^\d+$/.test(expr) ? [Number(expr)] : res;
  push(13, `${finalRes.length} distinct result(s): [${finalRes.join(", ")}].`, snap({ results: finalRes, answer: finalRes }));
  return steps;
}
