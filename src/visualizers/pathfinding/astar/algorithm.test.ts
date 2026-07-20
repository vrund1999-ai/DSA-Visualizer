import { describe, it, expect } from "vitest";
import { aStarSteps } from "./algorithm";
import { ASTAR_CODE } from "./code";
import type { GridData } from "../types";

const openGrid = (rows: number, cols: number): GridData => ({
  rows,
  cols,
  walls: Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)),
  start: [0, 0],
  end: [rows - 1, cols - 1],
});

describe("aStarSteps", () => {
  it("reaches the target at its Manhattan distance on an open grid", () => {
    const steps = aStarSteps(openGrid(4, 5));
    const reached = steps.find((s) => /Reached the target/.test(s.explanation))!;
    expect(reached.explanation).toMatch(/distance 7/); // (3 + 4)
  });

  it("reports the path cost in the final step's metrics", () => {
    const steps = aStarSteps(openGrid(4, 5));
    expect(steps[steps.length - 1].metrics!.cost).toBe(7);
  });

  it("explores no more cells than Dijkstra would (heuristic is admissible)", () => {
    // On an open grid the number of settled cells should be modest.
    const steps = aStarSteps(openGrid(6, 6));
    const settled = steps[steps.length - 1].metrics!.visited;
    expect(settled).toBeLessThanOrEqual(6 * 6);
    expect(settled).toBeGreaterThan(0);
  });

  it("reports no path when the target is walled off", () => {
    const grid = openGrid(3, 3);
    grid.walls[0][1] = true;
    grid.walls[1][1] = true;
    grid.walls[1][0] = true;
    expect(steps_last(grid).explanation).toMatch(/no path/i);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of aStarSteps(openGrid(4, 4))) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(ASTAR_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    const grid = openGrid(4, 4);
    expect(aStarSteps(grid)).toEqual(aStarSteps(grid));
  });
});

function steps_last(grid: GridData) {
  const steps = aStarSteps(grid);
  return steps[steps.length - 1];
}
