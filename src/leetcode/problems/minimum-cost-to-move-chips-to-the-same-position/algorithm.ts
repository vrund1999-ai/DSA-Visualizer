import type { Step } from "@/core/types";

export interface ChipsData {
  position: number[];
  idx: number | null;
  even: number;
  odd: number;
  answer: number | null;
}

export type ChipsStep = Step<ChipsData>;

/**
 * Moving a chip by two costs nothing, so every chip can reach any position of the same parity for
 * free. Only crossing between even and odd costs 1. So gather all chips onto whichever parity has more
 * of them, paying 1 per chip in the smaller group. `line` indexes CODE.
 */
export function chipsSteps(position: number[]): ChipsStep[] {
  const steps: ChipsStep[] = [];
  let even = 0;
  let odd = 0;

  const snap = (o: Partial<ChipsData>): ChipsData => ({ position, idx: null, even, odd, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ChipsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Moving by 2 is free, so only parity matters. Count even vs odd positions.");

  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) even++;
    else odd++;
    push(position[i] % 2 === 0 ? 3 : 4, `Chip at ${position[i]} is ${position[i] % 2 === 0 ? "even" : "odd"} (even ${even}, odd ${odd}).`, { idx: i });
  }

  const answer = Math.min(even, odd);
  push(6, `Move the smaller group: min(${even}, ${odd}) = ${answer}.`, { answer });
  return steps;
}
