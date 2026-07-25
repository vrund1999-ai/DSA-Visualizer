import { describe, it, expect } from "vitest";
import { evenNumSteps } from "./algorithm";
import { CODE } from "./code";

const evens = (digits: number[]) => {
  const steps = evenNumSteps(digits);
  return steps[steps.length - 1].data.answer;
};

describe("evenNumSteps", () => {
  it("finds all formable 3-digit even numbers, sorted", () => {
    expect(evens([2, 1, 3, 0])).toEqual([102, 120, 130, 132, 210, 230, 302, 310, 312, 320]);
    expect(evens([2, 2, 8, 8, 2])).toEqual([222, 228, 282, 288, 822, 828, 882]);
    expect(evens([3, 7, 5])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of evenNumSteps([2, 1, 3, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
