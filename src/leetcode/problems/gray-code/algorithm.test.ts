import { describe, it, expect } from "vitest";
import { graySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = graySteps(n);
  return steps[steps.length - 1].data.answer!;
};

const validGray = (seq: number[], n: number) => {
  if (seq.length !== 1 << n) return false;
  if (new Set(seq).size !== seq.length) return false;
  const popcount = (x: number) => x.toString(2).split("").filter((c) => c === "1").length;
  for (let i = 0; i < seq.length; i++) {
    if (popcount(seq[i] ^ seq[(i + 1) % seq.length]) !== 1) return false;
  }
  return seq[0] === 0;
};

describe("graySteps", () => {
  it("produces a valid gray code sequence", () => {
    expect(solve(2)).toEqual([0, 1, 3, 2]);
    for (const n of [1, 2, 3, 4]) expect(validGray(solve(n), n)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of graySteps(3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
