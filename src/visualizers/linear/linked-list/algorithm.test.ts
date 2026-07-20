import { describe, it, expect } from "vitest";
import { linkedListSteps } from "./algorithm";
import { LINKED_LIST_CODE } from "./code";
import type { LinkedListInput } from "./types";

const input: LinkedListInput = [
  { op: "insertTail", value: 1 },
  { op: "insertTail", value: 2 },
  { op: "insertTail", value: 3 },
  { op: "insertHead", value: 9 },
  { op: "delete", value: 2 },
];

describe("linkedListSteps", () => {
  it("builds the expected final list", () => {
    // tail 1,2,3 ⇒ [1,2,3]; head 9 ⇒ [9,1,2,3]; delete 2 ⇒ [9,1,3]
    const steps = linkedListSteps(input);
    expect(steps[steps.length - 1].data.nodes).toEqual([9, 1, 3]);
  });

  it("insertHead places the value at the front", () => {
    const steps = linkedListSteps([
      { op: "insertTail", value: 1 },
      { op: "insertHead", value: 7 },
    ]);
    expect(steps[steps.length - 1].data.nodes).toEqual([7, 1]);
  });

  it("deleting an absent value leaves the list unchanged and reports it", () => {
    const steps = linkedListSteps([
      { op: "insertTail", value: 1 },
      { op: "delete", value: 42 },
    ]);
    expect(steps.some((s) => /not in the list/i.test(s.explanation))).toBe(true);
    expect(steps[steps.length - 1].data.nodes).toEqual([1]);
  });

  it("length metric equals the node count in every step", () => {
    for (const s of linkedListSteps(input)) {
      expect(s.metrics!.length).toBe(s.data.nodes.length);
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of linkedListSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(LINKED_LIST_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(linkedListSteps(input)).toEqual(linkedListSteps(input));
  });
});
