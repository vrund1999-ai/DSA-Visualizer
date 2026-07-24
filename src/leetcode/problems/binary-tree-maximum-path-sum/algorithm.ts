import type { Step } from "@/core/types";

export interface MaxPathData {
  heap: (number | null)[];
  /** node currently being processed */
  current: number | null;
  /** downward gain computed per heap index */
  gains: Record<number, number>;
  /** running global best */
  best: number;
  /** true on the step where best improved */
  improved: boolean;
  answer: number | null;
}

export type MaxPathStep = Step<MaxPathData>;

/**
 * Post-order DFS. Each node returns the best downward gain of a single branch
 * (max(0, child) so negatives are dropped). The global best considers the "arch"
 * path node + leftGain + rightGain that peaks at this node. `line` indexes CODE.
 */
export function maxPathSteps(heap: (number | null)[]): MaxPathStep[] {
  const steps: MaxPathStep[] = [];
  const gains: Record<number, number> = {};
  let best = -Infinity;

  const snap = (o: Partial<MaxPathData>): MaxPathData => ({ heap: [...heap], current: null, gains: { ...gains }, best, improved: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: MaxPathData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "DFS returns each node's best single-branch downward gain.", snap({}));

  const gain = (i: number): number => {
    if (i >= heap.length || heap[i] === null) return 0;
    const val = heap[i] as number;
    const l = Math.max(gain(2 * i + 1), 0);
    const r = Math.max(gain(2 * i + 2), 0);
    const arch = val + l + r;
    const improved = arch > best;
    if (improved) best = arch;
    push(7, `At ${val}: arch = ${val} + ${l} + ${r} = ${arch}${improved ? ` (new best ${best})` : ""}.`, snap({ current: i, improved }));
    const g = val + Math.max(l, r);
    gains[i] = g;
    push(8, `${val} returns single-branch gain ${g}.`, snap({ current: i }));
    return g;
  };
  gain(0);

  push(11, `Maximum path sum: ${best}.`, snap({ answer: best }));
  return steps;
}
