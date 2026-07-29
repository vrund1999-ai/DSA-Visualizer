import { describe, it, expect } from "vitest";
import { partitionSteps } from "./algorithm";
import { CODE } from "./code";

const partition = (s: string) => {
  const steps = partitionSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("partitionSteps", () => {
  it("computes the greedy partition sizes", () => {
    expect(partition("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
    expect(partition("eccbbbbdec")).toEqual([10]);
    expect(partition("abc")).toEqual([1, 1, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of partitionSteps("ababcbacadefegdehijhklij")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
