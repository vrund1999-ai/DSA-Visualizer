import { describe, it, expect } from "vitest";
import { swapsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, pairs: number[][]) => {
  const steps = swapsSteps(s, pairs);
  return steps[steps.length - 1].data.answer;
};

describe("swapsSteps", () => {
  it("finds the lexicographically smallest string", () => {
    expect(solve("dcab", [[0, 3], [1, 2]])).toBe("bacd");
    expect(solve("dcab", [[0, 3], [1, 2], [0, 2]])).toBe("abcd");
    expect(solve("cba", [[0, 1], [1, 2]])).toBe("abc");
    expect(solve("dcabxy", [[0, 3], [1, 2], [3, 5]])).toBe("bacdxy");
    expect(solve("abc", [])).toBe("abc");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of swapsSteps("dcab", [[0, 3], [1, 2]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
