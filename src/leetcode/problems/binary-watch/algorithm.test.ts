import { describe, it, expect } from "vitest";
import { watchSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (turnedOn: number) => {
  const steps = watchSteps(turnedOn);
  return steps[steps.length - 1].data.answer!;
};

describe("watchSteps", () => {
  it("lists all valid watch times", () => {
    expect(new Set(solve(1))).toEqual(new Set(["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"]));
    expect(solve(0)).toEqual(["0:00"]);
    expect(solve(9)).toEqual([]);
    expect(solve(2).length).toBe(44);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of watchSteps(2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
