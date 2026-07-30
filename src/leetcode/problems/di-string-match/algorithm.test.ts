import { describe, it, expect } from "vitest";
import { diMatchSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = diMatchSteps(s);
  return steps[steps.length - 1].data.answer!;
};

const matches = (s: string, perm: number[]) => {
  if (perm.length !== s.length + 1) return false;
  if ([...perm].sort((a, b) => a - b).join() !== Array.from({ length: s.length + 1 }, (_, i) => i).join()) return false;
  return [...s].every((ch, i) => (ch === "I" ? perm[i] < perm[i + 1] : perm[i] > perm[i + 1]));
};

describe("diMatchSteps", () => {
  it("produces a valid DI permutation", () => {
    for (const s of ["IDID", "III", "DDI", "D", "I", "IIDDIID"]) {
      expect(matches(s, solve(s))).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of diMatchSteps("IDID")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
