import { describe, it, expect } from "vitest";
import { grammarSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, k: number) => {
  const steps = grammarSteps(n, k);
  return steps[steps.length - 1].data.answer;
};

// reference: build the row for small n
function brute(n: number, k: number): number {
  let row = "0";
  for (let r = 2; r <= n; r++) {
    row = row.split("").map((c) => (c === "0" ? "01" : "10")).join("");
  }
  return Number(row[k - 1]);
}

describe("grammarSteps", () => {
  it("finds the k-th grammar symbol", () => {
    expect(solve(1, 1)).toBe(0);
    expect(solve(2, 1)).toBe(0);
    expect(solve(2, 2)).toBe(1);
    expect(solve(4, 5)).toBe(1);
    for (let k = 1; k <= 16; k++) expect(solve(5, k)).toBe(brute(5, k));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of grammarSteps(5, 11)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
