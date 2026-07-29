import { describe, it, expect } from "vitest";
import { camerasSteps } from "./algorithm";
import { CODE } from "./code";

const minCameras = (heap: (number | null)[]) => {
  const steps = camerasSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("camerasSteps", () => {
  it("counts the minimum cameras", () => {
    expect(minCameras([0, 0, null, 0, 0])).toBe(1);
    expect(minCameras([0, 0, null, 0, null, null, null, 0, 0])).toBe(2);
    expect(minCameras([0])).toBe(1);
    expect(minCameras([0, 0, 0])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of camerasSteps([0, 0, null, 0, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
