import { describe, it, expect } from "vitest";
import { robotSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (instructions: string) => {
  const steps = robotSteps(instructions);
  return steps[steps.length - 1].data.answer;
};

describe("robotSteps", () => {
  it("decides whether the robot is bounded", () => {
    expect(solve("GGLLGG")).toBe(true);
    expect(solve("GG")).toBe(false);
    expect(solve("GL")).toBe(true);
    expect(solve("GGRGGLGG")).toBe(false); // ends at (2,4) facing north → escapes
    expect(solve("GLRLLGLL")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of robotSteps("GLRLLGLL")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
