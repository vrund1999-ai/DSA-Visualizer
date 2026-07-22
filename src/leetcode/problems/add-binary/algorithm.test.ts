import { describe, it, expect } from "vitest";
import { addBinarySteps } from "./algorithm";
import { CODE } from "./code";

const add = (a: string, b: string) => {
  const steps = addBinarySteps({ a, b });
  return steps[steps.length - 1].data.result.join("");
};

describe("addBinarySteps", () => {
  it("adds binary strings", () => {
    expect(add("11", "1")).toBe("100");
    expect(add("1010", "1011")).toBe("10101");
    expect(add("0", "0")).toBe("0");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of addBinarySteps({ a: "1010", b: "1011" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
