import { describe, it, expect } from "vitest";
import { bstDeleteSteps, type BSTDeleteInput } from "./algorithm";
import { BST_DELETE_CODE } from "./code";

const last = <T>(a: T[]): T => a[a.length - 1];
const inOrder = (step: { data: { nodes: { pos: number; value: number }[] } }) =>
  [...step.data.nodes].sort((a, b) => a.pos - b.pos).map((n) => n.value);

describe("bstDeleteSteps", () => {
  it("removes each deleted value and keeps the BST in-order sorted", () => {
    const input: BSTDeleteInput = {
      values: [50, 30, 70, 20, 40, 60, 80],
      deletes: [20, 30, 50], // leaf, one-ish, two-children (root)
    };
    const steps = bstDeleteSteps(input);
    const remaining = inOrder(last(steps));
    const expected = input.values
      .filter((v) => !input.deletes.includes(v))
      .sort((a, b) => a - b);
    expect(remaining).toEqual(expected);
  });

  it("stays a valid BST after deletion (in-order strictly increasing)", () => {
    const steps = bstDeleteSteps({
      values: [50, 30, 70, 20, 40, 60, 80, 65, 75],
      deletes: [70, 50],
    });
    const order = inOrder(last(steps));
    for (let i = 1; i < order.length; i++) {
      expect(order[i]).toBeGreaterThan(order[i - 1]);
    }
  });

  it("handles deleting an absent value gracefully", () => {
    const steps = bstDeleteSteps({ values: [50, 30, 70], deletes: [999] });
    expect(steps.some((s) => /not in this subtree/i.test(s.explanation))).toBe(true);
    expect(inOrder(last(steps))).toEqual([30, 50, 70]);
  });

  it("every step's line index is within the code bounds", () => {
    const steps = bstDeleteSteps({ values: [50, 30, 70, 20, 40], deletes: [30] });
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(BST_DELETE_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    const input: BSTDeleteInput = { values: [50, 30, 70, 20, 40], deletes: [30, 70] };
    expect(bstDeleteSteps(input)).toEqual(bstDeleteSteps(input));
  });
});
