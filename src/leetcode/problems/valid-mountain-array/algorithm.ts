import type { Step } from "@/core/types";

export interface MountainData {
  arr: number[];
  i: number | null;
  phase: "up" | "down" | "done";
  peak: number | null;
  answer: boolean | null;
}

export type MountainStep = Step<MountainData>;

/**
 * A mountain strictly rises to a single interior peak then strictly falls. Walk up while each element
 * exceeds the previous; if the climb stalls at an end there is no peak. Then walk down; a valid mountain
 * ends exactly at the last index. `line` indexes CODE.
 */
export function mountainSteps(arr: number[]): MountainStep[] {
  const steps: MountainStep[] = [];
  const n = arr.length;

  const snap = (o: Partial<MountainData>): MountainData => ({ arr, i: null, phase: "up", peak: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MountainData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let i = 0;
  push(3, "Climb while strictly increasing.", { i, phase: "up" });
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
    push(3, `arr[${i}]=${arr[i]} > previous — keep climbing.`, { i, phase: "up" });
  }

  if (i === 0 || i === n - 1) {
    push(4, i === 0 ? "No initial climb — not a mountain." : "Climb never turns down — not a mountain.", { i, phase: "done", peak: i, answer: false });
    return steps;
  }

  const peak = i;
  push(4, `Peak at index ${peak} (value ${arr[peak]}).`, { i, phase: "down", peak });
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
    push(5, `arr[${i}]=${arr[i]} < previous — descending.`, { i, phase: "down", peak });
  }

  const answer = i === n - 1;
  push(6, answer ? "Reached the end after a clean descent — valid mountain." : `Descent broke at index ${i} — not a mountain.`, { i, phase: "done", peak, answer });
  return steps;
}
