import type { Step } from "@/core/types";

export interface StonesData {
  /** current stones, sorted descending (simulating a max-heap) */
  heap: number[];
  /** the two heaviest picked this round */
  a: number | null;
  b: number | null;
  /** remainder pushed back, or null if both smashed */
  remainder: number | null;
  answer: number | null;
}

export type StonesStep = Step<StonesData>;

/**
 * Each round the two heaviest stones smash: equal weights destroy each other, otherwise the difference
 * returns to the pile. A max-heap (here shown as the descending-sorted pile) always surfaces the two
 * heaviest in O(log n). `line` indexes CODE.
 */
export function stonesSteps(input: number[]): StonesStep[] {
  const steps: StonesStep[] = [];
  const heap = [...input].sort((x, y) => y - x);

  const snap = (o: Partial<StonesData>): StonesData => ({ heap: [...heap], a: null, b: null, remainder: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<StonesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Repeatedly smash the two heaviest stones (max-heap).");

  while (heap.length > 1) {
    const a = heap.shift()!;
    const b = heap.shift()!;
    if (a !== b) {
      const remainder = a - b;
      // insert remainder keeping descending order
      let pos = heap.findIndex((s) => s < remainder);
      if (pos === -1) pos = heap.length;
      heap.splice(pos, 0, remainder);
      push(6, `Smash ${a} and ${b} → ${remainder} returns to the pile.`, { a, b, remainder });
    } else {
      push(5, `Smash ${a} and ${b} — equal, both destroyed.`, { a, b });
    }
  }

  const answer = heap.length ? heap[0] : 0;
  push(8, `Last stone weight: ${answer}.`, { answer });
  return steps;
}
