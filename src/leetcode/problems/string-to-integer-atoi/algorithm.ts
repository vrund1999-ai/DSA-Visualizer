import type { Highlight, Step } from "@/core/types";

export interface AtoiData {
  chars: string[];
  i: number | null;
  sign: number;
  num: number;
  result: number | null;
  phase: "space" | "sign" | "digits" | "done";
}

export type AtoiStep = Step<AtoiData>;

const INT_MIN = -(2 ** 31);
const INT_MAX = 2 ** 31 - 1;

/**
 * Four phases: skip leading spaces, read an optional sign, accumulate digits, and
 * clamp to the signed 32-bit range. Parsing stops at the first non-digit. `line`
 * indexes CODE.
 */
export function atoiSteps(s: string): AtoiStep[] {
  const chars = [...s];
  const steps: AtoiStep[] = [];
  let i = 0;
  let sign = 1;
  let num = 0;

  const snap = (o: Partial<AtoiData>): AtoiData => ({ chars: [...chars], i, sign, num, result: null, phase: "space", ...o });
  const push = (line: number, explanation: string, data: AtoiData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Parse: skip spaces, read sign, collect digits, then clamp to 32 bits.", snap({}), i < chars.length ? [{ ref: i, role: "current" }] : []);

  while (chars[i] === " ") {
    push(2, `Skip leading space at ${i}.`, snap({ phase: "space" }), [{ ref: i, role: "visited" }]);
    i++;
  }

  if (chars[i] === "+" || chars[i] === "-") {
    sign = chars[i] === "-" ? -1 : 1;
    push(4, `Sign '${chars[i]}' → ${sign < 0 ? "negative" : "positive"}.`, snap({ phase: "sign" }), [{ ref: i, role: "compared" }]);
    i++;
  }

  while (chars[i] >= "0" && chars[i] <= "9") {
    num = num * 10 + Number(chars[i]);
    push(6, `Digit '${chars[i]}' → num = ${num}.`, snap({ phase: "digits" }), [{ ref: i, role: "sorted" }]);
    i++;
  }

  let result = num * sign;
  if (result < INT_MIN) result = INT_MIN;
  if (result > INT_MAX) result = INT_MAX;
  push(8, `Apply sign and clamp → ${result}.`, snap({ i: null, result, phase: "done" }), []);
  return steps;
}
