import { describe, it, expect } from "vitest";
import { manhattanSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, k: number) => {
  const steps = manhattanSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("manhattanSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("NWSE", 1)).toBe(3);
    expect(solve("NSWWEW", 3)).toBe(6);
    expect(solve("N", 0)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of manhattanSteps("NWSE", 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
