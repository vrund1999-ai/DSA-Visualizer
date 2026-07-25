import { describe, it, expect } from "vitest";
import { killProcessSteps } from "./algorithm";
import { CODE } from "./code";

const killed = (pid: number[], ppid: number[], kill: number) => {
  const steps = killProcessSteps(pid, ppid, kill);
  return steps[steps.length - 1].data.answer!.sort((a, b) => a - b);
};

describe("killProcessSteps", () => {
  it("kills the process and its descendants", () => {
    expect(killed([1, 3, 10, 5], [3, 0, 5, 3], 5)).toEqual([5, 10]);
    expect(killed([1, 3, 10, 5], [3, 0, 5, 3], 3)).toEqual([1, 3, 5, 10]);
    expect(killed([1], [0], 1)).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of killProcessSteps([1, 3, 10, 5], [3, 0, 5, 3], 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
