import type { Step } from "@/core/types";

export interface StonesData {
  stones: [number, number][];
  parent: number[];
  /** roots after path compression, aligned to stones (for coloring components) */
  roots: number[];
  /** stone pair currently examined */
  pair: [number, number] | null;
  unioned: boolean;
  components: number | null;
  answer: number | null;
}

export type StonesStep = Step<StonesData>;

/**
 * Stones sharing a row or column belong to one connected component, and from any component all but
 * one stone can be removed. So union stones that share a coordinate, then the answer is the total
 * minus the number of remaining components. `line` indexes CODE.
 */
export function stonesSteps(input: number[][]): StonesStep[] {
  const steps: StonesStep[] = [];
  const stones = input.map((s) => [s[0], s[1]] as [number, number]);
  const parent = stones.map((_, i) => i);

  const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  const roots = () => stones.map((_, i) => find(i));

  const snap = (o: Partial<StonesData>): StonesData => ({ stones, parent: [...parent], roots: roots(), pair: null, unioned: false, components: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<StonesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Union stones sharing a row or column; each component keeps one stone.");

  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      const shareRow = stones[i][0] === stones[j][0];
      const shareCol = stones[i][1] === stones[j][1];
      if (shareRow || shareCol) {
        const ri = find(i);
        const rj = find(j);
        if (ri !== rj) {
          parent[ri] = rj;
          push(8, `Stones ${i} and ${j} share a ${shareRow ? "row" : "column"} → union.`, { pair: [i, j], unioned: true });
        }
      }
    }
  }

  const comp = new Set(roots()).size;
  const answer = stones.length - comp;
  push(10, `${stones.length} stones − ${comp} components = ${answer} removable.`, { components: comp, answer });
  return steps;
}
