import type { Step } from "@/core/types";

export interface ProvincesData {
  n: number;
  parent: number[];
  edge: [number, number] | null;
  unioned: boolean;
  provinces: number | null;
}

export type ProvincesStep = Step<ProvincesData>;

/**
 * Union-Find: every city starts in its own set; each direct connection unions two
 * sets. After processing all connections, the number of distinct set roots is the
 * number of provinces. `line` indexes CODE.
 */
export function provincesSteps(isConnected: number[][]): ProvincesStep[] {
  const n = isConnected.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const steps: ProvincesStep[] = [];

  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };
  const snap = (edge: [number, number] | null, unioned: boolean, provinces: number | null): ProvincesData => ({ n, parent: [...parent], edge, unioned, provinces });
  const push = (line: number, explanation: string, data: ProvincesData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Each city starts in its own set; union connected cities.", snap(null, false, null));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        const ri = find(i);
        const rj = find(j);
        if (ri !== rj) {
          parent[ri] = rj;
          push(8, `Cities ${i} and ${j} are connected — union their sets.`, snap([i, j], true, null));
        } else {
          push(7, `Cities ${i} and ${j} already share a province.`, snap([i, j], false, null));
        }
      }
    }
  }

  let provinces = 0;
  for (let i = 0; i < n; i++) if (find(i) === i) provinces++;
  push(11, `Distinct roots = ${provinces} province(s).`, snap(null, false, provinces));
  return steps;
}
