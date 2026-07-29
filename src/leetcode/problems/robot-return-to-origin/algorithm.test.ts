import { describe, it, expect } from "vitest";
import { robotSteps } from "./algorithm";
import { CODE } from "./code";

const returns = (moves: string) => {
  const steps = robotSteps(moves);
  return steps[steps.length - 1].data.answer;
};

describe("robotSteps", () => {
  it("checks whether the robot returns to origin", () => {
    expect(returns("UD")).toBe(true);
    expect(returns("LL")).toBe(false);
    expect(returns("UDLRUURD")).toBe(false);
    expect(returns("RRDD")).toBe(false);
    expect(returns("LDRRLRUULR")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of robotSteps("UDLRUURD")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
