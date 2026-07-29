import type { Step } from "@/core/types";

export interface BitFlipsData {
  start: number;
  goal: number;
  /** bits (MSB..LSB) of start, goal, and xor across a fixed width */
  width: number;
  /** bit position currently examined (from LSB), or null */
  pos: number | null;
  flips: number;
  answer: number | null;
}

export type BitFlipsStep = Step<BitFlipsData>;

/**
 * XOR-ing start and goal produces a 1 in exactly the positions where they differ, and each such bit
 * needs one flip. So we count the set bits of start ^ goal. `line` indexes CODE.
 */
export function bitFlipsSteps(start: number, goal: number): BitFlipsStep[] {
  const steps: BitFlipsStep[] = [];
  const xor0 = start ^ goal;
  const width = Math.max(4, (xor0 || start || goal).toString(2).length);
  let xor = xor0;
  let flips = 0;

  const snap = (o: Partial<BitFlipsData>): BitFlipsData => ({ start, goal, width, pos: null, flips, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BitFlipsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `XOR marks differing bits: ${start} ^ ${goal} = ${xor0} (binary ${xor0.toString(2)}).`);

  let pos = 0;
  while (xor > 0) {
    const bit = xor & 1;
    if (bit) flips++;
    push(4, `Bit ${pos}: ${bit ? "differs → flip" : "matches"} (flips ${flips}).`, { pos });
    xor >>= 1;
    pos++;
  }

  push(7, `Minimum bit flips: ${flips}.`, { answer: flips });
  return steps;
}
