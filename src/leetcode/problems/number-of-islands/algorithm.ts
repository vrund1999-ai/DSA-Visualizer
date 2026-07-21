import type { Step } from "@/core/types";

export interface IslandsData {
  grid: string[][];
  /** 0 = unvisited; >0 = the island number a land cell was assigned to. */
  visited: number[][];
  current: [number, number] | null;
  count: number;
}

export type IslandsStep = Step<IslandsData>;

/**
 * Scan the grid; each unvisited land cell starts a new island, and a DFS flood
 * fill sinks every connected land cell so it isn't counted again. `line` indexes
 * CODE.
 */
export function islandsSteps(input: string[][]): IslandsStep[] {
  const grid = input.map((row) => [...row]);
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(0));
  const steps: IslandsStep[] = [];
  let count = 0;

  const snap = (current: [number, number] | null): IslandsData => ({
    grid: grid.map((r) => [...r]),
    visited: visited.map((r) => [...r]),
    current,
    count,
  });
  const push = (line: number, explanation: string, current: [number, number] | null) => {
    steps.push({ id: steps.length, line, explanation, data: snap(current), highlights: [], metrics: { islands: count } });
  };

  push(1, "Walk the grid; each fresh piece of land is a new island to flood.", null);

  const inBounds = (r: number, c: number) => r >= 0 && r < rows && c >= 0 && c < cols;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && visited[r][c] === 0) {
        count++;
        push(5, `Land at (${r}, ${c}) — island #${count}. Flood-fill it.`, [r, c]);
        // Iterative DFS.
        const stack: [number, number][] = [[r, c]];
        while (stack.length) {
          const [cr, cc] = stack.pop()!;
          if (!inBounds(cr, cc) || grid[cr][cc] === "0" || visited[cr][cc] !== 0) continue;
          visited[cr][cc] = count;
          push(14, `Sink (${cr}, ${cc}) into island #${count}, then explore its neighbours.`, [cr, cc]);
          stack.push([cr + 1, cc], [cr - 1, cc], [cr, cc + 1], [cr, cc - 1]);
        }
      }
    }
  }

  push(10, `Finished — the grid has ${count} island(s).`, null);
  return steps;
}
