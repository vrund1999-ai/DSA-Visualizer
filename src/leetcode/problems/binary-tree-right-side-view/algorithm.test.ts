import { describe, it, expect } from "vitest";
import { rightViewSteps } from "./algorithm";
import { CODE } from "./code";

const view = (heap: (number | null)[]) => {
  const steps = rightViewSteps(heap);
  const { heap: h, view } = steps[steps.length - 1].data;
  return view.map((i) => h[i]);
};

describe("rightViewSteps", () => {
  it("keeps the rightmost node of each level", () => {
    expect(view([1, 2, 3, null, 5, null, 4])).toEqual([1, 3, 4]);
    expect(view([1, 2, 3, 4])).toEqual([1, 3, 4]);
    expect(view([])).toEqual([]);
    expect(view([1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rightViewSteps([1, 2, 3, null, 5, null, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
