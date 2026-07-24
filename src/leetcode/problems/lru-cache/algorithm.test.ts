import { describe, it, expect } from "vitest";
import { lruSteps, type LRUOp } from "./algorithm";
import { CODE } from "./code";

describe("lruSteps", () => {
  it("matches the classic LRU example results", () => {
    const ops: LRUOp[] = [
      { op: "put", key: 1, value: 1 },
      { op: "put", key: 2, value: 2 },
      { op: "get", key: 1 },
      { op: "put", key: 3, value: 3 },
      { op: "get", key: 2 },
      { op: "put", key: 4, value: 4 },
      { op: "get", key: 1 },
      { op: "get", key: 3 },
      { op: "get", key: 4 },
    ];
    const steps = lruSteps(2, ops);
    const getResults = steps.filter((s) => s.data.op.startsWith("get")).map((s) => s.data.result);
    expect(getResults).toEqual([
      "1 — mark most-recent",
      "-1 (miss)",
      "-1 (miss)",
      "3 — mark most-recent",
      "4 — mark most-recent",
    ]);
  });

  it("never exceeds capacity", () => {
    const steps = lruSteps(2, [
      { op: "put", key: 1, value: 1 },
      { op: "put", key: 2, value: 2 },
      { op: "put", key: 3, value: 3 },
    ]);
    expect(steps[steps.length - 1].data.entries.length).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lruSteps(2, [{ op: "put", key: 1, value: 1 }, { op: "get", key: 1 }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
