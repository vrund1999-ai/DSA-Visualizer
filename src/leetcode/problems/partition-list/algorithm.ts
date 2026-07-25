import type { Step } from "@/core/types";

export interface PartitionListData {
  values: number[];
  x: number;
  /** original index currently being routed */
  cur: number | null;
  /** ids (indices) routed to the less list, in order */
  less: number[];
  /** ids routed to the more list, in order */
  more: number[];
  done: boolean;
}

export type PartitionListStep = Step<PartitionListData>;

/**
 * Build two lists — nodes with value < x and the rest — appending in the original
 * order (so it's stable), then concatenate less + more. `line` indexes CODE.
 */
export function partitionListSteps(values: number[], x: number): PartitionListStep[] {
  const steps: PartitionListStep[] = [];
  const less: number[] = [];
  const more: number[] = [];

  const snap = (o: Partial<PartitionListData>): PartitionListData => ({ values: [...values], x, cur: null, less: [...less], more: [...more], done: false, ...o });
  const push = (line: number, explanation: string, data: PartitionListData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Split nodes into < ${x} and ≥ ${x}, keeping order.`, snap({}));

  for (let i = 0; i < values.length; i++) {
    if (values[i] < x) {
      less.push(i);
      push(4, `${values[i]} < ${x} → less list.`, snap({ cur: i }));
    } else {
      more.push(i);
      push(5, `${values[i]} ≥ ${x} → more list.`, snap({ cur: i }));
    }
  }

  push(8, `Concatenate: [${[...less, ...more].map((i) => values[i]).join(", ")}].`, snap({ done: true }));
  return steps;
}
