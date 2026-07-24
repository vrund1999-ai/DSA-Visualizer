import type { Step } from "@/core/types";

export interface ReverseKData {
  values: number[];
  k: number;
  /** current arrangement of values (front to back) */
  order: number[];
  /** indices (into `order`) of the group being reversed */
  group: number[];
  /** indices already finalized */
  done: number[];
}

export type ReverseKStep = Step<ReverseKData>;

/**
 * Reverse the list in consecutive groups of k; a final group smaller than k is left
 * as-is. This iterative visualization reverses each full group left to right and
 * marks it done. `line` indexes CODE.
 */
export function reverseKSteps(values: number[], k: number): ReverseKStep[] {
  const steps: ReverseKStep[] = [];
  const order = [...values];
  const done: number[] = [];

  const snap = (o: Partial<ReverseKData>): ReverseKData => ({ values: [...values], k, order: [...order], group: [], done: [...done], ...o });
  const push = (line: number, explanation: string, data: ReverseKData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Reverse the list in groups of ${k}.`, snap({}));

  let start = 0;
  while (start + k <= order.length) {
    const groupIdx = Array.from({ length: k }, (_, i) => start + i);
    push(6, `Reverse group [${order.slice(start, start + k).join(", ")}].`, snap({ group: groupIdx }));
    // reverse the segment in place
    let l = start;
    let r = start + k - 1;
    while (l < r) {
      [order[l], order[r]] = [order[r], order[l]];
      l++;
      r--;
    }
    for (let i = start; i < start + k; i++) done.push(i);
    push(12, `Group reversed → [${order.slice(start, start + k).join(", ")}].`, snap({ done: [...done] }));
    start += k;
  }

  if (start < order.length) {
    push(3, `Remaining ${order.length - start} node(s) < ${k} — left unchanged.`, snap({ group: Array.from({ length: order.length - start }, (_, i) => start + i) }));
  }

  push(12, `Final list: [${order.join(", ")}].`, snap({ done: order.map((_, i) => i) }));
  return steps;
}
