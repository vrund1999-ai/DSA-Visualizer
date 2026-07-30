import type { Step } from "@/core/types";

export interface GardenData {
  n: number;
  paths: number[][];
  /** color per garden 1..n (0 = uncolored), index 0 unused */
  color: number[];
  cur: number | null;
  /** colors used by neighbors of cur */
  used: number[];
  answer: number[] | null;
}

export type GardenStep = Step<GardenData>;

/**
 * Every garden has at most three neighbors, so among four flower types at least one is always free.
 * Processing gardens in order and giving each the smallest type not used by an already-planted neighbor
 * needs no backtracking. `line` indexes CODE.
 */
export function gardenSteps(n: number, paths: number[][]): GardenStep[] {
  const steps: GardenStep[] = [];
  const adj: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of paths) {
    adj[a].push(b);
    adj[b].push(a);
  }
  const color = new Array(n + 1).fill(0);

  const snap = (o: Partial<GardenData>): GardenData => ({ n, paths, color: [...color], cur: null, used: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GardenData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, "Give each garden the smallest of 4 flower types not used by a neighbor.");

  for (let g = 1; g <= n; g++) {
    const used = [...new Set(adj[g].map((x) => color[x]).filter((c) => c > 0))].sort((a, b) => a - b);
    let chosen = 0;
    for (let c = 1; c <= 4; c++) {
      if (!used.includes(c)) {
        chosen = c;
        break;
      }
    }
    color[g] = chosen;
    push(9, `Garden ${g}: neighbors use {${used.join(", ") || "—"}} → plant type ${chosen}.`, { cur: g, used });
  }

  push(11, `Assignment: [${color.slice(1).join(", ")}].`, { answer: color.slice(1) });
  return steps;
}
