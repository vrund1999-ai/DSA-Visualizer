import { describe, it, expect } from "vitest";
import { geneSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (start: string, end: string, bank: string[]) => {
  const steps = geneSteps(start, end, bank);
  return steps[steps.length - 1].data.answer;
};

describe("geneSteps", () => {
  it("finds the minimum number of mutations", () => {
    expect(solve("AACCGGTT", "AACCGGTA", ["AACCGGTA"])).toBe(1);
    expect(solve("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])).toBe(2);
    expect(solve("AAAAACCC", "AACCCCCC", ["AAAACCCC", "AAACCCCC", "AACCCCCC"])).toBe(3);
  });

  it("returns -1 when the target is unreachable", () => {
    expect(solve("AACCGGTT", "AACCGGTA", [])).toBe(-1);
    expect(solve("AACCGGTT", "AAAAAAAA", ["AACCGGTA"])).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of geneSteps("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
