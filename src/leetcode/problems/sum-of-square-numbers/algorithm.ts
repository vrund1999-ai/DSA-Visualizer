import type { Step } from "@/core/types";

export interface SquareSumData {
  c: number;
  a: number;
  b: number;
  sum: number;
  answer: boolean | null;
}

export type SquareSumStep = Step<SquareSumData>;

/**
 * Two pointers a (from 0) and b (from ⌊√c⌋). Their squares' sum is monotonic in each
 * pointer, so raise a when the sum is too small and lower b when it's too big until
 * they meet or hit the target. `line` indexes CODE.
 */
export function squareSumSteps(c: number): SquareSumStep[] {
  const steps: SquareSumStep[] = [];
  let a = 0;
  let b = Math.floor(Math.sqrt(c));

  const snap = (o: Partial<SquareSumData>): SquareSumData => ({ c, a, b, sum: a * a + b * b, answer: null, ...o });
  const push = (line: number, explanation: string, data: SquareSumData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Is ${c} a sum of two squares? Search a in [0, ${b}].`, snap({}));

  while (a <= b) {
    const sum = a * a + b * b;
    if (sum === c) {
      push(4, `${a}² + ${b}² = ${sum} = ${c} → true.`, snap({ answer: true }));
      return steps;
    } else if (sum < c) {
      push(5, `${a}² + ${b}² = ${sum} < ${c} — increase a.`, snap({}));
      a++;
    } else {
      push(6, `${a}² + ${b}² = ${sum} > ${c} — decrease b.`, snap({}));
      b--;
    }
  }

  push(8, `No pair found → false.`, snap({ answer: false }));
  return steps;
}
