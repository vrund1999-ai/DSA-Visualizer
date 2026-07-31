import type { Step } from "@/core/types";

export interface DistanceValueData {
  arr1: number[];
  arr2: number[];
  d: number;
  scan: number | null;
  /** arr2 index that is within d of the current arr1 value, if any */
  conflict: number | null;
  count: number;
  answer: number | null;
}

export type DistanceValueStep = Step<DistanceValueData>;

/**
 * Find the Distance Value: count the elements of arr1 for which no element of arr2 lies within distance d
 * (|a − b| ≤ d). `line` indexes CODE.
 */
export function distanceValueSteps(arr1: number[], arr2: number[], d: number): DistanceValueStep[] {
  const steps: DistanceValueStep[] = [];
  let count = 0;

  const snap = (o: Partial<DistanceValueData>): DistanceValueData => ({
    arr1,
    arr2,
    d,
    scan: null,
    conflict: null,
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DistanceValueData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Count arr1 values with no arr2 value within distance ${d}.`);

  for (let i = 0; i < arr1.length; i++) {
    const a = arr1[i];
    const conflict = arr2.findIndex((b) => Math.abs(a - b) <= d);
    if (conflict === -1) {
      count++;
      push(5, `${a}: nothing in arr2 within ${d} → valid (count ${count}).`, { scan: i });
    } else {
      push(4, `${a}: |${a} − ${arr2[conflict]}| ≤ ${d} → not valid.`, { scan: i, conflict });
    }
  }

  push(7, `Distance value = ${count}.`, { answer: count });
  return steps;
}
