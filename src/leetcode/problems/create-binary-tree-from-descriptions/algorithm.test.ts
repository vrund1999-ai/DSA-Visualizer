import { describe, it, expect } from "vitest";
import { createTreeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (descriptions: number[][]) => {
  const steps = createTreeSteps(descriptions);
  return steps[steps.length - 1].data;
};

describe("createTreeSteps", () => {
  it("finds the root and lays out the tree", () => {
    const d = solve([[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]);
    expect(d.root).toBe(50);
    expect(d.answer![0]).toBe(50);
    // 50's children: left 20, right 80
    expect(d.answer![1]).toBe(20);
    expect(d.answer![2]).toBe(80);
  });

  it("handles a single-node tree", () => {
    const d = solve([[1, 2, 1]]);
    expect(d.root).toBe(1);
    expect(d.answer![0]).toBe(1);
    expect(d.answer![1]).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of createTreeSteps([[20, 15, 1], [50, 20, 1], [50, 80, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
