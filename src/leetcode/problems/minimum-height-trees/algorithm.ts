import type { Step } from "@/core/types";

export interface MHTData {
  n: number;
  edges: number[][];
  /** removed (trimmed) nodes */
  trimmed: number[];
  /** current leaf layer being peeled */
  leaves: number[];
  answer: number[] | null;
}

export type MHTStep = Step<MHTData>;

/**
 * The roots giving minimum height are the tree's 1–2 centroids. Repeatedly peeling all current leaves
 * moves inward from every extremity at once; whatever survives when ≤ 2 nodes remain is the center. `line`
 * indexes CODE.
 */
export function mhtSteps(n: number, edges: number[][]): MHTStep[] {
  const steps: MHTStep[] = [];
  const adj: number[][] = Array.from({ length: n }, () => []);
  const deg = new Array(n).fill(0);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
    deg[a]++;
    deg[b]++;
  }
  const trimmed: number[] = [];

  const snap = (o: Partial<MHTData>): MHTData => ({ n, edges, trimmed: [...trimmed], leaves: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MHTData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (n <= 2) {
    push(1, `n = ${n} ≤ 2 → every node is a valid root.`, { answer: Array.from({ length: n }, (_, i) => i) });
    return steps;
  }

  let leaves = Array.from({ length: n }, (_, i) => i).filter((v) => deg[v] === 1);
  let remaining = n;
  push(3, `Start with leaves [${leaves.join(", ")}]; peel inward until ≤ 2 nodes remain.`, { leaves: [...leaves] });

  while (remaining > 2) {
    remaining -= leaves.length;
    const next: number[] = [];
    for (const leaf of leaves) {
      trimmed.push(leaf);
      for (const nb of adj[leaf]) if (--deg[nb] === 1) next.push(nb);
    }
    leaves = next;
    push(11, `Trimmed a layer; ${remaining} node(s) left. New leaves [${leaves.join(", ")}].`, { leaves: [...leaves] });
  }

  push(13, `Centroid root(s): [${leaves.join(", ")}].`, { leaves: [...leaves], answer: [...leaves] });
  return steps;
}
