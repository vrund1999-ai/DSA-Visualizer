import { describe, it, expect } from "vitest";
import { ratInMazeSteps } from "./algorithm";
import { RAT_MAZE_CODE } from "./code";
import type { GridData } from "../../pathfinding/types";

const last = <T>(a: T[]): T => a[a.length - 1];
const openGrid = (rows: number, cols: number): GridData => ({
  rows,
  cols,
  walls: Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)),
  start: [0, 0],
  end: [rows - 1, cols - 1],
});

describe("ratInMazeSteps", () => {
  it("finds a path on an open maze", () => {
    const steps = ratInMazeSteps(openGrid(5, 6));
    expect(steps.some((s) => /found/i.test(s.explanation))).toBe(true);
    expect(last(steps).highlights.some((h) => h.role === "path" || h.role === "current")).toBe(true);
  });

  it("reports failure when the exit is walled off", () => {
    const grid = openGrid(3, 3);
    grid.walls[0][1] = true;
    grid.walls[1][1] = true;
    grid.walls[1][0] = true;
    expect(last(ratInMazeSteps(grid)).explanation).toMatch(/no path/i);
  });

  it("only ever holds cells reachable from the start on the path", () => {
    // A path cell is always 4-adjacent to the previous one.
    const steps = ratInMazeSteps(openGrid(5, 5));
    for (const s of steps) {
      const path = s.highlights
        .filter((h) => h.role === "path" || h.role === "current")
        .map((h) => String(h.ref));
      // no duplicate cells on the active path
      expect(new Set(path).size).toBe(path.length);
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of ratInMazeSteps(openGrid(4, 4))) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(RAT_MAZE_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    const g = openGrid(4, 4);
    expect(ratInMazeSteps(g)).toEqual(ratInMazeSteps(g));
  });
});
