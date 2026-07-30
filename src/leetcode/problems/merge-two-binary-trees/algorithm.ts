import type { Step } from "@/core/types";

export interface MergeTreesData {
  t1: (number | null)[];
  t2: (number | null)[];
  merged: (number | null)[];
  /** heap index currently merged */
  cur: number | null;
  answer: (number | null)[] | null;
}

export type MergeTreesStep = Step<MergeTreesData>;

/**
 * Overlapping nodes (same position in both trees) add their values, while a node present in only one tree
 * carries over. Working over the shared heap indexing, each index merges independently. `line` indexes CODE.
 */
export function mergeTreesSteps(t1: (number | null)[], t2: (number | null)[]): MergeTreesStep[] {
  const steps: MergeTreesStep[] = [];
  const n = Math.max(t1.length, t2.length);
  const merged: (number | null)[] = new Array(n).fill(null);
  const a = (i: number) => (i < t1.length ? t1[i] : null);
  const b = (i: number) => (i < t2.length ? t2[i] : null);

  const snap = (o: Partial<MergeTreesData>): MergeTreesData => ({ t1, t2, merged: [...merged], cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MergeTreesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Merge node by node: overlapping nodes add, a lone node carries over.");

  // process in BFS/index order but only reachable nodes
  for (let i = 0; i < n; i++) {
    const av = a(i);
    const bv = b(i);
    if (av === null && bv === null) continue;
    // only merge if the parent exists in merged (or root)
    if (i > 0 && merged[(i - 1) >> 1] === null) continue;
    merged[i] = (av ?? 0) + (bv ?? 0);
    if (av !== null && bv !== null) push(3, `Node ${i}: ${av} + ${bv} = ${merged[i]}.`, { cur: i });
    else push(av !== null ? 2 : 1, `Node ${i}: only one tree has ${av ?? bv} — carry it over.`, { cur: i });
  }

  push(6, "Trees merged.", { answer: [...merged] });
  return steps;
}
