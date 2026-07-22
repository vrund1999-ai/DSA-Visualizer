import type { Highlight, Step } from "@/core/types";

export interface ExcelData {
  chars: string[];
  i: number | null;
  result: number;
}

export type ExcelStep = Step<ExcelData>;

/**
 * Column titles are base-26 with digits A=1..Z=26 (no zero). Read left to right,
 * multiplying the running value by 26 and adding each letter's value — exactly
 * like parsing a positional number. `line` indexes CODE.
 */
export function excelSteps(s: string): ExcelStep[] {
  const chars = [...s];
  const steps: ExcelStep[] = [];
  let result = 0;

  const snap = (o: Partial<ExcelData>): ExcelData => ({ chars: [...chars], i: null, result, ...o });
  const push = (line: number, explanation: string, data: ExcelData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { result } });
  };

  push(1, "Read the title as a base-26 number (A=1 … Z=26).", snap({}), []);

  for (let i = 0; i < chars.length; i++) {
    const d = chars[i].charCodeAt(0) - 64;
    const prev = result;
    result = result * 26 + d;
    push(4, `'${chars[i]}' = ${d}: result = ${prev} × 26 + ${d} = ${result}.`, snap({ i }), [{ ref: i, role: "current" }]);
  }

  push(6, `Column number is ${result}.`, snap({ i: null }), []);
  return steps;
}
