import { describe, it, expect } from "vitest";
import { findRootSteps, type NaryNode } from "./algorithm";
import { CODE } from "./code";

const solve = (nodes: NaryNode[]) => {
  const steps = findRootSteps(nodes);
  return steps[steps.length - 1].data.answer;
};

describe("findRootSteps", () => {
  it("identifies the root value via XOR", () => {
    expect(
      solve([
        { val: 3, children: [5, 6] },
        { val: 2, children: [] },
        { val: 1, children: [3, 2, 4] },
        { val: 5, children: [] },
        { val: 4, children: [] },
        { val: 6, children: [] },
      ]),
    ).toBe(1);
    expect(solve([{ val: 7, children: [] }])).toBe(7);
    expect(solve([{ val: 9, children: [2] }, { val: 2, children: [] }])).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of findRootSteps([{ val: 1, children: [2] }, { val: 2, children: [] }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
