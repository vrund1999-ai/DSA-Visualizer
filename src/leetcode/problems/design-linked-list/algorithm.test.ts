import { describe, it, expect } from "vitest";
import { linkedListSteps, type LinkedListOp } from "./algorithm";
import { CODE } from "./code";

const run = (ops: LinkedListOp[]) => {
  const steps = linkedListSteps(ops);
  const last = steps[steps.length - 1].data;
  return { list: last.list, answers: last.answers.filter((a): a is number => a !== null) };
};

describe("linkedListSteps", () => {
  it("matches the canonical LeetCode example", () => {
    const { list, answers } = run([
      { type: "addAtHead", val: 1 },
      { type: "addAtTail", val: 3 },
      { type: "addAtIndex", index: 1, val: 2 },
      { type: "get", index: 1 },
      { type: "deleteAtIndex", index: 1 },
      { type: "get", index: 1 },
    ]);
    expect(list).toEqual([1, 3]);
    expect(answers).toEqual([2, 3]);
  });

  it("returns -1 for out-of-range get and ignores bad inserts/deletes", () => {
    const { list, answers } = run([
      { type: "addAtHead", val: 5 },
      { type: "get", index: 3 },
      { type: "addAtIndex", index: 9, val: 7 },
      { type: "deleteAtIndex", index: 4 },
    ]);
    expect(list).toEqual([5]);
    expect(answers).toEqual([-1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const steps = linkedListSteps([
      { type: "addAtHead", val: 1 },
      { type: "addAtTail", val: 3 },
      { type: "get", index: 0 },
    ]);
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
