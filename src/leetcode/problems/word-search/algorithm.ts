import type { Step } from "@/core/types";

export interface WordSearchData {
  grid: string[][];
  word: string;
  /** Cells on the current partial match path, in order. */
  path: [number, number][];
  current: [number, number] | null;
  found: boolean;
}

export type WordSearchStep = Step<WordSearchData>;

/**
 * Backtracking DFS: from each starting cell, walk to neighbours as long as they
 * spell the next letter, marking cells visited so a path can't reuse one. On a
 * dead end we undo the mark and try another direction. `line` indexes CODE.
 */
export function wordSearchSteps(input: string[][], word: string): WordSearchStep[] {
  const grid = input.map((row) => [...row]);
  const R = grid.length;
  const C = R ? grid[0].length : 0;
  const steps: WordSearchStep[] = [];
  const path: [number, number][] = [];
  const visited = new Set<string>();
  let found = false;

  const snap = (current: [number, number] | null): WordSearchData => ({
    grid: grid.map((r) => [...r]),
    word,
    path: path.map((p) => [...p] as [number, number]),
    current,
    found,
  });
  const push = (line: number, explanation: string, current: [number, number] | null) => {
    steps.push({ id: steps.length, line, explanation, data: snap(current), highlights: [], metrics: { matched: path.length } });
  };

  const dfs = (r: number, c: number, k: number): boolean => {
    if (r < 0 || r >= R || c < 0 || c >= C || visited.has(`${r},${c}`)) return false;
    if (grid[r][c] !== word[k]) {
      push(5, `(${r}, ${c}) = '${grid[r][c]}' ≠ '${word[k]}' — dead end.`, [r, c]);
      return false;
    }
    path.push([r, c]);
    visited.add(`${r},${c}`);
    push(7, `(${r}, ${c}) = '${word[k]}' matches letter ${k + 1}. Extend the path.`, [r, c]);

    if (k === word.length - 1) {
      found = true;
      push(3, `Matched the whole word "${word}"!`, [r, c]);
      return true;
    }

    const dirs: [number, number][] = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];
    for (const [nr, nc] of dirs) {
      if (dfs(nr, nc, k + 1)) return true;
    }

    path.pop();
    visited.delete(`${r},${c}`);
    push(10, `No neighbour continues "${word}" from (${r}, ${c}) — backtrack.`, [r, c]);
    return false;
  };

  push(1, `Search the grid for a path spelling "${word}".`, null);
  for (let r = 0; r < R && !found; r++) {
    for (let c = 0; c < C && !found; c++) {
      if (grid[r][c] === word[0]) dfs(r, c, 0);
    }
  }

  push(found ? 15 : 16, found ? `Word found — highlighted path spells "${word}".` : `"${word}" is not present in the grid.`, null);
  return steps;
}
