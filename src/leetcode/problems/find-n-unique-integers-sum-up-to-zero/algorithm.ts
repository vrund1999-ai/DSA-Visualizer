import type { Step } from "@/core/types";

export interface SumZeroData {
  n: number;
  result: number[];
  /** indices added on this step */
  added: number[];
  sum: number;
  done: boolean;
}

export type SumZeroStep = Step<SumZeroData>;

/**
 * Build n distinct integers summing to zero by emitting balanced pairs i and −i (each pair contributes 0);
 * if n is odd, a lone 0 completes the count without changing the sum. `line` indexes CODE.
 */
export function sumZeroSteps(n: number): SumZeroStep[] {
  const steps: SumZeroStep[] = [];
  const result: number[] = [];

  const snap = (o: Partial<SumZeroData>): SumZeroData => ({
    n,
    result: [...result],
    added: [],
    sum: result.reduce((a, b) => a + b, 0),
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<SumZeroData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Need ${n} distinct integers summing to 0.`);

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    result.push(i, -i);
    push(3, `Add the balanced pair ${i} and ${-i} (nets 0).`, { added: [result.length - 2, result.length - 1] });
  }

  if (n % 2 === 1) {
    result.push(0);
    push(5, `n is odd — pad with a 0 to reach ${n} numbers.`, { added: [result.length - 1] });
  }

  push(6, `Result: [${result.join(", ")}], sum = 0.`, { done: true });
  return steps;
}
