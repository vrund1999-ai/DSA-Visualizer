import type { Step } from "@/core/types";

export interface PathExistsData {
  n: number;
  edges: [number, number][];
  parent: number[];
  source: number;
  dest: number;
  /** edge index being unioned */
  cur: number | null;
  answer: boolean | null;
}

export type PathExistsStep = Step<PathExistsData>;

/**
 * Union every edge's endpoints. After processing all edges, source and dest are
 * connected iff they share a root. `line` indexes CODE.
 */
export function pathExistsSteps(n: number, edges: [number, number][], source: number, dest: number): PathExistsStep[] {
  const steps: PathExistsStep[] = [];
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const snap = (o: Partial<PathExistsData>): PathExistsData => ({ n, edges: edges.map((e) => [...e] as [number, number]), parent: [...parent], source, dest, cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: PathExistsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Union-Find; is there a path from ${source} to ${dest}?`, snap({}));

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    parent[find(a)] = find(b);
    push(5, `Union ${a} and ${b}.`, snap({ cur: i }));
  }

  const answer = find(source) === find(dest);
  push(6, `${source} and ${dest} ${answer ? "share a root — connected" : "are in different components"}.`, snap({ answer }));
  return steps;
}
