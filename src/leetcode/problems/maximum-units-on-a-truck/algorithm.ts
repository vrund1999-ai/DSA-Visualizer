import type { Step } from "@/core/types";

export interface UnitsData {
  boxTypes: number[][];
  truckSize: number;
  /** box type index being loaded */
  cur: number | null;
  /** boxes taken from cur */
  taken: number;
  spaceLeft: number;
  units: number;
  answer: number | null;
}

export type UnitsStep = Step<UnitsData>;

/**
 * Every unit of truck space should carry the densest box available, so sorting box types by units-per-box
 * descending and filling greedily is optimal. Each type contributes min(its count, remaining space) boxes.
 * `line` indexes CODE.
 */
export function unitsSteps(input: number[][], truckSize: number): UnitsStep[] {
  const steps: UnitsStep[] = [];
  const boxTypes = input.map((b) => [...b]).sort((a, b) => b[1] - a[1]);
  let spaceLeft = truckSize;
  let units = 0;

  const snap = (o: Partial<UnitsData>): UnitsData => ({ boxTypes, truckSize, cur: null, taken: 0, spaceLeft, units, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<UnitsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort box types by units per box (desc); truck holds ${truckSize} box(es).`);

  for (let i = 0; i < boxTypes.length; i++) {
    if (spaceLeft === 0) break;
    const [count, perBox] = boxTypes[i];
    const take = Math.min(count, spaceLeft);
    units += take * perBox;
    spaceLeft -= take;
    push(6, `Load ${take} box(es) worth ${perBox} units each → +${take * perBox} (total ${units}).`, { cur: i, taken: take });
  }

  push(9, `Maximum total units: ${units}.`, { answer: units });
  return steps;
}
