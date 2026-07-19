import { describe, it, expect } from "vitest";
import { dijkstraSteps } from "./algorithm";
import { DIJKSTRA_CODE } from "./code";
import type { GridData } from "../types";

const openGrid = (rows: number, cols: number): GridData => ({
  rows,
  cols,
  walls: Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)),
  start: [0, 0],
  end: [rows - 1, cols - 1],
});

describe("dijkstraSteps", () => {
  it("settles the target at its Manhattan distance on an open grid", () => {
    const steps = dijkstraSteps(openGrid(4, 5));
    const reached = steps.find((s) => /Reached the target/.test(s.explanation))!;
    // distance corner-to-corner on a 4x5 open grid = 3 + 4 = 7
    expect(reached.explanation).toMatch(/distance 7/);
  });

  it("reports the path cost in the final step's metrics", () => {
    const steps = dijkstraSteps(openGrid(4, 5));
    expect(steps[steps.length - 1].metrics!.cost).toBe(7);
  });

  it("reports no path when the target is walled off", () => {
    const grid = openGrid(3, 3);
    grid.walls[0][1] = true;
    grid.walls[1][1] = true;
    grid.walls[1][0] = true;
    const steps = dijkstraSteps(grid);
    expect(steps[steps.length - 1].explanation).toMatch(/no path/i);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of dijkstraSteps(openGrid(4, 4))) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(DIJKSTRA_CODE.length);
    }
  });

  it("visited count is monotonically non-decreasing", () => {
    let visited = 0;
    for (const s of dijkstraSteps(openGrid(4, 4))) {
      expect(s.metrics!.visited).toBeGreaterThanOrEqual(visited);
      visited = s.metrics!.visited;
    }
  });

  it("is deterministic (pure)", () => {
    const grid = openGrid(4, 4);
    expect(dijkstraSteps(grid)).toEqual(dijkstraSteps(grid));
  });
});
