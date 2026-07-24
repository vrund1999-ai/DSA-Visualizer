import type { Step } from "@/core/types";

export interface EvalDivData {
  variables: string[];
  equations: [string, string, number][];
  query: [string, string];
  /** variable currently visited in the DFS */
  current: string | null;
  /** variables on the current DFS path */
  path: string[];
  acc: number;
  answer: number | null;
}

export type EvalDivStep = Step<EvalDivData>;

type Graph = Record<string, [string, number][]>;

function buildGraph(equations: [string, string][], values: number[]): Graph {
  const g: Graph = {};
  equations.forEach(([a, b], i) => {
    (g[a] ??= []).push([b, values[i]]);
    (g[b] ??= []).push([a, 1 / values[i]]);
  });
  return g;
}

/**
 * Model the equations as a weighted directed graph where edge a→b carries a/b. A
 * query a/b is the product of edge weights along any path from a to b, found by DFS.
 * This visualization walks the FIRST query. `line` indexes CODE.
 */
export function evalDivSteps(
  equations: [string, string][],
  values: number[],
  queries: [string, string][],
): EvalDivStep[] {
  const steps: EvalDivStep[] = [];
  const g = buildGraph(equations, values);
  const variables = Object.keys(g).sort();
  const eqTriples = equations.map(([a, b], i) => [a, b, values[i]] as [string, string, number]);
  const query = queries[0];

  const snap = (o: Partial<EvalDivData>): EvalDivData => ({ variables, equations: eqTriples, query, current: null, path: [], acc: 1, answer: null, ...o });
  const push = (line: number, explanation: string, data: EvalDivData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(5, `Build the graph, then evaluate ${query[0]} / ${query[1]}.`, snap({}));

  const [qa, qb] = query;
  const path: string[] = [];
  const seen = new Set<string>();

  const dfs = (a: string, acc: number): number => {
    if (!(a in g) || !(qb in g)) {
      push(7, `${a} or ${qb} is unknown → -1.`, snap({ current: a, path: [...path], acc }));
      return -1;
    }
    path.push(a);
    if (a === qb) {
      push(8, `Reached ${qb}: product = ${acc}.`, snap({ current: a, path: [...path], acc, answer: acc }));
      return acc;
    }
    seen.add(a);
    push(9, `At ${a}, product so far ${+acc.toFixed(4)}.`, snap({ current: a, path: [...path], acc }));
    for (const [nxt, w] of g[a]) {
      if (seen.has(nxt)) continue;
      const r = dfs(nxt, acc * w);
      if (r !== -1) return r;
    }
    path.pop();
    return -1;
  };

  const result = dfs(qa, 1);
  push(17, result === -1 ? `No path → ${qa} / ${qb} = -1.` : `${qa} / ${qb} = ${+result.toFixed(4)}.`, snap({ path: result === -1 ? [] : [...path], acc: result === -1 ? 1 : result, answer: result }));
  return steps;
}
