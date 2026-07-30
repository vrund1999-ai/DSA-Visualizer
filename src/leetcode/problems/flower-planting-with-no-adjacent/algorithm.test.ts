import { describe, it, expect } from "vitest";
import { gardenSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, paths: number[][]) => {
  const steps = gardenSteps(n, paths);
  return steps[steps.length - 1].data.answer!;
};

const valid = (n: number, paths: number[][], color: number[]) => {
  if (color.length !== n) return false;
  if (color.some((c) => c < 1 || c > 4)) return false;
  return paths.every(([a, b]) => color[a - 1] !== color[b - 1]);
};

describe("gardenSteps", () => {
  it("produces a valid 4-coloring", () => {
    const cases: [number, number[][]][] = [
      [3, [[1, 2], [2, 3], [3, 1]]],
      [4, [[1, 2], [3, 4]]],
      [4, [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3]]],
      [1, []],
    ];
    for (const [n, paths] of cases) expect(valid(n, paths, solve(n, paths))).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of gardenSteps(4, [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
