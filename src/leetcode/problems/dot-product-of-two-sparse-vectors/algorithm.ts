import type { Step } from "@/core/types";

export interface SparseDotData {
  a: number[];
  b: number[];
  pairsA: [number, number][];
  pairsB: [number, number][];
  i: number | null;
  j: number | null;
  sum: number;
  /** index just contributed to the sum */
  matched: number | null;
  answer: number | null;
}

export type SparseDotStep = Step<SparseDotData>;

/**
 * Store each vector as its list of (index, value) non-zero pairs. Two pointers walk
 * both lists; only indices present in both contribute to the dot product, so the work
 * is proportional to the number of non-zeros. `line` indexes CODE.
 */
export function sparseDotSteps(a: number[], b: number[]): SparseDotStep[] {
  const steps: SparseDotStep[] = [];
  const pairsA: [number, number][] = [];
  const pairsB: [number, number][] = [];
  a.forEach((v, i) => v && pairsA.push([i, v]));
  b.forEach((v, i) => v && pairsB.push([i, v]));

  let i = 0;
  let j = 0;
  let sum = 0;

  const snap = (o: Partial<SparseDotData>): SparseDotData => ({ a: [...a], b: [...b], pairsA: pairsA.map((p) => [...p] as [number, number]), pairsB: pairsB.map((p) => [...p] as [number, number]), i, j, sum, matched: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: SparseDotData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Keep only non-zero (index, value) pairs; two-pointer over both.", snap({}));

  while (i < pairsA.length && j < pairsB.length) {
    const [ai, av] = pairsA[i];
    const [bi, bv] = pairsB[j];
    if (ai === bi) {
      sum += av * bv;
      push(10, `Both have index ${ai}: ${av} × ${bv} = ${av * bv}; sum ${sum}.`, snap({ matched: ai }));
      i++;
      j++;
    } else if (ai < bi) {
      push(11, `A's index ${ai} < B's ${bi} — advance A.`, snap({}));
      i++;
    } else {
      push(12, `B's index ${bi} < A's ${ai} — advance B.`, snap({}));
      j++;
    }
  }

  push(14, `Dot product = ${sum}.`, snap({ answer: sum }));
  return steps;
}
