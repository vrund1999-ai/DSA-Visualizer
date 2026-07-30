import type { Step } from "@/core/types";

export interface HighestPeakData {
  isWater: number[][];
  height: number[][];
  /** cells assigned this BFS layer */
  frontier: [number, number][];
  currentHeight: number;
  done: boolean;
}

export type HighestPeakStep = Step<HighestPeakData>;

/**
 * Map of Highest Peak: water cells have height 0 and adjacent heights differ by at most 1. A multi-source
 * BFS from every water cell assigns each land cell its distance to the nearest water, which maximizes the
 * heights. `line` indexes CODE.
 */
export function highestPeakSteps(isWater: number[][]): HighestPeakStep[] {
  const steps: HighestPeakStep[] = [];
  const rows = isWater.length;
  const cols = isWater[0].length;
  const h: number[][] = isWater.map((row) => row.map((w) => (w ? 0 : -1)));
  let frontier: [number, number][] = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (isWater[r][c]) frontier.push([r, c]);

  const snap = (o: Partial<HighestPeakData>): HighestPeakData => ({
    isWater,
    height: h.map((r) => [...r]),
    frontier: [],
    currentHeight: 0,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<HighestPeakData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, `Start BFS from ${frontier.length} water cell(s) at height 0.`, { frontier: [...frontier] });

  let height = 0;
  while (frontier.length) {
    const next: [number, number][] = [];
    for (const [r, c] of frontier) {
      for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as const) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && h[nr][nc] === -1) {
          h[nr][nc] = height + 1;
          next.push([nr, nc]);
        }
      }
    }
    height++;
    if (next.length) push(15, `Assign height ${height} to ${next.length} cell(s).`, { frontier: [...next], currentHeight: height });
    frontier = next;
  }

  push(17, `All cells assigned; max height = ${Math.max(...h.flat())}.`, { done: true });
  return steps;
}
