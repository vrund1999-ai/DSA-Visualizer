import type { Step } from "@/core/types";

export interface MaxIslandData {
  grid: number[][];
  cur: [number, number] | null;
  /** cells of the island currently being explored */
  island: string[];
  currentArea: number;
  best: number;
  answer: number | null;
}

export type MaxIslandStep = Step<MaxIslandData>;

/**
 * DFS flood-fill each unvisited land cell, sinking (setting to 0) as we go so cells
 * aren't counted twice; the size returned for each start is its island's area, and the
 * maximum over all starts is the answer. `line` indexes CODE.
 */
export function maxIslandSteps(input: number[][]): MaxIslandStep[] {
  const steps: MaxIslandStep[] = [];
  const grid = input.map((r) => [...r]);
  const rows = grid.length;
  const cols = grid[0].length;
  let best = 0;
  let island: string[] = [];

  const snap = (o: Partial<MaxIslandData>): MaxIslandData => ({ grid: grid.map((r) => [...r]), cur: null, island: [...island], currentArea: island.length, best, answer: null, ...o });
  const push = (line: number, explanation: string, data: MaxIslandData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "DFS each island, sinking cells so they aren't recounted.", snap({}));

  const dfs = (r: number, c: number): number => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) return 0;
    grid[r][c] = 0;
    island.push(`${r},${c}`);
    push(4, `Sink (${r}, ${c}); island area now ${island.length}.`, snap({ cur: [r, c] }));
    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        island = [];
        const area = dfs(r, c);
        best = Math.max(best, area);
        push(10, `Island at (${r}, ${c}) has area ${area} (best ${best}).`, snap({}));
      }
    }
  }

  push(11, `Maximum island area: ${best}.`, snap({ answer: best }));
  return steps;
}
