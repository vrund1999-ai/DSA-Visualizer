import type { Step } from "@/core/types";

export interface DelayData {
  times: number[][];
  n: number;
  k: number;
  /** shortest distance per node 1..n */
  dist: number[];
  /** node just settled */
  settled: number | null;
  /** edge being relaxed [u, v, w] */
  edge: number[] | null;
  answer: number | null;
}

export type DelayStep = Step<DelayData>;

const fmt = (v: number) => (v === Infinity ? "∞" : `${v}`);

/**
 * Signal spreads at edge-weight speed, so the time to reach all nodes is the largest shortest-path
 * distance from the source. Dijkstra settles the closest unsettled node each round and relaxes its
 * outgoing edges. `line` indexes CODE.
 */
export function delaySteps(times: number[][], n: number, k: number): DelayStep[] {
  const steps: DelayStep[] = [];
  const adj = new Map<number, number[][]>();
  for (const [u, v, w] of times) {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u)!.push([v, w]);
  }
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const visited = new Set<number>();

  const snap = (o: Partial<DelayData>): DelayData => ({ times, n, k, dist: [...dist], settled: null, edge: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DelayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Dijkstra from node ${k}; signal reaches all when the farthest shortest path is covered.`);

  for (let iter = 0; iter < n; iter++) {
    // pick closest unvisited
    let u = -1;
    let bestD = Infinity;
    for (let node = 1; node <= n; node++) if (!visited.has(node) && dist[node] < bestD) { bestD = dist[node]; u = node; }
    if (u === -1) break;
    visited.add(u);
    push(6, `Settle node ${u} at distance ${fmt(dist[u])}.`, { settled: u });
    for (const [v, w] of adj.get(u) ?? []) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        push(10, `Relax ${u}→${v} (weight ${w}): dist[${v}] = ${fmt(dist[v])}.`, { settled: u, edge: [u, v, w] });
      }
    }
  }

  const max = Math.max(...dist.slice(1));
  const answer = max === Infinity ? -1 : max;
  push(15, answer === -1 ? "Some node is unreachable → -1." : `All nodes reached; slowest is ${answer}.`, { answer });
  return steps;
}
