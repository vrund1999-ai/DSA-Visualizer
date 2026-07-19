import { describe, it, expect } from "vitest";
import { frontierSearch } from "../search";
import { DFS_CODE } from "./code";
import type { GridData } from "../types";

const openGrid = (rows: number, cols: number): GridData => ({
  rows,
  cols,
  walls: Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)),
  start: [0, 0],
  end: [rows - 1, cols - 1],
});

const endReached = (steps: ReturnType<typeof frontierSearch>) =>
  steps.some((s) => /reached the target/i.test(s.explanation));

describe("frontierSearch (DFS)", () => {
  it("finds a path to the target on an open grid", () => {
    const steps = frontierSearch(openGrid(4, 5), "dfs");
    expect(endReached(steps)).toBe(true);
    const last = steps[steps.length - 1];
    expect(last.highlights.some((h) => h.role === "path" || h.role === "current")).toBe(true);
  });

  it("reports no path when the target is walled off", () => {
    const grid = openGrid(3, 3);
    grid.walls[0][1] = true;
    grid.walls[1][1] = true;
    grid.walls[1][0] = true;
    const steps = frontierSearch(grid, "dfs");
    expect(steps[steps.length - 1].explanation).toMatch(/no path/i);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of frontierSearch(openGrid(4, 4), "dfs")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(DFS_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    const grid = openGrid(4, 4);
    expect(frontierSearch(grid, "dfs")).toEqual(frontierSearch(grid, "dfs"));
  });
});
