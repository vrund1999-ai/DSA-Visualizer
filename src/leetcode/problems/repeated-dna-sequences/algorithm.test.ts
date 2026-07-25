import { describe, it, expect } from "vitest";
import { dnaSteps } from "./algorithm";
import { CODE } from "./code";

const repeated = (s: string) => {
  const steps = dnaSteps(s);
  return steps[steps.length - 1].data.answer!.sort();
};

describe("dnaSteps", () => {
  it("finds repeated 10-letter windows", () => {
    expect(repeated("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")).toEqual(["AAAAACCCCC", "CCCCCAAAAA"]);
    expect(repeated("AAAAAAAAAAAAA")).toEqual(["AAAAAAAAAA"]);
    expect(repeated("ACGT")).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dnaSteps("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
