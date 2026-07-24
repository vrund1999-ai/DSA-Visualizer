import { describe, it, expect } from "vitest";
import { intersectionSteps, type ListNodeView } from "./algorithm";
import { CODE } from "./code";

const build = (skipA: number[], skipB: number[], common: number[]) => {
  const c: ListNodeView[] = common.map((v, i) => ({ id: `c${i}`, val: v }));
  const a: ListNodeView[] = [...skipA.map((v, i) => ({ id: `a${i}`, val: v })), ...c];
  const b: ListNodeView[] = [...skipB.map((v, i) => ({ id: `b${i}`, val: v })), ...c];
  return { a, b };
};

const meet = (skipA: number[], skipB: number[], common: number[]) => {
  const { a, b } = build(skipA, skipB, common);
  const steps = intersectionSteps(a, b);
  return steps[steps.length - 1].data.meetId;
};

describe("intersectionSteps", () => {
  it("finds the shared node", () => {
    expect(meet([4, 1], [5, 6, 1], [8, 4, 5])).toBe("c0");
    expect(meet([2], [3], [1])).toBe("c0");
  });

  it("returns null when the lists do not intersect", () => {
    expect(meet([2, 6, 4], [1, 5], [])).toBeNull();
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const { a, b } = build([4, 1], [5, 6, 1], [8, 4, 5]);
    for (const s of intersectionSteps(a, b)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
