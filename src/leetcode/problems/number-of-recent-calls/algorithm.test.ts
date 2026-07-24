import { describe, it, expect } from "vitest";
import { recentCallsSteps } from "./algorithm";
import { CODE } from "./code";

const counts = (pings: number[]) =>
  recentCallsSteps(pings)
    .filter((s) => s.data.result !== null)
    .map((s) => s.data.result);

describe("recentCallsSteps", () => {
  it("counts pings within the trailing 3000 ms window", () => {
    expect(counts([1, 100, 3001, 3002])).toEqual([1, 2, 3, 3]);
    expect(counts([1, 100, 3001, 3002, 6500])).toEqual([1, 2, 3, 3, 1]);
    expect(counts([1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of recentCallsSteps([1, 100, 3001, 3002, 6500])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
