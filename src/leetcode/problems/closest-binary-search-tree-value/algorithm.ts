import type { Step } from "@/core/types";

export interface ClosestBstData {
  heap: (number | null)[];
  target: number;
  active: number | null;
  visited: number[];
  /** value of the current closest */
  closest: number;
  answer: number | null;
}

export type ClosestBstStep = Step<ClosestBstData>;

/**
 * Closest BST Value: walk down the tree (left when the target is smaller, right when larger), keeping the
 * closest value seen; on a tie prefer the smaller value. The BST ordering means only one root-to-leaf path
 * needs visiting. `line` indexes CODE.
 */
export function closestBstSteps(heap: (number | null)[], target: number): ClosestBstStep[] {
  const steps: ClosestBstStep[] = [];
  const visited: number[] = [];
  const present = (i: number) => i < heap.length && heap[i] !== null;
  let closest = heap[0] as number;

  const snap = (o: Partial<ClosestBstData>): ClosestBstData => ({
    heap,
    target,
    active: null,
    visited: [...visited],
    closest,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ClosestBstData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Find the value closest to ${target} by walking the BST.`);

  let i = 0;
  while (present(i)) {
    visited.push(i);
    const v = heap[i] as number;
    if (Math.abs(v - target) < Math.abs(closest - target) || (Math.abs(v - target) === Math.abs(closest - target) && v < closest)) {
      closest = v;
      push(8, `${v} is closer to ${target} → closest = ${v}.`, { active: i });
    } else {
      push(4, `${v} is not closer than ${closest}.`, { active: i });
    }
    i = target < v ? 2 * i + 1 : 2 * i + 2;
  }

  push(11, `Closest value = ${closest}.`, { answer: closest });
  return steps;
}
