import { describe, it, expect } from "vitest";
import { max69Steps } from "./algorithm";
import { CODE } from "./code";

const solve = (num: number) => {
  const steps = max69Steps(num);
  return steps[steps.length - 1].data.answer;
};

describe("max69Steps", () => {
  it("matches the canonical examples", () => {
    expect(solve(9669)).toBe(9969);
    expect(solve(9996)).toBe(9999);
    expect(solve(9999)).toBe(9999);
    expect(solve(6)).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of max69Steps(9669)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
