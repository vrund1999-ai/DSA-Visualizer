import type { Step } from "@/core/types";

export interface ZigzagPathData {
  label: number;
  /** current label being processed */
  current: number;
  level: number;
  /** [lo, hi] label range of the current level */
  range: [number, number] | null;
  /** path built so far (root to target) */
  path: number[];
  answer: number[] | null;
}

export type ZigzagPathStep = Step<ZigzagPathData>;

/**
 * In a zig-zag labelled complete tree, level L holds labels 2^L..2^(L+1)−1, but odd
 * levels are numbered right-to-left. To climb from a node, mirror its label within its
 * level (lo+hi−label) then halve to reach the parent. Walking up to the root yields the
 * path. `line` indexes CODE.
 */
export function zigzagPathSteps(label: number): ZigzagPathStep[] {
  const steps: ZigzagPathStep[] = [];
  const path: number[] = [];
  let level = Math.floor(Math.log2(label));
  let cur = label;

  const snap = (o: Partial<ZigzagPathData>): ZigzagPathData => ({ label, current: cur, level, range: null, path: [...path], answer: null, ...o });
  const push = (line: number, explanation: string, data: ZigzagPathData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Climb from label ${label} (level ${level}) up to the root.`, snap({}));

  while (cur >= 1) {
    path.unshift(cur);
    const lo = 2 ** level;
    const hi = 2 ** (level + 1) - 1;
    push(4, `At ${cur} (level ${level}, labels ${lo}..${hi}).`, snap({ range: [lo, hi] }));
    if (level === 0) break;
    cur = Math.floor((lo + hi - cur) / 2);
    level--;
  }

  push(10, `Path from root: [${path.join(", ")}].`, snap({ answer: [...path] }));
  return steps;
}
