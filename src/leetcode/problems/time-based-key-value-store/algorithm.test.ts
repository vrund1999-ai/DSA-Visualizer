import { describe, it, expect } from "vitest";
import { timeMapSteps, type TimeOp } from "./algorithm";
import { CODE } from "./code";

const run = (ops: TimeOp[]) => {
  const steps = timeMapSteps(ops);
  return steps[steps.length - 1].data.answer;
};

describe("timeMapSteps", () => {
  it("returns the newest value at or before each query time", () => {
    const ops: TimeOp[] = [
      ["set", "foo", "bar", 1],
      ["get", "foo", 1],
      ["get", "foo", 3],
      ["set", "foo", "bar2", 4],
      ["get", "foo", 4],
      ["get", "foo", 5],
    ];
    expect(run(ops)).toEqual(["bar", "bar", "bar2", "bar2"]);
  });

  it("returns empty string when nothing is old enough", () => {
    expect(run([["set", "a", "x", 5], ["get", "a", 3], ["get", "b", 10]])).toEqual(["", ""]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of timeMapSteps([["set", "foo", "bar", 1], ["get", "foo", 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
