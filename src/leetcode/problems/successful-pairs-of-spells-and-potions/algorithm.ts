import type { Step } from "@/core/types";

export interface PairsData {
  spells: number[];
  potions: number[];
  success: number;
  /** index of the spell being processed */
  spellIdx: number | null;
  lo: number;
  hi: number;
  mid: number | null;
  res: number[];
  answer: number[] | null;
}

export type PairsStep = Step<PairsData>;

/**
 * Sorting the potions makes each spell's answer a threshold: once a potion is strong enough, every
 * larger potion is too. Binary search finds the first potion whose product with the spell reaches the
 * success value; everything from there counts. `line` indexes CODE.
 */
export function pairsSteps(spells: number[], input: number[], success: number): PairsStep[] {
  const steps: PairsStep[] = [];
  const potions = [...input].sort((a, b) => a - b);
  const m = potions.length;
  const res: number[] = [];

  const snap = (o: Partial<PairsData>): PairsData => ({ spells, potions, success, spellIdx: null, lo: 0, hi: m, mid: null, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort potions: [${potions.join(", ")}]; success threshold ${success}.`);

  for (let si = 0; si < spells.length; si++) {
    const s = spells[si];
    let lo = 0;
    let hi = m;
    push(4, `Spell ${s}: binary-search the weakest potion with ${s}·potion ≥ ${success}.`, { spellIdx: si, lo, hi });
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (s * potions[mid] >= success) {
        push(7, `${s}·${potions[mid]} = ${s * potions[mid]} ≥ ${success}: search left half.`, { spellIdx: si, lo, hi, mid });
        hi = mid;
      } else {
        push(8, `${s}·${potions[mid]} = ${s * potions[mid]} < ${success}: search right half.`, { spellIdx: si, lo, hi, mid });
        lo = mid + 1;
      }
    }
    res.push(m - lo);
    push(10, `Potions from index ${lo} onward work → ${m - lo} pair(s).`, { spellIdx: si, lo, hi: lo });
  }

  push(12, `Successful pairs per spell: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
