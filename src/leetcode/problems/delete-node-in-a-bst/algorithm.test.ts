import { describe, it, expect } from "vitest";
import { deleteBSTSteps } from "./algorithm";
import { CODE } from "./code";

const finalData = (heap: (number | null)[], key: number) => {
  const steps = deleteBSTSteps(heap, key);
  return steps[steps.length - 1].data;
};

describe("deleteBSTSteps", () => {
  it("locates the node to delete", () => {
    const tree = [5, 3, 6, 2, 4, null, 7];
    // key 3 has two children -> uses successor (4)
    const d1 = finalData(tree, 3);
    expect(d1.heap[d1.target as number]).toBe(3);
    expect(d1.successor).not.toBeNull();
    // key 7 is a leaf
    const d2 = finalData(tree, 7);
    expect(d2.heap[d2.target as number]).toBe(7);
    expect(d2.successor).toBeNull();
    // missing key
    expect(finalData(tree, 99).target).toBeNull();
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of deleteBSTSteps([5, 3, 6, 2, 4, null, 7], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
