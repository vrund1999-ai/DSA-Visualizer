import { describe, it, expect } from "vitest";
import { fibSubseqSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[]) => {
  const steps = fibSubseqSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("fibSubseqSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 2, 3, 4, 5, 6, 7, 8])).toBe(5); // 1,2,3,5,8
    expect(solve([1, 3, 7, 11, 12, 14, 18])).toBe(3); // e.g. 1,11,12
    expect(solve([1, 2, 4, 8, 16])).toBe(0);
  });

  it("reconstructs a valid Fibonacci-like subsequence", () => {
    const steps = fibSubseqSteps([1, 2, 3, 4, 5, 6, 7, 8]);
    const seq = steps[steps.length - 1].data.bestSeq!;
    for (let i = 2; i < seq.length; i++) expect(seq[i]).toBe(seq[i - 1] + seq[i - 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fibSubseqSteps([1, 2, 3, 4, 5, 6, 7, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
