import type { Step } from "@/core/types";

export interface ThreePartsData {
  arr: number[];
  target: number | null;
  i: number | null;
  acc: number;
  parts: number;
  /** indices where a part boundary was placed (last index of each completed part) */
  boundaries: number[];
  answer: boolean | null;
}

export type ThreePartsStep = Step<ThreePartsData>;

/**
 * Each part must sum to total/3, so sweep left to right accumulating a running sum and cut a boundary
 * every time it hits the target (then reset). Three completed parts with elements to spare means success.
 * `line` indexes CODE.
 */
export function threePartsSteps(arr: number[]): ThreePartsStep[] {
  const steps: ThreePartsStep[] = [];
  const total = arr.reduce((a, b) => a + b, 0);
  const boundaries: number[] = [];

  const snap = (o: Partial<ThreePartsData>): ThreePartsData => ({ arr, target: null, i: null, acc: 0, parts: 0, boundaries: [...boundaries], answer: null, ...o });

  if (total % 3 !== 0) {
    steps.push({ id: 0, line: 2, explanation: `Total ${total} not divisible by 3 → false.`, data: snap({ answer: false }), highlights: [] });
    return steps;
  }

  const target = total / 3;
  let acc = 0;
  let parts = 0;

  const push = (line: number, explanation: string, o: Partial<ThreePartsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap({ target, acc, parts, ...o }), highlights: [] });
  };

  push(3, `Each part must sum to total/3 = ${target}.`);

  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
    if (acc === target) {
      parts++;
      boundaries.push(i);
      if (parts === 3 && i < arr.length - 1) {
        push(11, `Third part complete at index ${i}, elements remain → true.`, { i, answer: true });
        return steps;
      }
      push(8, `Running sum hit ${target} at index ${i}: part ${parts} complete, reset.`, { i });
      acc = 0;
    } else {
      push(6, `Add arr[${i}]=${arr[i]} → running sum ${acc}.`, { i });
    }
  }

  const answer = parts >= 3;
  push(14, answer ? "Formed at least 3 equal parts → true." : `Only ${parts} equal part(s) → false.`, { answer });
  return steps;
}
