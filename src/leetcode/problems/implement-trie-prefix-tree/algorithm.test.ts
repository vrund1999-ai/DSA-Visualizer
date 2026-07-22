import { describe, it, expect } from "vitest";
import { trieSteps, type TrieOp } from "./algorithm";
import { CODE } from "./code";

const results = (ops: TrieOp[]) => {
  const steps = trieSteps(ops);
  // last step per op carries its result
  return steps.filter((s) => s.data.result !== null).map((s) => s.data.result);
};

describe("trieSteps", () => {
  it("supports insert / search / startsWith", () => {
    const ops: TrieOp[] = [
      { op: "insert", arg: "apple" },
      { op: "search", arg: "apple" },
      { op: "search", arg: "app" },
      { op: "startsWith", arg: "app" },
      { op: "insert", arg: "app" },
      { op: "search", arg: "app" },
    ];
    expect(results(ops)).toEqual([true, false, true, true]);
  });

  it("does not treat a prefix as a full word", () => {
    expect(results([{ op: "insert", arg: "bat" }, { op: "search", arg: "ba" }])).toEqual([false]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of trieSteps([{ op: "insert", arg: "app" }, { op: "search", arg: "app" }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
