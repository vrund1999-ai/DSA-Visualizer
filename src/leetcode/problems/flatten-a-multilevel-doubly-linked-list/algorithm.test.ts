import { describe, it, expect } from "vitest";
import { flattenSteps, type RawNode } from "./algorithm";
import { CODE } from "./code";

const flatten = (input: RawNode[]) => {
  const steps = flattenSteps(input);
  return steps[steps.length - 1].data.answer;
};

describe("flattenSteps", () => {
  it("flattens depth-first (child before next)", () => {
    const input: RawNode[] = [
      { val: 1 },
      { val: 2 },
      { val: 3, child: [{ val: 7 }, { val: 8, child: [{ val: 11 }, { val: 12 }] }, { val: 9 }, { val: 10 }] },
      { val: 4 },
      { val: 5 },
      { val: 6 },
    ];
    expect(flatten(input)).toEqual([1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]);
  });

  it("handles a flat list and a single child", () => {
    expect(flatten([{ val: 1 }, { val: 2 }])).toEqual([1, 2]);
    expect(flatten([{ val: 1, child: [{ val: 3 }] }, { val: 2 }])).toEqual([1, 3, 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const input: RawNode[] = [{ val: 1, child: [{ val: 2 }] }, { val: 3 }];
    for (const s of flattenSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
