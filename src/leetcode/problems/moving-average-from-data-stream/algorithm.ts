import type { Step } from "@/core/types";

export interface MovingAvgData {
  size: number;
  values: number[];
  opIndex: number | null;
  window: number[];
  /** value evicted this step, if any */
  evicted: number | null;
  sum: number;
  average: number | null;
  answers: (number | null)[];
}

export type MovingAvgStep = Step<MovingAvgData>;

/**
 * Moving Average from Data Stream: a fixed-size queue holds the most recent values; each next() adds the new
 * value, evicts the oldest once the window is full, and returns sum / window length. `line` indexes CODE.
 */
export function movingAvgSteps(size: number, values: number[]): MovingAvgStep[] {
  const steps: MovingAvgStep[] = [];
  const window: number[] = [];
  let sum = 0;
  const answers: (number | null)[] = values.map(() => null);

  const snap = (o: Partial<MovingAvgData>): MovingAvgData => ({
    size,
    values,
    opIndex: null,
    window: [...window],
    evicted: null,
    sum,
    average: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MovingAvgData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Window size ${size}; each next() averages the most recent values.`);

  for (let k = 0; k < values.length; k++) {
    const val = values[k];
    window.push(val);
    sum += val;
    let evicted: number | null = null;
    if (window.length > size) {
      evicted = window.shift()!;
      sum -= evicted;
    }
    const average = sum / window.length;
    answers[k] = average;
    push(11, `next(${val})${evicted !== null ? `, evict ${evicted}` : ""} → sum ${sum} / ${window.length} = ${average.toFixed(3)}.`, {
      opIndex: k,
      evicted,
      average,
    });
  }

  return steps;
}
