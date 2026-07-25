import type { Step } from "@/core/types";

export interface CloneGraphData {
  /** adjacency list (1-indexed node values as indices+1) */
  adj: number[][];
  /** node currently being visited (0-indexed) */
  current: number | null;
  /** nodes already cloned (registered in the map) */
  cloned: number[];
  /** an edge just linked, [from, to] */
  linked: [number, number] | null;
  done: boolean;
}

export type CloneGraphStep = Step<CloneGraphData>;

/**
 * DFS that registers each node's clone in a map BEFORE recursing into its neighbours —
 * that ordering is what stops cycles from looping forever, since a revisit returns the
 * already-made copy. `line` indexes CODE.
 */
export function cloneGraphSteps(adj: number[][]): CloneGraphStep[] {
  const steps: CloneGraphStep[] = [];
  const cloned: number[] = [];

  const snap = (o: Partial<CloneGraphData>): CloneGraphData => ({ adj: adj.map((r) => [...r]), current: null, cloned: [...cloned], linked: null, done: false, ...o });
  const push = (line: number, explanation: string, data: CloneGraphData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (adj.length === 0) {
    push(1, "Empty graph — nothing to clone.", snap({ done: true }));
    return steps;
  }

  push(2, "DFS clones each node, registering it before visiting neighbours.", snap({}));

  const dfs = (u: number) => {
    if (cloned.includes(u)) {
      push(4, `Node ${u + 1} already cloned — reuse its copy.`, snap({ current: u }));
      return;
    }
    cloned.push(u);
    push(6, `Clone node ${u + 1} and register it.`, snap({ current: u }));
    for (const v of adj[u]) {
      push(8, `Link copy of ${u + 1} → copy of ${v}.`, snap({ current: u, linked: [u, v - 1] }));
      dfs(v - 1);
    }
  };
  dfs(0);

  push(11, `Cloned all ${cloned.length} node(s).`, snap({ done: true }));
  return steps;
}
