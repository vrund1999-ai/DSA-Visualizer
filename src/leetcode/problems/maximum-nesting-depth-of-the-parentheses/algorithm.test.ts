import { describe, it, expect } from "vitest";
import { nestingSteps } from "./algorithm";
import { CODE } from "./code";

const depth = (s: string) => {
  const steps = nestingSteps(s);
  return steps[steps.length - 1].data.max;
};

describe("nestingSteps", () => {
  it("returns the peak nesting depth", () => {
    expect(depth("(1+(2*3)+((8)/4))+1")).toBe(3);
    expect(depth("(1)+((2))+(((3)))")).toBe(3);
    expect(depth("1+2*3")).toBe(0);
    expect(depth("()(())((()()))")).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nestingSteps("(1+(2*3)+((8)/4))+1")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
