import type { Step } from "@/core/types";

export interface MergeListsData {
  l1: number[];
  l2: number[];
  i: number;
  j: number;
  merged: number[];
  /** Which list the last-taken node came from. */
  took: "l1" | "l2" | null;
}

export type MergeListsStep = Step<MergeListsData>;

/**
 * Walk both sorted lists with a pointer each, always splicing the smaller head
 * onto the result; when one list runs out, append the rest of the other. `line`
 * indexes CODE.
 */
export function mergeListsSteps(l1: number[], l2: number[]): MergeListsStep[] {
  const steps: MergeListsStep[] = [];
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  const snap = (o: Partial<MergeListsData>): MergeListsData => ({
    l1: [...l1],
    l2: [...l2],
    i,
    j,
    merged: [...merged],
    took: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: MergeListsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { merged: data.merged.length } });
  };

  push(2, "Compare the two list heads and take the smaller each time.", snap({}));

  while (i < l1.length && j < l2.length) {
    if (l1[i] <= l2[j]) {
      merged.push(l1[i]);
      push(5, `${l1[i]} ≤ ${l2[j]} — take ${l1[i]} from list 1.`, snap({ took: "l1" }));
      i++;
    } else {
      merged.push(l2[j]);
      push(7, `${l2[j]} < ${l1[i]} — take ${l2[j]} from list 2.`, snap({ took: "l2" }));
      j++;
    }
  }

  while (i < l1.length) {
    merged.push(l1[i]);
    push(11, `List 2 is empty — append remaining ${l1[i]} from list 1.`, snap({ took: "l1" }));
    i++;
  }
  while (j < l2.length) {
    merged.push(l2[j]);
    push(11, `List 1 is empty — append remaining ${l2[j]} from list 2.`, snap({ took: "l2" }));
    j++;
  }

  push(12, `Merged into one sorted list of ${merged.length} nodes.`, snap({}));
  return steps;
}
