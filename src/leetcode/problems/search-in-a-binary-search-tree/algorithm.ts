import type { Step } from "@/core/types";

export interface SearchBstData {
  heap: (number | null)[];
  val: number;
  /** heap index currently examined */
  active: number | null;
  /** heap indices visited on the walk */
  visited: number[];
  found: number | null;
  done: boolean;
}

export type SearchBstStep = Step<SearchBstData>;

/**
 * Search in a BST: walk down from the root, going left when the target is smaller and right when larger,
 * until it matches or a null child is reached. `line` indexes CODE.
 */
export function searchBstSteps(heap: (number | null)[], val: number): SearchBstStep[] {
  const steps: SearchBstStep[] = [];
  const visited: number[] = [];
  const present = (i: number) => i < heap.length && heap[i] !== null;

  const snap = (o: Partial<SearchBstData>): SearchBstData => ({
    heap,
    val,
    active: null,
    visited: [...visited],
    found: null,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<SearchBstData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Search for ${val} by comparing at each node.`);

  let i = 0;
  while (present(i)) {
    visited.push(i);
    const v = heap[i] as number;
    if (v === val) {
      push(2, `${v} === ${val} → found.`, { active: i, found: i, done: true });
      return steps;
    }
    if (val < v) {
      push(4, `${val} < ${v} → go left.`, { active: i });
      i = 2 * i + 1;
    } else {
      push(5, `${val} > ${v} → go right.`, { active: i });
      i = 2 * i + 2;
    }
  }

  push(7, `Reached a null child → ${val} is not in the tree.`, { done: true });
  return steps;
}
