import type { Step } from "@/core/types";

export interface ReverseBetweenData {
  /** current order of node ids */
  order: number[];
  /** value per node id */
  values: Record<number, number>;
  left: number;
  right: number;
  /** node ids inside the reversal window (1-indexed positions left..right) */
  windowIds: number[];
  /** id just moved to the front of the window */
  moved: number | null;
  done: boolean;
}

export type ReverseBetweenStep = Step<ReverseBetweenData>;

/**
 * Reverse only positions left..right using the "head-insertion" technique: repeatedly
 * unlink the node after `cur` and splice it in right after `prev`, which walks the
 * sublist backwards in place. `line` indexes CODE.
 */
export function reverseBetweenSteps(vals: number[], left: number, right: number): ReverseBetweenStep[] {
  const steps: ReverseBetweenStep[] = [];
  const order = vals.map((_, i) => i);
  const values: Record<number, number> = {};
  vals.forEach((v, i) => (values[i] = v));

  const windowIdsAt = () => order.slice(left - 1, right);
  const snap = (o: Partial<ReverseBetweenData>): ReverseBetweenData => ({ order: [...order], values: { ...values }, left, right, windowIds: windowIdsAt(), moved: null, done: false, ...o });
  const push = (line: number, explanation: string, data: ReverseBetweenData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(4, `Reverse positions ${left}..${right} by head-insertion.`, snap({}));

  // simulate head-insertion within the window [left-1, right-1] of `order`
  const base = left - 1; // index of prev.next start
  for (let i = 0; i < right - left; i++) {
    // move the element at position (base + i + 1) to position base
    const from = base + i + 1;
    const [movedId] = order.splice(from, 1);
    order.splice(base, 0, movedId);
    push(9, `Move ${values[movedId]} to the front of the window.`, snap({ moved: movedId }));
  }

  push(11, `Reversed segment → [${order.map((id) => values[id]).join(", ")}].`, snap({ done: true }));
  return steps;
}
