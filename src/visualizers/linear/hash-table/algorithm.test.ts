import { describe, it, expect } from "vitest";
import { hashTableSteps } from "./algorithm";
import { HASH_TABLE_CODE } from "./code";
import type { HashInput } from "./types";

const input: HashInput = [
  { op: "insert", value: 8 }, // 8 % 7 = 1
  { op: "insert", value: 15 }, // 15 % 7 = 1 (collision)
  { op: "insert", value: 3 }, // 3 % 7 = 3
  { op: "search", value: 15 },
  { op: "search", value: 99 }, // 99 % 7 = 1, absent
];

describe("hashTableSteps", () => {
  it("chains collisions into the same bucket", () => {
    const last = hashTableSteps(input);
    const buckets = last[last.length - 1].data.buckets;
    expect(buckets[1]).toEqual([8, 15]);
    expect(buckets[3]).toEqual([3]);
  });

  it("finds a present value in a chain", () => {
    const steps = hashTableSteps(input);
    expect(steps.some((s) => /Found 15/.test(s.explanation))).toBe(true);
  });

  it("reports a miss for an absent value", () => {
    const steps = hashTableSteps(input);
    expect(steps.some((s) => /not found/i.test(s.explanation))).toBe(true);
  });

  it("entries metric equals total items stored", () => {
    const steps = hashTableSteps(input);
    const last = steps[steps.length - 1];
    const total = last.data.buckets.reduce((n, b) => n + b.length, 0);
    expect(last.metrics!.entries).toBe(total);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of hashTableSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(HASH_TABLE_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(hashTableSteps(input)).toEqual(hashTableSteps(input));
  });
});
