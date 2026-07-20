import { describe, it, expect } from "vitest";
import { lcsSteps, type LCSInput } from "./algorithm";
import { LCS_CODE } from "./code";

/** Reference LCS length. */
const lcsLen = (a: string, b: string): number => {
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0),
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[a.length][b.length];
};

const input: LCSInput = { a: "ABCBDAB", b: "BDCAB" };

describe("lcsSteps", () => {
  it("computes the correct LCS length in the answer cell", () => {
    const steps = lcsSteps(input);
    const last = steps[steps.length - 1];
    expect(last.data.cells[input.a.length][input.b.length]).toBe(
      lcsLen(input.a, input.b),
    );
  });

  it("matches the reference on random strings", () => {
    const A = "ABCD";
    const rnd = (n: number) =>
      Array.from({ length: n }, () => A[Math.floor(Math.random() * 4)]).join("");
    for (let t = 0; t < 20; t++) {
      const inst = { a: rnd(6), b: rnd(6) };
      const steps = lcsSteps(inst);
      const answer = steps[steps.length - 1].data.cells[inst.a.length][inst.b.length];
      expect(answer).toBe(lcsLen(inst.a, inst.b));
    }
  });

  it("never computes a cell before its dependencies exist", () => {
    for (const s of lcsSteps(input)) {
      for (let r = 1; r < s.data.rows; r++) {
        for (let c = 1; c < s.data.cols; c++) {
          if (s.data.cells[r][c] !== null) {
            expect(s.data.cells[r - 1][c - 1]).not.toBeNull();
            expect(s.data.cells[r - 1][c]).not.toBeNull();
            expect(s.data.cells[r][c - 1]).not.toBeNull();
          }
        }
      }
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of lcsSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(LCS_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(lcsSteps(input)).toEqual(lcsSteps(input));
  });
});
