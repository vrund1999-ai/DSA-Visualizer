import type { Step } from "@/core/types";

export interface DuplicateSubtreesData {
  heap: (number | null)[];
  /** heap index whose subtree is being serialized */
  active: number | null;
  /** heap indices that are duplicate-subtree roots (first repeat of each) */
  dupRoots: number[];
  /** serializations found to repeat, for display */
  dupKeys: string[];
  done: boolean;
}

export type DuplicateSubtreesStep = Step<DuplicateSubtreesData>;

/**
 * Find Duplicate Subtrees: serialize every subtree post-order into a canonical string; two subtrees are
 * identical iff their strings match. The second time a string appears, that node's subtree is a duplicate.
 * `line` indexes CODE.
 */
export function duplicateSubtreesSteps(heap: (number | null)[]): DuplicateSubtreesStep[] {
  const steps: DuplicateSubtreesStep[] = [];
  const seen = new Map<string, number>();
  const dupRoots: number[] = [];
  const dupKeys: string[] = [];

  const snap = (o: Partial<DuplicateSubtreesData>): DuplicateSubtreesData => ({
    heap,
    active: null,
    dupRoots: [...dupRoots],
    dupKeys: [...dupKeys],
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DuplicateSubtreesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const serialize = (i: number): string => {
    if (i >= heap.length || heap[i] === null) return "#";
    const key = `${heap[i]},${serialize(2 * i + 1)},${serialize(2 * i + 2)}`;
    const count = (seen.get(key) ?? 0) + 1;
    seen.set(key, count);
    if (count === 2) {
      dupRoots.push(i);
      dupKeys.push(key);
      push(9, `Subtree "${key}" seen a 2nd time → duplicate (root value ${heap[i]}).`, { active: i });
    } else {
      push(8, `Serialized subtree at node ${heap[i]} → "${key}" (count ${count}).`, { active: i });
    }
    return key;
  };

  push(1, `Serialize every subtree; a repeated serialization marks a duplicate.`);
  serialize(0);

  push(13, `Found ${dupRoots.length} duplicate subtree group(s).`, { done: true });
  return steps;
}
