import type { Step } from "@/core/types";

export interface BalancedData {
  heap: (number | null)[];
  current: number | null;
  done: number[];
  badNode: number | null;
  result: boolean | null;
}

export type BalancedStep = Step<BalancedData>;

const has = (heap: (number | null)[], i: number) => i < heap.length && heap[i] !== null;

/**
 * Post-order DFS returns each subtree's height, or -1 as soon as any subtree is
 * unbalanced (its two child heights differ by more than 1). The -1 propagates up,
 * short-circuiting the check. `line` indexes CODE.
 */
export function balancedSteps(heap: (number | null)[]): BalancedStep[] {
  const steps: BalancedStep[] = [];
  const done: number[] = [];
  let badNode: number | null = null;

  const snap = (line: number, explanation: string, current: number | null, result: boolean | null = null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { heap: [...heap], current, done: [...done], badNode, result },
      highlights: [],
    });
  };

  const height = (i: number): number => {
    if (!has(heap, i)) return 0;
    snap(2, `Descend into ${heap[i]}.`, i);
    const l = height(2 * i + 1);
    const r = height(2 * i + 2);
    if (l < 0 || r < 0 || Math.abs(l - r) > 1) {
      if (badNode === null && l >= 0 && r >= 0) badNode = i;
      snap(6, `Node ${heap[i]}: left height ${Math.max(l, 0)}, right ${Math.max(r, 0)} — unbalanced.`, i);
      return -1;
    }
    done.push(i);
    snap(7, `Node ${heap[i]} balanced (heights ${l}, ${r}); height ${1 + Math.max(l, r)}.`, i);
    return 1 + Math.max(l, r);
  };

  snap(0, "Check balance bottom-up; a subtree returns -1 the moment it's unbalanced.", null);
  const ok = height(0) !== -1;
  snap(9, ok ? "Every node stays within a height difference of 1 — balanced." : "A node's subtrees differ in height by more than 1 — not balanced.", badNode, ok);
  return steps;
}
