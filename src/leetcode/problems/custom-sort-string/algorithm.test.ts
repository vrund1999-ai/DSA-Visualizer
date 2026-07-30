import { describe, it, expect } from "vitest";
import { customSortSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (order: string, s: string) => {
  const steps = customSortSteps(order, s);
  return steps[steps.length - 1].data.answer!;
};

const valid = (order: string, s: string, res: string) => {
  // same multiset
  if ([...res].sort().join("") !== [...s].sort().join("")) return false;
  // characters in order appear in non-decreasing priority
  const rank = (c: string) => (order.indexOf(c) < 0 ? Infinity : order.indexOf(c));
  const ranks = [...res].map(rank).filter((r) => r !== Infinity);
  return ranks.every((r, i) => i === 0 || ranks[i - 1] <= r);
};

describe("customSortSteps", () => {
  it("orders characters by the custom priority", () => {
    expect(solve("cba", "abcd")).toBe("cbad");
    for (const [o, s] of [["cba", "abcd"], ["bcafg", "abcd"], ["kqep", "pekeq"], ["exv", "xwvee"]] as [string, string][]) {
      expect(valid(o, s, solve(o, s))).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of customSortSteps("cba", "abcd")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
