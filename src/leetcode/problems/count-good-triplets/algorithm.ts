import type { Step } from "@/core/types";

export interface GoodTripletsData {
  arr: number[];
  a: number;
  b: number;
  c: number;
  triplet: [number, number, number] | null;
  good: boolean | null;
  count: number;
  answer: number | null;
}

export type GoodTripletsStep = Step<GoodTripletsData>;

const MAX_STEPS = 400;

/**
 * Count triplets i<j<k whose pairwise absolute differences satisfy |arr[i]−arr[j]|≤a, |arr[j]−arr[k]|≤b and
 * |arr[i]−arr[k]|≤c. A brute triple loop tests each combination (the i,j check prunes early). `line` indexes
 * CODE.
 */
export function goodTripletsSteps(arr: number[], a: number, b: number, c: number): GoodTripletsStep[] {
  const steps: GoodTripletsStep[] = [];
  let count = 0;

  const snap = (o: Partial<GoodTripletsData>): GoodTripletsData => ({
    arr,
    a,
    b,
    c,
    triplet: null,
    good: null,
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<GoodTripletsData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Count good triplets with |i−j|≤${a}, |j−k|≤${b}, |i−k|≤${c}.`);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      for (let k = j + 1; k < arr.length; k++) {
        const good = Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c;
        if (good) count++;
        push(good ? 8 : 6, `(${arr[i]}, ${arr[j]}, ${arr[k]}) ${good ? "is good → count " + count : "fails"}.`, {
          triplet: [i, j, k],
          good,
        });
      }
    }
  }

  push(11, `Good triplets = ${count}.`, { answer: count });
  return steps;
}
