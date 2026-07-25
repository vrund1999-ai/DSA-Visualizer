import type { Step } from "@/core/types";

export interface CouplesData {
  row: number[];
  /** seat pair currently being fixed (i, i+1) */
  seat: number | null;
  /** the two seats swapped this step */
  swapped: [number, number] | null;
  swaps: number;
  answer: number | null;
}

export type CouplesStep = Step<CouplesData>;

/**
 * Couples are (0,1), (2,3), … so a person p's partner is p XOR 1. Scanning seat-pairs left to
 * right, whenever the second seat isn't the partner we swap the partner into place — greedy and
 * optimal because fixing the left pair never un-fixes an earlier one. `line` indexes CODE.
 */
export function couplesSteps(input: number[]): CouplesStep[] {
  const steps: CouplesStep[] = [];
  const row = [...input];
  const pos: number[] = [];
  row.forEach((p, i) => (pos[p] = i));
  let swaps = 0;

  const snap = (o: Partial<CouplesData>): CouplesData => ({ row: [...row], seat: null, swapped: null, swaps, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CouplesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Partner of person p is p XOR 1; fix each seat-pair left to right.");

  for (let i = 0; i < row.length; i += 2) {
    const partner = row[i] ^ 1;
    if (row[i + 1] === partner) {
      push(6, `Seats ${i},${i + 1}: ${row[i]} & ${row[i + 1]} already a couple.`, { seat: i });
      continue;
    }
    const j = pos[partner];
    const a = row[i + 1];
    row[i + 1] = partner;
    row[j] = a;
    pos[a] = j;
    pos[partner] = i + 1;
    swaps++;
    push(8, `Seats ${i},${i + 1}: swap in partner ${partner} from seat ${j} (swaps ${swaps}).`, { seat: i, swapped: [i + 1, j] });
  }

  push(12, `Minimum swaps to seat every couple together: ${swaps}.`, { answer: swaps });
  return steps;
}
