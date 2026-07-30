import { describe, it, expect } from "vitest";
import { slashesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: string[]) => {
  const steps = slashesSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("slashesSteps", () => {
  it("counts regions cut by slashes", () => {
    expect(solve([" /", "/ "])).toBe(2);
    expect(solve([" /", "  "])).toBe(1);
    expect(solve(["/\\", "\\/"])).toBe(5);
    expect(solve(["\\/", "/\\"])).toBe(4);
    expect(solve(["  ", "  "])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of slashesSteps([" /", "/ "])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
