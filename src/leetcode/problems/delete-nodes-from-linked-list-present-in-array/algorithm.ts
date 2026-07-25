import type { Step } from "@/core/types";

export interface DeleteNodesData {
  nums: number[];
  /** current list values (after deletions so far) */
  list: number[];
  /** value being examined (the node after prev) */
  examining: number | null;
  action: "remove" | "keep" | null;
  /** index in the ORIGINAL list, for stable highlighting */
  removedValues: number[];
  answer: number[] | null;
}

export type DeleteNodesStep = Step<DeleteNodesData>;

/**
 * A hash set of the array values turns each membership test into O(1). Walking the list with a
 * previous pointer, we unlink any node whose value is in the set (bypassing it) and advance past the
 * ones we keep. `line` indexes CODE.
 */
export function deleteNodesSteps(nums: number[], head: number[]): DeleteNodesStep[] {
  const steps: DeleteNodesStep[] = [];
  const remove = new Set(nums);
  const list = [...head];
  const removedValues: number[] = [];

  const snap = (o: Partial<DeleteNodesData>): DeleteNodesData => ({ nums, list: [...list], examining: null, action: null, removedValues: [...removedValues], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DeleteNodesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Delete nodes whose value is in {${nums.join(", ")}}.`);

  let i = 0;
  while (i < list.length) {
    const v = list[i];
    if (remove.has(v)) {
      removedValues.push(v);
      push(6, `${v} is in the set → unlink it.`, { examining: v, action: "remove" });
      list.splice(i, 1);
    } else {
      push(8, `${v} not in the set → keep it.`, { examining: v, action: "keep" });
      i++;
    }
  }

  push(10, `Result: ${list.join(" → ") || "empty"}.`, { answer: [...list] });
  return steps;
}
