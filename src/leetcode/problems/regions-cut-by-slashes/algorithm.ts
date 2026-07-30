import type { Step } from "@/core/types";

export interface SlashesData {
  grid: string[];
  /** -1 = wall, 0 = empty, >0 = region id */
  big: number[][];
  cur: [number, number] | null;
  regions: number;
  answer: number | null;
}

export type SlashesStep = Step<SlashesData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * Slashes are hard to reason about on a 1×1 cell, so blow each cell up to 3×3 and paint the diagonal as
 * a wall. The number of regions is then just the connected components of the remaining empty cells, found
 * by flood fill. `line` indexes CODE.
 */
export function slashesSteps(grid: string[]): SlashesStep[] {
  const steps: SlashesStep[] = [];
  const n = grid.length;
  const S = 3 * n;
  // -1 wall, 0 empty
  const big: number[][] = Array.from({ length: S }, () => new Array(S).fill(0));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const ch = grid[r][c];
      if (ch === "/") {
        big[3 * r][3 * c + 2] = -1;
        big[3 * r + 1][3 * c + 1] = -1;
        big[3 * r + 2][3 * c] = -1;
      } else if (ch === "\\") {
        big[3 * r][3 * c] = -1;
        big[3 * r + 1][3 * c + 1] = -1;
        big[3 * r + 2][3 * c + 2] = -1;
      }
    }
  }

  let regions = 0;
  const snap = (o: Partial<SlashesData>): SlashesData => ({ grid, big: big.map((r) => [...r]), cur: null, regions, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SlashesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Upscale each cell to 3×3 and paint the slash as a diagonal wall.");

  for (let r = 0; r < S; r++) {
    for (let c = 0; c < S; c++) {
      if (big[r][c] === 0) {
        regions++;
        // flood fill
        const queue: [number, number][] = [[r, c]];
        big[r][c] = regions;
        while (queue.length) {
          const [cr, cc] = queue.shift()!;
          for (const [dr, dc] of DIRS) {
            const nr = cr + dr;
            const nc = cc + dc;
            if (nr >= 0 && nc >= 0 && nr < S && nc < S && big[nr][nc] === 0) {
              big[nr][nc] = regions;
              queue.push([nr, nc]);
            }
          }
        }
        push(15, `Flood-fill region ${regions} from (${r}, ${c}).`, { cur: [r, c] });
      }
    }
  }

  push(17, `The slashes carve the grid into ${regions} region(s).`, { answer: regions });
  return steps;
}
