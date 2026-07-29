import type { Step } from "@/core/types";

export interface FinalValueData {
  operations: string[];
  idx: number | null;
  delta: number | null;
  x: number;
  answer: number | null;
}

export type FinalValueStep = Step<FinalValueData>;

/**
 * Only the operator matters: any operation containing '+' increments x, otherwise it decrements. A
 * single pass accumulates the running value. `line` indexes CODE.
 */
export function finalValueSteps(operations: string[]): FinalValueStep[] {
  const steps: FinalValueStep[] = [];
  let x = 0;

  const snap = (o: Partial<FinalValueData>): FinalValueData => ({ operations, idx: null, delta: null, x, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FinalValueData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "x starts at 0; '+' operations add 1, '−' operations subtract 1.");

  for (let i = 0; i < operations.length; i++) {
    const delta = operations[i].includes("+") ? 1 : -1;
    x += delta;
    push(delta === 1 ? 3 : 4, `"${operations[i]}" → x ${delta === 1 ? "+" : "−"} 1 = ${x}.`, { idx: i, delta });
  }

  push(6, `Final value: ${x}.`, { answer: x });
  return steps;
}
