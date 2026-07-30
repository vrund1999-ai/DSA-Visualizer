import { describe, it, expect } from "vitest";
import { freqStackSteps, type FreqOp } from "./algorithm";
import { CODE } from "./code";

const popResults = (ops: FreqOp[]) => {
  const steps = freqStackSteps(ops);
  return steps[steps.length - 1].data.results;
};

describe("freqStackSteps", () => {
  it("pops the most frequent, most recent element", () => {
    const ops: FreqOp[] = [
      { op: "push", val: 5 },
      { op: "push", val: 7 },
      { op: "push", val: 5 },
      { op: "push", val: 7 },
      { op: "push", val: 4 },
      { op: "push", val: 5 },
      { op: "pop" },
      { op: "pop" },
      { op: "pop" },
      { op: "pop" },
    ];
    expect(popResults(ops)).toEqual([5, 7, 5, 4]);
  });

  it("handles ties by recency", () => {
    expect(popResults([{ op: "push", val: 1 }, { op: "push", val: 2 }, { op: "pop" }])).toEqual([2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of freqStackSteps([{ op: "push", val: 5 }, { op: "pop" }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
