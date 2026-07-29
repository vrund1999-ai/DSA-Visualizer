import { describe, it, expect } from "vitest";
import { moveBallsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (boxes: string) => {
  const steps = moveBallsSteps(boxes);
  return steps[steps.length - 1].data.answer;
};

// O(n^2) reference.
const brute = (boxes: string) =>
  boxes.split("").map((_, i) =>
    boxes.split("").reduce((acc, ch, j) => acc + (ch === "1" ? Math.abs(i - j) : 0), 0),
  );

describe("moveBallsSteps", () => {
  it("matches the pairwise distance reference", () => {
    for (const boxes of ["110", "001011", "1", "0", "1001", "111000"]) {
      expect(solve(boxes)).toEqual(brute(boxes));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of moveBallsSteps("001011")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
