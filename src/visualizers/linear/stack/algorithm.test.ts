import { describe, it, expect } from "vitest";
import { stackSteps } from "./algorithm";
import { STACK_CODE } from "./code";
import type { StackInput } from "./types";

const input: StackInput = [
  { op: "push", value: 5 },
  { op: "push", value: 8 },
  { op: "pop" },
  { op: "push", value: 3 },
  { op: "pop" },
  { op: "pop" },
];

describe("stackSteps", () => {
  it("ends empty for a balanced push/pop sequence", () => {
    const steps = stackSteps(input);
    expect(steps[steps.length - 1].data.items).toEqual([]);
  });

  it("respects LIFO order (last pushed is first popped)", () => {
    const steps = stackSteps([
      { op: "push", value: 1 },
      { op: "push", value: 2 },
      { op: "pop" }, // removes 2
    ]);
    expect(steps[steps.length - 1].data.items).toEqual([1]);
  });

  it("never removes from an empty stack (reports underflow instead)", () => {
    const steps = stackSteps([{ op: "pop" }]);
    expect(steps.some((s) => /underflow/i.test(s.explanation))).toBe(true);
    expect(steps[steps.length - 1].data.items).toEqual([]);
  });

  it("size metric equals the item count in every step", () => {
    for (const s of stackSteps(input)) {
      expect(s.metrics!.size).toBe(s.data.items.length);
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of stackSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(STACK_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(stackSteps(input)).toEqual(stackSteps(input));
  });
});
