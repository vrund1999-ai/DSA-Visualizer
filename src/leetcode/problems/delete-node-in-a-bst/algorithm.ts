import type { Step } from "@/core/types";

export interface DeleteBSTData {
  heap: (number | null)[];
  key: number;
  /** node index currently visited on the search path */
  current: number | null;
  /** index of the node identified for deletion */
  target: number | null;
  /** index of the in-order successor, if used */
  successor: number | null;
  phase: "search" | "delete" | "successor" | "done";
}

export type DeleteBSTStep = Step<DeleteBSTData>;

/**
 * BST delete: walk left/right by comparing key to each node. When found, a node with
 * one child is spliced out; a node with two children copies its in-order successor
 * (leftmost of the right subtree) and deletes that successor instead. This walk shows
 * the search and successor phases. `line` indexes CODE.
 */
export function deleteBSTSteps(heap: (number | null)[], key: number): DeleteBSTStep[] {
  const steps: DeleteBSTStep[] = [];
  const exists = (i: number) => i < heap.length && heap[i] !== null;

  const snap = (o: Partial<DeleteBSTData>): DeleteBSTData => ({ heap: [...heap], key, current: null, target: null, successor: null, phase: "search", ...o });
  const push = (line: number, explanation: string, data: DeleteBSTData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(0, `Delete key ${key} from the BST.`, snap({}));

  let i = 0;
  while (exists(i)) {
    const val = heap[i] as number;
    if (key < val) {
      push(3, `${key} < ${val} — go left.`, snap({ current: i }));
      i = 2 * i + 1;
    } else if (key > val) {
      push(5, `${key} > ${val} — go right.`, snap({ current: i }));
      i = 2 * i + 2;
    } else {
      // found
      const hasLeft = exists(2 * i + 1);
      const hasRight = exists(2 * i + 2);
      let succ: number | null = null;
      if (!hasLeft || !hasRight) {
        push(7, `Found ${val}; ${!hasLeft && !hasRight ? "leaf" : "one child"} — splice it out.`, snap({ current: i, target: i, phase: "delete" }));
      } else {
        // in-order successor: leftmost of right subtree
        succ = 2 * i + 2;
        while (exists(2 * succ + 1)) succ = 2 * succ + 1;
        push(11, `Found ${val}; copy in-order successor ${heap[succ]} then delete it.`, snap({ current: i, target: i, successor: succ, phase: "successor" }));
      }
      push(14, "Deletion complete.", snap({ target: i, successor: succ, phase: "done" }));
      return steps;
    }
  }

  push(14, `${key} not present — tree unchanged.`, snap({ phase: "done" }));
  return steps;
}
