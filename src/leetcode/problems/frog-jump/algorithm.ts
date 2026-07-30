import type { Step } from "@/core/types";

export interface FrogData {
  stones: number[];
  /** stone position -> sorted list of landing jump sizes */
  jumps: Record<number, number[]>;
  /** stone index currently being expanded */
  cur: number | null;
  /** stone index just reached by a new jump */
  reached: number | null;
  answer: boolean | null;
}

export type FrogStep = Step<FrogData>;

/**
 * Whether a stone is reachable depends on which jump size arrived there, since the next jump must be
 * k−1, k, or k+1. Tracking the set of landing jump sizes per stone and propagating forward, the last
 * stone is reachable exactly when its set is non-empty. `line` indexes CODE.
 */
export function frogSteps(stones: number[]): FrogStep[] {
  const steps: FrogStep[] = [];
  const jumps = new Map<number, Set<number>>();
  const idxOf = new Map<number, number>();
  stones.forEach((s, i) => {
    jumps.set(s, new Set());
    idxOf.set(s, i);
  });
  jumps.get(stones[0])!.add(0);

  const asRecord = () => {
    const out: Record<number, number[]> = {};
    for (const [s, set] of jumps) out[s] = [...set].sort((a, b) => a - b);
    return out;
  };
  const snap = (o: Partial<FrogData>): FrogData => ({ stones, jumps: asRecord(), cur: null, reached: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FrogData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Stone 0 is reached with jump 0; propagate reachable jump sizes forward.");

  for (let i = 0; i < stones.length; i++) {
    const s = stones[i];
    const set = jumps.get(s)!;
    if (set.size === 0) {
      push(5, `Stone ${s} is unreachable — skip.`, { cur: i });
      continue;
    }
    for (const k of set) {
      for (const step of [k - 1, k, k + 1]) {
        if (step > 0 && jumps.has(s + step)) {
          jumps.get(s + step)!.add(step);
          push(8, `From stone ${s} (last jump ${k}), a jump of ${step} lands on stone ${s + step}.`, { cur: i, reached: idxOf.get(s + step)! });
        }
      }
    }
  }

  const last = stones[stones.length - 1];
  const answer = jumps.get(last)!.size > 0;
  push(13, answer ? `Last stone ${last} is reachable → true.` : `Last stone ${last} has no landing jumps → false.`, { answer });
  return steps;
}
