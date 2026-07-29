import type { Step } from "@/core/types";

export interface SubtreeData {
  root: (number | null)[];
  subRoot: (number | null)[];
  /** root index currently tested as a candidate match start */
  candidate: number | null;
  /** root indices confirmed to match subRoot's shape */
  matched: number[];
  answer: boolean | null;
}

export type SubtreeStep = Step<SubtreeData>;

const valid = (heap: (number | null)[], i: number) => i < heap.length && heap[i] !== null;

/**
 * A subtree match means some node of the big tree roots a copy identical in shape and values to
 * subRoot. We visit each candidate node and run a structural equality check from there; the first
 * exact match confirms the subtree. `line` indexes CODE.
 */
export function subtreeSteps(root: (number | null)[], subRoot: (number | null)[]): SubtreeStep[] {
  const steps: SubtreeStep[] = [];

  const snap = (o: Partial<SubtreeData>): SubtreeData => ({ root, subRoot, candidate: null, matched: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SubtreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  // structural equality of root-subtree at ri vs subRoot at si; collects matched root indices
  const same = (ri: number, si: number, acc: number[]): boolean => {
    const rNull = !valid(root, ri);
    const sNull = !valid(subRoot, si);
    if (rNull && sNull) return true;
    if (rNull || sNull || root[ri] !== subRoot[si]) return false;
    acc.push(ri);
    return same(2 * ri + 1, 2 * si + 1, acc) && same(2 * ri + 2, 2 * si + 2, acc);
  };

  push(0, "Try each node as the start of a match; check structural equality with subRoot.");

  for (let i = 0; i < root.length; i++) {
    if (!valid(root, i)) continue;
    const acc: number[] = [];
    const ok = same(i, 0, acc);
    if (ok) {
      push(2, `Node ${root[i]} roots an exact copy of subRoot → true.`, { candidate: i, matched: acc, answer: true });
      return steps;
    }
    push(2, `Node ${root[i]}: subtree here does not equal subRoot.`, { candidate: i });
  }

  push(1, "No node matches subRoot → false.", { answer: false });
  return steps;
}
