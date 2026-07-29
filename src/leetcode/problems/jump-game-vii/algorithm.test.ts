import { describe, it, expect } from "vitest";
import { jumpVIISteps } from "./algorithm";
import { CODE } from "./code";

const canReach = (s: string, minJump: number, maxJump: number) => {
  const steps = jumpVIISteps(s, minJump, maxJump);
  return steps[steps.length - 1].data.answer;
};

describe("jumpVIISteps", () => {
  it("decides reachability of the last index", () => {
    expect(canReach("011010", 2, 3)).toBe(true);
    expect(canReach("01101110", 2, 3)).toBe(false);
    expect(canReach("0000000000", 2, 5)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of jumpVIISteps("011010", 2, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
