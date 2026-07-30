import type { Step } from "@/core/types";

export interface KthLevelSumData {
  heap: (number | null)[];
  k: number;
  activeLevel: number | null;
  levelSums: number[];
  sortedSums: number[] | null;
  answer: number | null;
}

export type KthLevelSumStep = Step<KthLevelSumData>;

/**
 * Sum each level of the tree (BFS), then the k-th largest level sum is the answer (or −1 if there are fewer
 * than k levels). The tree is a heap array (index i's children are 2i+1 / 2i+2). `line` indexes CODE.
 */
export function kthLevelSumSteps(heap: (number | null)[], k: number): KthLevelSumStep[] {
  const steps: KthLevelSumStep[] = [];
  const levelSums: number[] = [];

  const snap = (o: Partial<KthLevelSumData>): KthLevelSumData => ({
    heap,
    k,
    activeLevel: null,
    levelSums: [...levelSums],
    sortedSums: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<KthLevelSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sum each tree level via BFS, then take the ${k}-th largest.`);

  let depth = 0;
  while (2 ** depth - 1 < heap.length) {
    const start = 2 ** depth - 1;
    const end = Math.min(2 ** (depth + 1) - 1, heap.length);
    let sum = 0;
    let any = false;
    for (let i = start; i < end; i++) {
      if (heap[i] !== null) {
        sum += heap[i] as number;
        any = true;
      }
    }
    if (!any) break;
    levelSums.push(sum);
    push(11, `Level ${depth} sum = ${sum}.`, { activeLevel: depth });
    depth++;
  }

  if (levelSums.length < k) {
    push(14, `Only ${levelSums.length} level(s) < k=${k} → return -1.`, { answer: -1 });
    return steps;
  }

  const sortedSums = [...levelSums].sort((a, b) => b - a);
  push(16, `Sorted level sums [${sortedSums.join(", ")}] → ${k}-th largest = ${sortedSums[k - 1]}.`, {
    sortedSums,
    answer: sortedSums[k - 1],
  });
  return steps;
}
