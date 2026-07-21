import { describe, it, expect } from "vitest";
import { lcaSteps } from "./algorithm";
import { CODE } from "./code";

const heap = [6, 2, 8, 0, 4, 7, 9];
const lca = (p: number, q: number) => {
  const steps = lcaSteps({ heap, p, q });
  const idx = steps[steps.length - 1].data.lca;
  return idx === null ? null : heap[idx];
};

describe("lcaSteps", () => {
  it("finds the split-point ancestor", () => {
    expect(lca(2, 8)).toBe(6);
    expect(lca(2, 4)).toBe(2);
    expect(lca(0, 4)).toBe(2);
    expect(lca(7, 9)).toBe(8);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lcaSteps({ heap, p: 2, q: 4 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
