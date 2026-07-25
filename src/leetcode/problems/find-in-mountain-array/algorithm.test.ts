import { describe, it, expect } from "vitest";
import { mountainSteps } from "./algorithm";
import { CODE } from "./code";

const find = (target: number, arr: number[]) => {
  const steps = mountainSteps(target, arr);
  return steps[steps.length - 1].data.answer;
};

describe("mountainSteps", () => {
  it("finds the minimum matching index", () => {
    expect(find(3, [1, 2, 3, 4, 5, 3, 1])).toBe(2);
    expect(find(3, [0, 1, 2, 4, 2, 1])).toBe(-1);
    expect(find(5, [1, 2, 3, 4, 5, 3, 1])).toBe(4); // peak
    expect(find(1, [1, 5, 2])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mountainSteps(3, [1, 2, 3, 4, 5, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
