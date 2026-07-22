import type { Step } from "@/core/types";

export interface DiameterData {
  heap: (number | null)[];
  current: number | null;
  done: number[];
  best: number;
  throughNode: number | null;
}

export type DiameterStep = Step<DiameterData>;

const has = (heap: (number | null)[], i: number) => i < heap.length && heap[i] !== null;

/**
 * Post-order DFS returning each node's height. The longest path through a node is
 * leftHeight + rightHeight; the diameter is the largest such value across all
 * nodes. `line` indexes CODE.
 */
export function diameterSteps(heap: (number | null)[]): DiameterStep[] {
  const steps: DiameterStep[] = [];
  const done: number[] = [];
  let best = 0;
  let throughNode: number | null = null;

  const snap = (line: number, explanation: string, current: number | null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { heap: [...heap], current, done: [...done], best, throughNode },
      highlights: [],
      metrics: { best },
    });
  };

  const depth = (i: number): number => {
    if (!has(heap, i)) return 0;
    snap(3, `Descend into ${heap[i]}.`, i);
    const l = depth(2 * i + 1);
    const r = depth(2 * i + 2);
    if (l + r > best) {
      best = l + r;
      throughNode = i;
      snap(6, `Path through ${heap[i]} spans ${l} + ${r} = ${l + r} edges — new diameter.`, i);
    } else {
      snap(6, `Path through ${heap[i]} spans ${l + r} edges (best stays ${best}).`, i);
    }
    done.push(i);
    return 1 + Math.max(l, r);
  };

  snap(1, "Diameter = longest edge path; check every node as a turning point.", null);
  depth(0);
  snap(10, `The diameter is ${best} edges.`, throughNode);
  return steps;
}
