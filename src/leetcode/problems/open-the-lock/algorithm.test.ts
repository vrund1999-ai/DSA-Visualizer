import { describe, it, expect } from "vitest";
import { lockSteps } from "./algorithm";
import { CODE } from "./code";

const open = (deadends: string[], target: string) => {
  const steps = lockSteps(deadends, target);
  return steps[steps.length - 1].data.answer;
};

describe("lockSteps", () => {
  it("finds the minimum moves", () => {
    expect(open(["0201", "0101", "0102", "1212", "2002"], "0202")).toBe(6);
    expect(open(["8888"], "0009")).toBe(1);
    expect(open(["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888")).toBe(-1);
    expect(open([], "0000")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lockSteps(["0201", "0101", "0102", "1212", "2002"], "0202")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
