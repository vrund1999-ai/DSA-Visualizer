import type { Step } from "@/core/types";

export interface SymmetricData {
  heap: (number | null)[];
  a: number | null;
  b: number | null;
  matched: number[];
  mismatch: number[];
  result: boolean | null;
}

export type SymmetricStep = Step<SymmetricData>;

const val = (heap: (number | null)[], i: number): number | null =>
  i < heap.length ? heap[i] : null;

/**
 * A tree is symmetric if its left and right subtrees mirror each other: compare
 * the outer pair (a.left vs b.right) and inner pair (a.right vs b.left) at each
 * step. `line` indexes CODE.
 */
export function symmetricSteps(heap: (number | null)[]): SymmetricStep[] {
  const steps: SymmetricStep[] = [];
  const matched: number[] = [];
  const mismatch: number[] = [];
  let failed = false;

  const snap = (o: Partial<SymmetricData>): SymmetricData => ({
    heap: [...heap],
    a: null,
    b: null,
    matched: [...matched],
    mismatch: [...mismatch],
    result: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: SymmetricData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const mirror = (ai: number, bi: number): boolean => {
    const av = val(heap, ai);
    const bv = val(heap, bi);
    if (av === null && bv === null) return true;
    if (av === null || bv === null || av !== bv) {
      failed = true;
      if (av !== null) mismatch.push(ai);
      if (bv !== null) mismatch.push(bi);
      push(3, `Mismatch: ${av ?? "∅"} vs ${bv ?? "∅"} — not symmetric.`, snap({ a: av !== null ? ai : null, b: bv !== null ? bi : null, result: false }));
      return false;
    }
    push(3, `Compare ${av} and ${bv} — they match, recurse on mirrored children.`, snap({ a: ai, b: bi }));
    matched.push(ai, bi);
    // a.left vs b.right, then a.right vs b.left.
    if (!mirror(2 * ai + 1, 2 * bi + 2)) return false;
    if (!mirror(2 * ai + 2, 2 * bi + 1)) return false;
    return true;
  };

  if (heap.length === 0 || heap[0] === null) {
    push(7, "Empty tree is symmetric.", snap({ result: true }));
    return steps;
  }

  push(7, "Compare the left and right subtrees as mirror images.", snap({ a: 1, b: 2 }));
  const ok = mirror(1, 2);
  if (!failed) push(7, ok ? "Every mirrored pair matched — the tree is symmetric." : "Not symmetric.", snap({ result: ok }));
  return steps;
}
