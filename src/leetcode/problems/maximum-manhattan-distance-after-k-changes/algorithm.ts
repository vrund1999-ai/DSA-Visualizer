import type { Step } from "@/core/types";

export interface ManhattanData {
  moves: string;
  k: number;
  scan: number | null;
  cnt: { N: number; S: number; E: number; W: number };
  net: number | null;
  prefixMax: number | null;
  best: number;
  answer: number | null;
}

export type ManhattanStep = Step<ManhattanData>;

/**
 * Maximum Manhattan Distance After K Changes: for each prefix, the net distance is |N−S| + |E−W|. Changing a
 * "wasted" (cancelling) move to an outward one adds 2, so the best reachable for a length-i prefix is
 * min(i, net + 2k) — but never more than the number of moves. Track the maximum over all prefixes. `line`
 * indexes CODE.
 */
export function manhattanSteps(moves: string, k: number): ManhattanStep[] {
  const steps: ManhattanStep[] = [];
  const cnt = { N: 0, S: 0, E: 0, W: 0 };
  let best = 0;

  const snap = (o: Partial<ManhattanData>): ManhattanData => ({
    moves,
    k,
    scan: null,
    cnt: { ...cnt },
    net: null,
    prefixMax: null,
    best,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ManhattanData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Track the furthest Manhattan distance over all prefixes, allowing ${k} change(s).`);

  for (let i = 0; i < moves.length; i++) {
    cnt[moves[i] as "N" | "S" | "E" | "W"]++;
    const net = Math.abs(cnt.N - cnt.S) + Math.abs(cnt.E - cnt.W);
    const prefixMax = Math.min(i + 1, net + 2 * k);
    best = Math.max(best, prefixMax);
    push(10, `Prefix ${i + 1}: net ${net}, reachable min(${i + 1}, ${net}+2·${k}) = ${prefixMax}. Best ${best}.`, {
      scan: i,
      net,
      prefixMax,
    });
  }

  push(12, `Maximum distance = ${best}.`, { answer: best });
  return steps;
}
