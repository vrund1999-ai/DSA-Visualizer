import { describe, it, expect } from "vitest";
import { serializeSteps } from "./algorithm";
import { CODE } from "./code";

const serialize = (heap: (number | null)[]) => {
  const steps = serializeSteps(heap);
  return steps[steps.length - 1].data.tokens.join(",");
};

describe("serializeSteps", () => {
  it("produces a preorder encoding with null markers", () => {
    // 1(2)(3(4)(5)): preorder 1,2,#,#,3,4,#,#,5,#,#
    expect(serialize([1, 2, 3, null, null, 4, 5])).toBe("1,2,#,#,3,4,#,#,5,#,#");
    expect(serialize([])).toBe("#");
    expect(serialize([1])).toBe("1,#,#");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of serializeSteps([1, 2, 3, null, null, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
