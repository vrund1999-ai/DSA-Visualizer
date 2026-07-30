import { describe, it, expect } from "vitest";
import { infectSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[], start: number) => {
  const steps = infectSteps(heap, start);
  return steps[steps.length - 1].data.answer;
};

describe("infectSteps", () => {
  it("computes the minutes to infect the whole tree", () => {
    // complete tree [1,5,3,7,4,10,6], start 6: 6->3->{1,10}->5->{7,4} = 4 minutes
    expect(solve([1, 5, 3, 7, 4, 10, 6], 6)).toBe(4);
    // start at root of the same tree: farthest leaf is 2 edges away
    expect(solve([1, 5, 3, 7, 4, 10, 6], 1)).toBe(2);
    // single node
    expect(solve([1], 1)).toBe(0);
    // start at a leaf of a left chain [1,2,null,3]: 3->2->1 = 2
    expect(solve([1, 2, null, 3], 3)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of infectSteps([1, 5, 3, 7, 4, 10, 6], 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
