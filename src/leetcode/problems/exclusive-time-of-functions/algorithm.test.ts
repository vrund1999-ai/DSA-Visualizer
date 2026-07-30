import { describe, it, expect } from "vitest";
import { exclusiveSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, logs: string[]) => {
  const steps = exclusiveSteps(n, logs);
  return steps[steps.length - 1].data.answer;
};

describe("exclusiveSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"])).toEqual([3, 4]);
    expect(
      solve(1, ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"]),
    ).toEqual([8]);
    expect(solve(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"])).toEqual([7, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of exclusiveSteps(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
