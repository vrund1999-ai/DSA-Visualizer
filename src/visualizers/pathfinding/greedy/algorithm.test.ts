import { describe, it, expect } from "vitest";
import { greedySteps } from "./algorithm";
import { GREEDY_CODE } from "./code";
import type { GridData } from "../types";

const last = <T>(a: T[]): T => a[a.length - 1];
const openGrid = (rows: number, cols: number): GridData => ({
  rows,
  cols,
  walls: Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)),
  start: [0, 0],
  end: [rows - 1, cols - 1],
});

describe("greedySteps", () => {
  it("reaches the target on an open grid", () => {
    const steps = greedySteps(openGrid(5, 6));
    expect(steps.some((s) => /Reached the target/.test(s.explanation))).toBe(true);
    expect(last(steps).highlights.some((h) => h.role === "path" || h.role === "current")).toBe(true);
  });

  it("reports no path when walled off", () => {
    const grid = openGrid(3, 3);
    grid.walls[0][1] = true;
    grid.walls[1][1] = true;
    grid.walls[1][0] = true;
    expect(last(greedySteps(grid)).explanation).toMatch(/no path/i);
  });

  it("keeps line indices in bounds", () => {
    for (const s of greedySteps(openGrid(4, 4))) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(GREEDY_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    const g = openGrid(4, 4);
    expect(greedySteps(g)).toEqual(greedySteps(g));
  });
});
