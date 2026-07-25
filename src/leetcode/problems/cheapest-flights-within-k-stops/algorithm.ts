import type { Step } from "@/core/types";

export type Flight = [number, number, number];

export interface FlightsData {
  n: number;
  src: number;
  dst: number;
  dist: number[];
  round: number | null;
  /** edge being relaxed [u, v, w] */
  edge: Flight | null;
  relaxed: boolean;
  answer: number | null;
}

export type FlightsStep = Step<FlightsData>;

const fmt = (v: number) => (v === Infinity ? "∞" : `${v}`);

/**
 * Bellman-Ford bounded to k+1 rounds: each round relaxes every edge but reads distances from a
 * snapshot taken at the round's start, so a path can gain at most one hop per round. After k+1
 * rounds dist[dst] is the cheapest fare using at most k intermediate stops. `line` indexes CODE.
 */
export function flightsSteps(n: number, flights: Flight[], src: number, dst: number, k: number): FlightsStep[] {
  const steps: FlightsStep[] = [];
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  const snap = (d: number[], o: Partial<FlightsData>): FlightsData => ({ n, src, dst, dist: [...d], round: null, edge: null, relaxed: false, answer: null, ...o });
  const push = (line: number, explanation: string, d: number[], o: Partial<FlightsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(d, o), highlights: [] });
  };

  push(2, `Start at city ${src} (cost 0); all others unreachable so far.`, dist);

  for (let i = 0; i <= k; i++) {
    const tmp = [...dist];
    push(4, `Round ${i + 1} (paths with ≤ ${i + 1} flight${i > 0 ? "s" : ""}): snapshot distances.`, dist, { round: i });
    for (const [u, v, w] of flights) {
      const relaxed = dist[u] + w < tmp[v];
      if (relaxed) {
        tmp[v] = dist[u] + w;
        push(7, `Relax ${u}→${v} (cost ${w}): city ${v} now ${fmt(tmp[v])} via ${u}.`, tmp, { round: i, edge: [u, v, w], relaxed: true });
      }
    }
    dist = tmp;
  }

  const answer = dist[dst] === Infinity ? -1 : dist[dst];
  push(10, `Cheapest fare ${src} → ${dst} with ≤ ${k} stops: ${answer}.`, dist, { answer });
  return steps;
}
