import type { Step } from "@/core/types";

export type FindPairsOp = { type: "add"; index: number; val: number } | { type: "count"; tot: number };

export interface FindPairsData {
  nums1: number[];
  nums2: number[];
  ops: string[];
  opIndex: number | null;
  /** index in nums2 changed by an add */
  changed: number | null;
  result: number | null;
  answers: (number | null)[];
}

export type FindPairsStep = Step<FindPairsData>;

/**
 * Finding Pairs With a Certain Sum: keep a frequency map of nums2 (the array that changes). count(tot) sums,
 * over every nums1 value x, how many nums2 values equal tot − x. add updates one nums2 entry and its
 * frequency. `line` indexes CODE.
 */
export function findPairsSteps(nums1: number[], nums2In: number[], ops: FindPairsOp[]): FindPairsStep[] {
  const steps: FindPairsStep[] = [];
  const nums2 = [...nums2In];
  const freq = new Map<number, number>();
  for (const x of nums2) freq.set(x, (freq.get(x) ?? 0) + 1);
  const opLabels = ops.map((o) => (o.type === "add" ? `add(${o.index}, ${o.val})` : `count(${o.tot})`));
  const answers: (number | null)[] = ops.map(() => null);

  const snap = (o: Partial<FindPairsData>): FindPairsData => ({
    nums1,
    nums2: [...nums2],
    ops: opLabels,
    opIndex: null,
    changed: null,
    result: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<FindPairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(6, `Built a frequency map of nums2.`);

  for (let k = 0; k < ops.length; k++) {
    const op = ops[k];
    if (op.type === "add") {
      const old = nums2[op.index];
      freq.set(old, freq.get(old)! - 1);
      nums2[op.index] += op.val;
      const nw = nums2[op.index];
      freq.set(nw, (freq.get(nw) ?? 0) + 1);
      push(13, `add(${op.index}, ${op.val}): nums2[${op.index}] ${old} → ${nw}.`, { opIndex: k, changed: op.index });
    } else {
      let c = 0;
      for (const x of nums1) c += freq.get(op.tot - x) ?? 0;
      answers[k] = c;
      push(19, `count(${op.tot}) = ${c} pair(s).`, { opIndex: k, result: c });
    }
  }

  return steps;
}
