import type { Step } from "@/core/types";

export interface MaxChunksData {
  arr: number[];
  i: number | null;
  max: number;
  /** boundary indices where a chunk is cut */
  boundaries: number[];
  chunks: number;
  answer: number | null;
}

export type MaxChunksStep = Step<MaxChunksData>;

/**
 * The array is a permutation of 0..n−1, so a prefix can be its own chunk exactly when it contains all
 * the values 0..i — equivalently when the running maximum equals the current index. Every such point is
 * a chunk boundary. `line` indexes CODE.
 */
export function maxChunksSteps(arr: number[]): MaxChunksStep[] {
  const steps: MaxChunksStep[] = [];
  let max = 0;
  let chunks = 0;
  const boundaries: number[] = [];

  const snap = (o: Partial<MaxChunksData>): MaxChunksData => ({ arr, i: null, max, boundaries: [...boundaries], chunks, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxChunksData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Cut a chunk wherever the running max equals the index (a self-contained prefix).");

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) {
      chunks++;
      boundaries.push(i);
      push(5, `i=${i}: max ${max} = ${i} → chunk boundary (chunks ${chunks}).`, { i, max });
    } else {
      push(3, `i=${i}: max ${max} > ${i} → still spanning a chunk.`, { i, max });
    }
  }

  push(7, `Maximum chunks: ${chunks}.`, { answer: chunks });
  return steps;
}
