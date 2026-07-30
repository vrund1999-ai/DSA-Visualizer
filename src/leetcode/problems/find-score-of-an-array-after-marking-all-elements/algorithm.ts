import type { Step } from "@/core/types";

export interface ScoreMarkData {
  nums: number[];
  marked: boolean[];
  active: number | null;
  justMarked: number[];
  score: number;
  answer: number | null;
}

export type ScoreMarkStep = Step<ScoreMarkData>;

/**
 * Repeatedly take the smallest unmarked value (ties broken by index), add it to the score, and mark it plus
 * its immediate neighbours. Processing values in sorted order does this in one pass. `line` indexes CODE.
 */
export function scoreMarkSteps(nums: number[]): ScoreMarkStep[] {
  const steps: ScoreMarkStep[] = [];
  const order = nums.map((v, i) => [v, i] as [number, number]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const marked = new Array(nums.length).fill(false);
  let score = 0;

  const snap = (o: Partial<ScoreMarkData>): ScoreMarkData => ({
    nums,
    marked: [...marked],
    active: null,
    justMarked: [],
    score,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ScoreMarkData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `Take the smallest unmarked value each time; mark it and its neighbours.`);

  for (const [v, i] of order) {
    if (marked[i]) continue;
    score += v;
    const justMarked: number[] = [i];
    marked[i] = true;
    if (i > 0 && !marked[i - 1]) {
      marked[i - 1] = true;
      justMarked.push(i - 1);
    } else if (i > 0) marked[i - 1] = true;
    if (i + 1 < nums.length && !marked[i + 1]) {
      marked[i + 1] = true;
      justMarked.push(i + 1);
    } else if (i + 1 < nums.length) marked[i + 1] = true;
    push(8, `Pick nums[${i}] = ${v} (smallest unmarked); score ${score}. Mark it and neighbours.`, { active: i, justMarked });
  }

  push(12, `Total score = ${score}.`, { answer: score });
  return steps;
}
