import { describe, it, expect } from "vitest";
import { permSeqSteps } from "./algorithm";
import { CODE } from "./code";

const kth = (n: number, k: number) => {
  const steps = permSeqSteps(n, k);
  return steps[steps.length - 1].data.answer;
};

describe("permSeqSteps", () => {
  it("finds the kth permutation", () => {
    expect(kth(3, 3)).toBe("213");
    expect(kth(4, 9)).toBe("2314");
    expect(kth(3, 1)).toBe("123");
    expect(kth(3, 6)).toBe("321");
    expect(kth(1, 1)).toBe("1");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of permSeqSteps(4, 9)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
