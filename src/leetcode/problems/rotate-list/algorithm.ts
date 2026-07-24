import type { Step } from "@/core/types";

export interface RotateListInput {
  values: number[];
  k: number;
}

export interface RotateListData {
  values: number[];
  k: number;
  effectiveK: number;
  breakAfter: number | null;
  result: number[];
  phase: "measure" | "cut" | "done";
}

export type RotateListStep = Step<RotateListData>;

/**
 * Rotating right by k moves the last k nodes to the front. Since k can exceed the
 * length, reduce it mod n, then split the list after position n−k−1 and swap the
 * two parts. `line` indexes CODE.
 */
export function rotateListSteps(input: RotateListInput): RotateListStep[] {
  const values = [...input.values];
  const n = values.length;
  const steps: RotateListStep[] = [];

  const push = (line: number, explanation: string, data: Partial<RotateListData>) => {
    steps.push({ id: steps.length, line, explanation, data: { values: [...values], k: input.k, effectiveK: 0, breakAfter: null, result: [...values], phase: "measure", ...data }, highlights: [] });
  };

  if (n === 0) {
    push(1, "Empty list — nothing to rotate.", { phase: "done", result: [] });
    return steps;
  }

  const effectiveK = input.k % n;
  push(4, `Length ${n}; effective rotation k mod n = ${effectiveK}.`, { effectiveK, phase: "measure" });

  if (effectiveK === 0) {
    push(5, "Effective rotation is 0 — the list is unchanged.", { effectiveK, phase: "done", result: values });
    return steps;
  }

  const breakAfter = n - effectiveK - 1;
  push(8, `Cut after index ${breakAfter}; the last ${effectiveK} node(s) move to the front.`, { effectiveK, breakAfter, phase: "cut" });

  const result = [...values.slice(n - effectiveK), ...values.slice(0, n - effectiveK)];
  push(11, `Rotated right by ${effectiveK}: [${result.join(", ")}].`, { effectiveK, breakAfter, phase: "done", result });
  return steps;
}
