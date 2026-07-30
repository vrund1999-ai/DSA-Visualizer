import type { Step } from "@/core/types";

export interface DistinctIslandsData {
  grid: number[][];
  /** shape id per cell (-1 = water/unassigned) */
  shapeId: number[][];
  /** cells of the island just found */
  cur: string[];
  /** distinct shape signatures discovered */
  shapes: string[];
  answer: number | null;
}

export type DistinctIslandsStep = Step<DistinctIslandsData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * Two islands are the same shape iff their cells share the same offsets from the island's top-left anchor.
 * A DFS collects each island's normalized (r−r0, c−c0) coordinates into a signature; the number of
 * distinct signatures is the answer. `line` indexes CODE.
 */
export function distinctIslandsSteps(input: number[][]): DistinctIslandsStep[] {
  const steps: DistinctIslandsStep[] = [];
  const grid = input.map((r) => [...r]);
  const R = grid.length;
  const C = grid[0].length;
  const seen = Array.from({ length: R }, () => new Array(C).fill(false));
  const shapeId = Array.from({ length: R }, () => new Array(C).fill(-1));
  const shapes: string[] = [];

  const snap = (o: Partial<DistinctIslandsData>): DistinctIslandsData => ({ grid, shapeId: shapeId.map((r) => [...r]), cur: [], shapes: [...shapes], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DistinctIslandsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Flood-fill each island, recording cell offsets from its anchor as a shape signature.");

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 1 && !seen[r][c]) {
        const cells: [number, number][] = [];
        const cellKeys: string[] = [];
        const stack: [number, number][] = [[r, c]];
        seen[r][c] = true;
        while (stack.length) {
          const [cr, cc] = stack.pop()!;
          cells.push([cr - r, cc - c]);
          cellKeys.push(`${cr},${cc}`);
          for (const [dr, dc] of DIRS) {
            const nr = cr + dr;
            const nc = cc + dc;
            if (nr >= 0 && nc >= 0 && nr < R && nc < C && grid[nr][nc] === 1 && !seen[nr][nc]) {
              seen[nr][nc] = true;
              stack.push([nr, nc]);
            }
          }
        }
        cells.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        const sig = cells.map((x) => x.join(",")).join("|");
        let id = shapes.indexOf(sig);
        const isNew = id === -1;
        if (isNew) {
          shapes.push(sig);
          id = shapes.length - 1;
        }
        for (const k of cellKeys) {
          const [kr, kc] = k.split(",").map(Number);
          shapeId[kr][kc] = id;
        }
        push(7, `Island at (${r},${c}): shape ${isNew ? `#${id} (new!)` : `matches #${id}`}. Distinct: ${shapes.length}.`, { cur: cellKeys });
      }
    }
  }

  push(9, `Distinct island shapes: ${shapes.length}.`, { answer: shapes.length });
  return steps;
}
