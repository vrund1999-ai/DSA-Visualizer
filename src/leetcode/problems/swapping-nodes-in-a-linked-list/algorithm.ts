import type { Step } from "@/core/types";

export interface SwapNodesData {
  values: number[];
  k: number;
  fast: number | null;
  slow: number | null;
  first: number | null;
  second: number | null;
  answer: number[] | null;
}

export type SwapNodesStep = Step<SwapNodesData>;

/**
 * The kth node from the end is found without knowing the length: advance a fast pointer k steps to mark
 * the kth from the start, then move fast and a second pointer together until fast hits the tail — the
 * trailing pointer now sits on the kth from the end. Swap the two values. `line` indexes CODE.
 */
export function swapNodesSteps(input: number[], k: number): SwapNodesStep[] {
  const steps: SwapNodesStep[] = [];
  const values = [...input];
  const n = values.length;

  const snap = (o: Partial<SwapNodesData>): SwapNodesData => ({ values: [...values], k, fast: null, slow: null, first: null, second: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SwapNodesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let fast = 0;
  push(1, `Advance a fast pointer ${k - 1} step(s) to reach the ${k}th node from the start.`, { fast });
  for (let i = 1; i < k; i++) {
    fast++;
    push(2, `fast → index ${fast}.`, { fast });
  }
  const first = fast;
  push(3, `First node (kth from start) is index ${first} (value ${values[first]}).`, { fast, first });

  let slow = 0;
  push(4, "Now move fast and slow together until fast reaches the tail.", { fast, slow, first });
  while (fast < n - 1) {
    fast++;
    slow++;
    push(7, `fast → ${fast}, slow → ${slow}.`, { fast, slow, first });
  }
  const second = slow;
  push(9, `Second node (kth from end) is index ${second} (value ${values[second]}).`, { fast, slow, first, second });

  [values[first], values[second]] = [values[second], values[first]];
  push(11, `Swap values ${values[second]} ↔ ${values[first]}.`, { first, second, answer: [...values] });
  return steps;
}
