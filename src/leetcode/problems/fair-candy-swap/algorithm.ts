import type { Step } from "@/core/types";

export interface CandySwapData {
  alice: number[];
  bob: number[];
  sumA: number;
  sumB: number;
  delta: number;
  /** alice index being tested */
  scan: number | null;
  answer: [number, number] | null;
}

export type CandySwapStep = Step<CandySwapData>;

/**
 * Fair Candy Swap: after swapping one box a (Alice's) for b (Bob's), the sums equalize iff a − b = (sumA −
 * sumB)/2 = delta. So for each of Alice's boxes, check whether Bob has a box of value a − delta. `line`
 * indexes CODE.
 */
export function candySwapSteps(alice: number[], bob: number[]): CandySwapStep[] {
  const steps: CandySwapStep[] = [];
  const sumA = alice.reduce((a, b) => a + b, 0);
  const sumB = bob.reduce((a, b) => a + b, 0);
  const delta = (sumA - sumB) / 2;
  const bobSet = new Set(bob);

  const snap = (o: Partial<CandySwapData>): CandySwapData => ({
    alice,
    bob,
    sumA,
    sumB,
    delta,
    scan: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<CandySwapData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `sumA = ${sumA}, sumB = ${sumB}, delta = ${delta}. Alice gives a, takes a − delta.`);

  for (let i = 0; i < alice.length; i++) {
    const a = alice[i];
    const need = a - delta;
    if (bobSet.has(need)) {
      push(8, `Alice gives ${a}, takes ${need} → sums both become ${sumA - a + need}.`, { scan: i, answer: [a, need] });
      return steps;
    }
    push(7, `Give ${a}? need ${need} from Bob — not available.`, { scan: i });
  }

  return steps;
}
