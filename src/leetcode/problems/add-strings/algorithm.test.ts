import { describe, it, expect } from "vitest";
import { addStringsSteps } from "./algorithm";
import { CODE } from "./code";

const add = (a: string, b: string) => {
  const steps = addStringsSteps({ a, b });
  return steps[steps.length - 1].data.result.join("");
};

describe("addStringsSteps", () => {
  it("adds decimal strings", () => {
    expect(add("11", "123")).toBe("134");
    expect(add("456", "77")).toBe("533");
    expect(add("0", "0")).toBe("0");
    expect(add("99", "1")).toBe("100");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of addStringsSteps({ a: "456", b: "77" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
