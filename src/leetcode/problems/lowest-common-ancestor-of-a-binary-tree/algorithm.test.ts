import { describe, it, expect } from "vitest";
import { lcaSteps } from "./algorithm";
import { CODE } from "./code";

const lca = (heap: (number | null)[], p: number, q: number) => {
  const steps = lcaSteps(heap, p, q);
  const idx = steps[steps.length - 1].data.lca;
  return idx === null ? null : heap[idx];
};

describe("lcaSteps", () => {
  it("finds the lowest common ancestor", () => {
    const tree = [3, 5, 1, 6, 2, 0, 8];
    expect(lca(tree, 6, 2)).toBe(5);
    expect(lca(tree, 5, 1)).toBe(3);
    expect(lca(tree, 6, 8)).toBe(3);
    expect(lca(tree, 5, 2)).toBe(5); // ancestor is one of the nodes
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lcaSteps([3, 5, 1, 6, 2, 0, 8], 6, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
