import { describe, it, expect } from "vitest";
import { taskSteps } from "./algorithm";
import { CODE } from "./code";

const least = (tasks: string[], n: number) => {
  const steps = taskSteps({ tasks, n });
  return steps[steps.length - 1].data.answer;
};

describe("taskSteps", () => {
  it("computes the least interval", () => {
    expect(least(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
    expect(least(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
    expect(least(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)).toBe(16);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of taskSteps({ tasks: ["A", "A", "A", "B", "B", "B"], n: 2 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
