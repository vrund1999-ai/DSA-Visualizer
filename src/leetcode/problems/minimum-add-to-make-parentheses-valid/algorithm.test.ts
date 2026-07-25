import { describe, it, expect } from "vitest";
import { minAddSteps } from "./algorithm";
import { CODE } from "./code";

const minAdd = (s: string) => {
  const steps = minAddSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("minAddSteps", () => {
  it("counts the minimum insertions to balance", () => {
    expect(minAdd("())")).toBe(1);
    expect(minAdd("(((")).toBe(3);
    expect(minAdd("()")).toBe(0);
    expect(minAdd("()))((")).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minAddSteps("())(((")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
