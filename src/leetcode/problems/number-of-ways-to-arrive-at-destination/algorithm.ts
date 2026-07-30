import type { Step } from "@/core/types";

export interface CountPathsData {
  n: number;
  roads: number[][];
  dist: number[];
  ways: number[];
  settled: number | null;
  relaxed: number | null;
  answer: number | null;
}

export type CountPathsStep = Step<CountPathsData>;

const MOD = 1e9 + 7;

/**
 * Dijkstra finds the shortest time to every node while a parallel `ways` array counts how many shortest
 * paths reach it: a strictly shorter path resets the count to the predecessor's, and a tie adds it. The
 * answer is the count at the destination. `line` indexes CODE.
 */
export function countPathsSteps(n: number, roads: number[][]): CountPathsStep[] {
  const steps: CountPathsStep[] = [];
  const adj = new Map<number, number[][]>();
  for (const [u, v, w] of roads) {
    if (!adj.has(u)) adj.set(u, []);
    if (!adj.has(v)) adj.set(v, []);
    adj.get(u)!.push([v, w]);
    adj.get(v)!.push([u, w]);
  }
  const dist = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);
  dist[0] = 0;
  ways[0] = 1;
  const visited = new Set<number>();

  const snap = (o: Partial<CountPathsData>): CountPathsData => ({ n, roads, dist: [...dist], ways: [...ways], settled: null, relaxed: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CountPathsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, "Dijkstra from node 0; track shortest time and number of shortest paths per node.");

  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    let best = Infinity;
    for (let node = 0; node < n; node++) if (!visited.has(node) && dist[node] < best) { best = dist[node]; u = node; }
    if (u === -1) break;
    visited.add(u);
    push(7, `Settle node ${u} (time ${dist[u]}, ${ways[u]} way(s)).`, { settled: u });
    for (const [v, w] of adj.get(u) ?? []) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        ways[v] = ways[u];
        push(12, `Shorter path to ${v}: time ${dist[v]}, ${ways[v]} way(s) inherited from ${u}.`, { settled: u, relaxed: v });
      } else if (dist[u] + w === dist[v]) {
        ways[v] = (ways[v] + ways[u]) % MOD;
        push(15, `Another shortest path to ${v}: ways = ${ways[v]}.`, { settled: u, relaxed: v });
      }
    }
  }

  push(18, `Number of shortest paths to node ${n - 1}: ${ways[n - 1]}.`, { answer: ways[n - 1] });
  return steps;
}
