import type { Highlight, HighlightRole } from "@/core/types";
import type { Cell, GridData } from "./types";

/** Stable string key for a cell, e.g. "3,7". Matches Highlight.ref. */
export const keyOf = (r: number, c: number): string => `${r},${c}`;
export const parseKey = (k: string): Cell => {
  const [r, c] = k.split(",").map(Number);
  return [r, c];
};

/** 4-neighbourhood in a fixed order (up, right, down, left) for determinism. */
const DIRS: Cell[] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function neighbors(grid: GridData, r: number, c: number): Cell[] {
  const out: Cell[] = [];
  for (const [dr, dc] of DIRS) {
    const nr = r + dr;
    const nc = c + dc;
    if (nr < 0 || nc < 0 || nr >= grid.rows || nc >= grid.cols) continue;
    if (grid.walls[nr][nc]) continue;
    out.push([nr, nc]);
  }
  return out;
}

/**
 * Build a grid with start on the left, end on the right, and random walls
 * (never on the start or end cells). Density is modest so most mazes have a
 * path; when they don't, the algorithm simply reports "no path".
 */
export function makeGrid(rows = 10, cols = 22, density = 0.25): GridData {
  const start: Cell = [Math.floor(rows / 2), 1];
  const end: Cell = [Math.floor(rows / 2), cols - 2];
  const walls = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.random() < density),
  );
  walls[start[0]][start[1]] = false;
  walls[end[0]][end[1]] = false;
  return { rows, cols, walls, start, end };
}

/** Toggle a wall at (r, c), returning a new grid (never touches start/end). */
export function toggleWall(grid: GridData, r: number, c: number): GridData {
  const [sr, sc] = grid.start;
  const [er, ec] = grid.end;
  if ((r === sr && c === sc) || (r === er && c === ec)) return grid;
  const walls = grid.walls.map((row) => [...row]);
  walls[r][c] = !walls[r][c];
  return { ...grid, walls };
}

/** Rebuild the shortest path from a prev-map (end → start), start→end order. */
export function reconstructPath(
  prev: Map<string, string>,
  startKey: string,
  endKey: string,
): string[] {
  if (!prev.has(endKey) && startKey !== endKey) return [];
  const path: string[] = [];
  let cur: string | undefined = endKey;
  while (cur !== undefined) {
    path.push(cur);
    if (cur === startKey) break;
    cur = prev.get(cur);
  }
  return path.reverse();
}

/**
 * Build highlights for the current search state. Precedence (low→high):
 * visited < frontier < path < current. Distance labels ride along as badges.
 */
export function buildHighlights(opts: {
  visited?: Set<string>;
  frontier?: Iterable<string>;
  path?: Iterable<string>;
  current?: string | null;
  distances?: Map<string, number>;
}): Highlight[] {
  const { visited, frontier, path, current, distances } = opts;
  const roles = new Map<string, HighlightRole>();
  visited?.forEach((k) => roles.set(k, "visited"));
  if (frontier) for (const k of frontier) roles.set(k, "active");
  if (path) for (const k of path) roles.set(k, "path");
  if (current) roles.set(current, "current");

  return [...roles].map(([ref, role]) => {
    const d = distances?.get(ref);
    return {
      ref,
      role,
      badge: d !== undefined && Number.isFinite(d) ? String(d) : undefined,
    };
  });
}
