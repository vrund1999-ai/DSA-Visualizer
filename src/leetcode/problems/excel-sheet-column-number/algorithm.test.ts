import { describe, it, expect } from "vitest";
import { excelSteps } from "./algorithm";
import { CODE } from "./code";

const num = (s: string) => {
  const steps = excelSteps(s);
  return steps[steps.length - 1].data.result;
};

describe("excelSteps", () => {
  it("converts column titles to numbers", () => {
    expect(num("A")).toBe(1);
    expect(num("Z")).toBe(26);
    expect(num("AB")).toBe(28);
    expect(num("ZY")).toBe(701);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of excelSteps("ZY")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
