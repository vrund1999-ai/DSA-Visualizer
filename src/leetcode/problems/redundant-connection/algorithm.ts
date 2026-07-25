import type { Step } from "@/core/types";

export interface RedundantData {
  edges: [number, number][];
  parent: number[];
  /** index of the edge currently processed */
  cur: number | null;
  /** the two nodes of the current edge */
  a: number | null;
  b: number | null;
  /** whether this edge closes a cycle */
  cycle: boolean;
  answer: [number, number] | null;
}

export type RedundantStep = Step<RedundantData>;

/**
 * Add edges one by one with union-find. The first edge whose two endpoints already
 * share a root would close a cycle, so it is the redundant connection. `line` indexes
 * CODE.
 */
export function redundantSteps(edges: [number, number][]): RedundantStep[] {
  const steps: RedundantStep[] = [];
  const n = edges.length;
  const parent = Array.from({ length: n + 1 }, (_, i) => i);
  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const snap = (o: Partial<RedundantData>): RedundantData => ({ edges: edges.map((e) => [...e] as [number, number]), parent: [...parent], cur: null, a: null, b: null, cycle: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: RedundantData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Union-Find over nodes; a repeat connection reveals the extra edge.", snap({}));

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    if (find(a) === find(b)) {
      push(7, `${a} and ${b} are already connected — edge [${a}, ${b}] is redundant.`, snap({ cur: i, a, b, cycle: true, answer: [a, b] }));
      return steps;
    }
    parent[find(a)] = find(b);
    push(8, `Union ${a} and ${b}.`, snap({ cur: i, a, b }));
  }

  push(9, "No redundant edge found.", snap({}));
  return steps;
}
