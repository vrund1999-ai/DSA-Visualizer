import { describe, it, expect } from "vitest";
import { inorderTraversalSteps, bfsTraversalSteps } from "./algorithm";
import { INORDER_CODE, BFS_CODE } from "./code";

const input = [50, 30, 70, 20, 40, 60, 80];

/** Recover visit order from the badges in the final step. */
const visitOrder = (steps: ReturnType<typeof inorderTraversalSteps>) => {
  const last = steps[steps.length - 1];
  return [...last.highlights]
    .filter((h) => h.badge)
    .sort((a, b) => Number(a.badge) - Number(b.badge))
    .map((h) => last.data.nodes.find((n) => n.id === h.ref)!.value);
};

describe("inorderTraversalSteps", () => {
  it("visits values in sorted (ascending) order", () => {
    const steps = inorderTraversalSteps(input);
    expect(visitOrder(steps)).toEqual([...input].sort((a, b) => a - b));
  });

  it("visits every node exactly once", () => {
    const steps = inorderTraversalSteps(input);
    expect(steps[steps.length - 1].metrics!.visited).toBe(input.length);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of inorderTraversalSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(INORDER_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(inorderTraversalSteps(input)).toEqual(inorderTraversalSteps(input));
  });
});

describe("bfsTraversalSteps", () => {
  it("visits nodes level by level (root first, then its children)", () => {
    const steps = bfsTraversalSteps(input);
    // For this balanced input, level order is 50, 30, 70, 20, 40, 60, 80.
    expect(visitOrder(steps)).toEqual([50, 30, 70, 20, 40, 60, 80]);
  });

  it("visits every node exactly once", () => {
    const steps = bfsTraversalSteps(input);
    expect(steps[steps.length - 1].metrics!.visited).toBe(input.length);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of bfsTraversalSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(BFS_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(bfsTraversalSteps(input)).toEqual(bfsTraversalSteps(input));
  });
});
