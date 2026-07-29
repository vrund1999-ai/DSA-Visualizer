import type { Step } from "@/core/types";

export interface MaxScoreData {
  cardPoints: number[];
  k: number;
  win: number;
  total: number;
  /** window [start, start+win-1] currently considered */
  start: number | null;
  windowSum: number;
  minWindow: number;
  /** the start index of the best (min) window so far */
  bestStart: number;
  answer: number | null;
}

export type MaxScoreStep = Step<MaxScoreData>;

/**
 * Taking k cards from the two ends leaves a contiguous window of n−k untaken cards in the middle. To
 * maximize what we take, we minimize that middle window's sum — a fixed-size sliding window — and
 * subtract it from the total. `line` indexes CODE.
 */
export function maxScoreSteps(cardPoints: number[], k: number): MaxScoreStep[] {
  const steps: MaxScoreStep[] = [];
  const n = cardPoints.length;
  const total = cardPoints.reduce((a, b) => a + b, 0);
  const win = n - k;

  const snap = (o: Partial<MaxScoreData>): MaxScoreData => ({ cardPoints, k, win, total, start: null, windowSum: 0, minWindow: 0, bestStart: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxScoreData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (win === 0) {
    push(10, `k = n → take every card. Score = ${total}.`, { answer: total });
    return steps;
  }

  let windowSum = cardPoints.slice(0, win).reduce((a, b) => a + b, 0);
  let minWindow = windowSum;
  let bestStart = 0;
  push(5, `Leave a window of ${win} cards; first window sum = ${windowSum}.`, { start: 0, windowSum, minWindow, bestStart });

  for (let i = win; i < n; i++) {
    windowSum += cardPoints[i] - cardPoints[i - win];
    if (windowSum < minWindow) { minWindow = windowSum; bestStart = i - win + 1; }
    push(8, `Slide to [${i - win + 1}..${i}]: sum ${windowSum}; min window ${minWindow}.`, { start: i - win + 1, windowSum, minWindow, bestStart });
  }

  const answer = total - minWindow;
  push(10, `Score = total ${total} − min window ${minWindow} = ${answer}.`, { minWindow, bestStart, answer });
  return steps;
}
