import { describe, it, expect } from "vitest";
import { spiral2Steps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = spiral2Steps(n);
  return steps[steps.length - 1].data.answer;
};

describe("spiral2Steps", () => {
  it("generates the spiral matrix", () => {
    expect(solve(1)).toEqual([[1]]);
    expect(solve(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
    expect(solve(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]);
  });

  it("uses every number 1..n² exactly once", () => {
    const flat = solve(5)!.flat().sort((a, b) => a - b);
    expect(flat).toEqual(Array.from({ length: 25 }, (_, i) => i + 1));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of spiral2Steps(4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
