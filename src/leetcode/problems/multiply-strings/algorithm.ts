import type { Step } from "@/core/types";

export interface MultiplyData {
  num1: string;
  num2: string;
  res: number[];
  /** current digit indices i (num1) and j (num2) */
  i: number | null;
  j: number | null;
  /** result positions touched this step */
  p1: number | null;
  p2: number | null;
  answer: string | null;
}

export type MultiplyStep = Step<MultiplyData>;

/**
 * Grade-school multiplication: digit num1[i] × num2[j] lands at result positions
 * i+j (carry) and i+j+1 (units). Accumulate right to left, then strip leading zeros.
 * `line` indexes CODE.
 */
export function multiplySteps(num1: string, num2: string): MultiplyStep[] {
  const steps: MultiplyStep[] = [];
  const m = num1.length;
  const n = num2.length;
  const res = new Array(m + n).fill(0);

  const snap = (o: Partial<MultiplyData>): MultiplyData => ({ num1, num2, res: [...res], i: null, j: null, p1: null, p2: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: MultiplyData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (num1 === "0" || num2 === "0") {
    push(1, "A factor is 0 → product 0.", snap({ answer: "0" }));
    return steps;
  }

  push(3, `Result buffer has ${m + n} slots.`, snap({}));

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = Number(num1[i]) * Number(num2[j]);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + res[p2];
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
      push(10, `${num1[i]}×${num2[j]}=${mul} at positions ${p1},${p2}.`, snap({ i, j, p1, p2 }));
    }
  }

  const answer = res.join("").replace(/^0+/, "") || "0";
  push(13, `Product: ${answer}.`, snap({ answer }));
  return steps;
}
