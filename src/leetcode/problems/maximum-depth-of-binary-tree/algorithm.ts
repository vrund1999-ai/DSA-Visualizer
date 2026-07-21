import type { Step } from "@/core/types";

export interface MaxDepthData {
  heap: (number | null)[];
  current: number | null;
  depth: number;
  maxDepth: number;
  done: number[];
}

export type MaxDepthStep = Step<MaxDepthData>;

/**
 * Post-order DFS: a node's depth is 1 plus the deeper of its two subtrees. We
 * recurse to the leaves, then combine results on the way back up. `line` indexes
 * CODE.
 */
export function maxDepthSteps(heap: (number | null)[]): MaxDepthStep[] {
  const steps: MaxDepthStep[] = [];
  const done: number[] = [];
  let maxDepth = 0;

  const snap = (o: Partial<MaxDepthData>): MaxDepthData => ({
    heap: [...heap],
    current: null,
    depth: 0,
    maxDepth,
    done: [...done],
    ...o,
  });
  const push = (line: number, explanation: string, data: MaxDepthData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { maxDepth } });
  };

  const dfs = (i: number, depth: number): number => {
    if (i >= heap.length || heap[i] === null) return 0;
    push(1, `Visit node ${heap[i]} at depth ${depth}.`, snap({ current: i, depth }));
    const left = dfs(2 * i + 1, depth + 1);
    const right = dfs(2 * i + 2, depth + 1);
    const h = 1 + Math.max(left, right);
    maxDepth = Math.max(maxDepth, depth);
    done.push(i);
    push(4, `Subtree rooted at ${heap[i]} has height ${h}.`, snap({ current: i, depth }));
    return h;
  };

  push(0, "Compute the tree's height via depth-first search.", snap({}));
  const answer = dfs(0, 1);
  maxDepth = answer;
  push(4, `Maximum depth is ${answer}.`, snap({ current: null }));
  return steps;
}
