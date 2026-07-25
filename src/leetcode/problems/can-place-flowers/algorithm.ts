import type { Step } from "@/core/types";

export interface FlowersData {
  bed: number[];
  n: number;
  pos: number | null;
  /** true if a flower was planted this step */
  planted: boolean;
  count: number;
  answer: boolean | null;
}

export type FlowersStep = Step<FlowersData>;

/**
 * Greedily plant a flower in any empty plot whose neighbours are also empty (or edges),
 * counting placements. As many as possible fit this way; compare the count to n. `line`
 * indexes CODE.
 */
export function flowersSteps(input: number[], n: number): FlowersStep[] {
  const steps: FlowersStep[] = [];
  const bed = [...input];
  let count = 0;

  const snap = (pos: number, o: Partial<FlowersData>): FlowersData => ({ bed: [...bed], n, pos, planted: false, count, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<FlowersData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, `Plant greedily; need ${n} more flower(s).`, -1);

  for (let i = 0; i < bed.length; i++) {
    const empty = bed[i] === 0;
    const leftOk = i === 0 || bed[i - 1] === 0;
    const rightOk = i === bed.length - 1 || bed[i + 1] === 0;
    if (empty && leftOk && rightOk) {
      bed[i] = 1;
      count++;
      push(6, `Plot ${i} is free with empty neighbours — plant (count ${count}).`, i, { planted: true });
    } else {
      push(3, `Plot ${i} can't hold a flower (${!empty ? "occupied" : "neighbour taken"}).`, i);
    }
  }

  const answer = count >= n;
  push(9, `Planted ${count}; ${count} ≥ ${n} is ${answer}.`, -1, { answer });
  return steps;
}
