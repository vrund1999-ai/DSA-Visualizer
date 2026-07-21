import type { Step } from "@/core/types";

export interface BSTData {
  heap: (number | null)[];
  current: number | null;
  low: string;
  high: string;
  validated: number[];
  invalid: number | null;
  result: boolean | null;
}

export type BSTStep = Step<BSTData>;

const fmt = (x: number) => (x === -Infinity ? "−∞" : x === Infinity ? "∞" : String(x));

/**
 * Validate by carrying an open interval (low, high) down the tree: every node
 * must fall strictly inside its bounds, and recursing narrows the bound the
 * child inherits (left child high = node, right child low = node). `line`
 * indexes CODE.
 */
export function bstSteps(heap: (number | null)[]): BSTStep[] {
  const steps: BSTStep[] = [];
  const validated: number[] = [];

  const snap = (o: Partial<BSTData>): BSTData => ({
    heap: [...heap],
    current: null,
    low: "−∞",
    high: "∞",
    validated: [...validated],
    invalid: null,
    result: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: BSTData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  let failed = false;

  const dfs = (i: number, low: number, high: number): boolean => {
    if (i >= heap.length || heap[i] === null) return true;
    const val = heap[i] as number;
    push(3, `Check node ${val}: must satisfy ${fmt(low)} < ${val} < ${fmt(high)}.`, snap({ current: i, low: fmt(low), high: fmt(high) }));
    if (val <= low || val >= high) {
      failed = true;
      push(3, `${val} violates the bound (${fmt(low)}, ${fmt(high)}) — not a BST.`, snap({ current: i, low: fmt(low), high: fmt(high), invalid: i, result: false }));
      return false;
    }
    if (!dfs(2 * i + 1, low, val)) return false;
    if (!dfs(2 * i + 2, val, high)) return false;
    validated.push(i);
    push(5, `Subtree at ${val} is a valid BST.`, snap({ current: i, low: fmt(low), high: fmt(high) }));
    return true;
  };

  push(7, "Validate from the root with bounds (−∞, ∞).", snap({}));
  const ok = dfs(0, -Infinity, Infinity);
  if (!failed) {
    push(7, ok ? "Every node respects its bounds — valid BST." : "Not a valid BST.", snap({ result: ok }));
  }
  return steps;
}
