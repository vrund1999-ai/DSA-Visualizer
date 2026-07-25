import type { Step } from "@/core/types";

export interface CriticalData {
  n: number;
  edges: [number, number][];
  disc: number[];
  low: number[];
  /** node currently being processed */
  cur: number | null;
  /** tree edge being traversed */
  activeEdge: [number, number] | null;
  bridges: [number, number][];
  answer: [number, number][] | null;
}

export type CriticalStep = Step<CriticalData>;

const key = (a: number, b: number) => (a < b ? `${a}-${b}` : `${b}-${a}`);

/**
 * Tarjan's bridge algorithm: a DFS stamps each node with a discovery time and a low-link — the
 * earliest node reachable via its subtree and one back-edge. A tree edge u→v is a bridge exactly
 * when v's subtree can't reach u or earlier, i.e. low[v] > disc[u]. `line` indexes CODE.
 */
export function criticalSteps(n: number, connections: number[][]): CriticalStep[] {
  const steps: CriticalStep[] = [];
  const g: number[][] = Array.from({ length: n }, () => []);
  const edges: [number, number][] = [];
  for (const [a, b] of connections) { g[a].push(b); g[b].push(a); edges.push([a, b]); }

  const disc = new Array(n).fill(-1);
  const low = new Array(n).fill(0);
  const bridges: [number, number][] = [];
  let timer = 0;

  const snap = (o: Partial<CriticalData>): CriticalData => ({ n, edges, disc: [...disc], low: [...low], cur: null, activeEdge: null, bridges: bridges.map((b) => [...b] as [number, number]), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CriticalData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "DFS assigning discovery times and low-links; low[v] > disc[u] marks a bridge.");

  const dfs = (u: number, parent: number) => {
    disc[u] = low[u] = timer++;
    push(5, `Visit ${u}: disc = low = ${disc[u]}.`, { cur: u });
    for (const v of g[u]) {
      if (v === parent) continue;
      if (disc[v] === -1) {
        push(9, `Tree edge ${u}→${v}; recurse.`, { cur: u, activeEdge: [u, v] });
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > disc[u]) {
          bridges.push([u, v]);
          push(11, `low[${v}] (${low[v]}) > disc[${u}] (${disc[u]}) → edge ${u}-${v} is a bridge.`, { cur: u, activeEdge: [u, v] });
        } else {
          push(10, `Back up: low[${u}] = ${low[u]} (${v}'s subtree loops back).`, { cur: u, activeEdge: [u, v] });
        }
      } else {
        low[u] = Math.min(low[u], disc[v]);
        push(12, `Back edge ${u}→${v}: low[${u}] = ${low[u]}.`, { cur: u, activeEdge: [u, v] });
      }
    }
  };

  dfs(0, -1);
  void key;
  push(16, `Critical connections (bridges): ${bridges.map((b) => `[${b[0]}, ${b[1]}]`).join(", ") || "none"}.`, { answer: bridges.map((b) => [...b] as [number, number]) });
  return steps;
}
