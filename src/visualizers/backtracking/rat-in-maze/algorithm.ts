import type { GridInput, GridStep } from "../../pathfinding/types";
import { keyOf, neighbors, buildHighlights } from "../../pathfinding/grid";

/**
 * Pure step generator for rat-in-a-maze: depth-first search with backtracking
 * that carves a path from start to exit, retreating at dead ends. Reuses the
 * pathfinding grid model and renderer. `line` points into RAT_MAZE_CODE.
 */
export function ratInMazeSteps(input: GridInput): GridStep[] {
  const [sr, sc] = input.start;
  const [er, ec] = input.end;
  const steps: GridStep[] = [];
  const visited = new Set<string>();
  const path: string[] = [];
  let backtracks = 0;
  let found = false;

  const push = (line: number, explanation: string, current: string | null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: input,
      highlights: buildHighlights({ visited, path: new Set(path), current }),
      metrics: { pathLength: path.length, backtracks },
    });
  };

  const solve = (r: number, c: number): boolean => {
    const k = keyOf(r, c);
    if (visited.has(k)) return false;
    visited.add(k);
    path.push(k);
    push(2, `Step onto (${r}, ${c}).`, k);

    if (r === er && c === ec) {
      found = true;
      push(3, `Reached the exit at (${r}, ${c})!`, k);
      return true;
    }
    for (const [nr, nc] of neighbors(input, r, c)) {
      if (solve(nr, nc)) return true;
    }
    path.pop();
    backtracks++;
    push(6, `Dead end at (${r}, ${c}) — backtrack.`, path.length ? path[path.length - 1] : null);
    return false;
  };

  push(0, "Explore the maze depth-first, backtracking whenever a path dead-ends.", keyOf(sr, sc));
  solve(sr, sc);

  if (found) push(3, "A path from start to exit was found.", keyOf(er, ec));
  else push(7, "Every route was exhausted — no path from start to exit.", null);

  return steps;
}
