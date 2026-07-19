import { describe, it, expect } from "vitest";
import { frontierSearch } from "../search";
import { BFS_CODE } from "./code";
import type { GridData } from "../types";

const openGrid = (rows: number, cols: number): GridData => ({
  rows,
  cols,
  walls: Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)),
  start: [0, 0],
  end: [rows - 1, cols - 1],
});

/** Cells shown as path (role path/current) in the final step. */
const pathCells = (steps: ReturnType<typeof frontierSearch>) => {
  const last = steps[steps.length - 1];
  return last.highlights
    .filter((h) => h.role === "path" || h.role === "current")
    .map((h) => h.ref);
};

describe("frontierSearch (BFS)", () => {
  it("finds a shortest path on an open grid (Manhattan length + 1 cells)", () => {
    const grid = openGrid(4, 5);
    const steps = frontierSearch(grid, "bfs");
    // shortest path corner-to-corner = (3 + 4) moves ⇒ 8 cells
    expect(pathCells(steps)).toHaveLength(8);
  });

  it("reports no path when the target is walled off", () => {
    const grid = openGrid(3, 3);
    grid.walls[0][1] = true;
    grid.walls[1][1] = true;
    grid.walls[1][0] = true; // fully enclose start
    const steps = frontierSearch(grid, "bfs");
    expect(steps[steps.length - 1].explanation).toMatch(/no path/i);
  });

  it("every step's line index is within the code bounds", () => {
    const steps = frontierSearch(openGrid(4, 4), "bfs");
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(BFS_CODE.length);
    }
  });

  it("visited count is monotonically non-decreasing", () => {
    const steps = frontierSearch(openGrid(4, 4), "bfs");
    let visited = 0;
    for (const s of steps) {
      expect(s.metrics!.visited).toBeGreaterThanOrEqual(visited);
      visited = s.metrics!.visited;
    }
  });

  it("is deterministic (pure)", () => {
    const grid = openGrid(4, 4);
    expect(frontierSearch(grid, "bfs")).toEqual(frontierSearch(grid, "bfs"));
  });
});
