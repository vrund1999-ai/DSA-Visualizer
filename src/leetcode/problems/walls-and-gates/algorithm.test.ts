import { describe, it, expect } from "vitest";
import { INF, wallsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (rooms: number[][]) => {
  const steps = wallsSteps(rooms);
  return steps[steps.length - 1].data.rooms;
};

describe("wallsSteps", () => {
  it("fills rooms with distance to the nearest gate", () => {
    expect(
      solve([
        [INF, -1, 0, INF],
        [INF, INF, INF, -1],
        [INF, -1, INF, -1],
        [0, -1, INF, INF],
      ]),
    ).toEqual([
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4],
    ]);
    expect(solve([[0]])).toEqual([[0]]);
    expect(solve([[INF]])).toEqual([[INF]]);
  });

  it("does not mutate the caller's grid", () => {
    const rooms = [[0, INF]];
    wallsSteps(rooms);
    expect(rooms).toEqual([[0, INF]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wallsSteps([[INF, -1, 0, INF], [INF, INF, INF, -1], [INF, -1, INF, -1], [0, -1, INF, INF]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
