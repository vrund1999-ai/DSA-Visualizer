import { describe, it, expect } from "vitest";
import { bstInsertSteps } from "./algorithm";
import { BST_INSERT_CODE } from "./code";
import { snapshot, buildBST } from "../tree";

describe("bstInsertSteps", () => {
  const input = [50, 30, 70, 20, 40, 60, 80];

  it("ends with every value present in the tree", () => {
    const steps = bstInsertSteps(input);
    const last = steps[steps.length - 1];
    const values = last.data.nodes.map((n) => n.value).sort((a, b) => a - b);
    expect(values).toEqual([...input].sort((a, b) => a - b));
  });

  it("final tree matches a directly-built BST (in-order is sorted)", () => {
    const steps = bstInsertSteps(input);
    const last = steps[steps.length - 1];
    const direct = snapshot(buildBST(input));
    expect(last.data.nodes).toEqual(direct.nodes);
    // In-order position order == sorted values.
    const inOrder = [...last.data.nodes]
      .sort((a, b) => a.pos - b.pos)
      .map((n) => n.value);
    expect(inOrder).toEqual([...input].sort((a, b) => a - b));
  });

  it("node count never exceeds the number of values seen", () => {
    const steps = bstInsertSteps(input);
    for (const s of steps) {
      expect(s.data.nodes.length).toBeLessThanOrEqual(input.length);
      expect(s.metrics!.nodes).toBe(s.data.nodes.length);
    }
  });

  it("every parent id refers to a node that exists in the same snapshot", () => {
    for (const s of bstInsertSteps(input)) {
      const ids = new Set(s.data.nodes.map((n) => n.id));
      for (const n of s.data.nodes) {
        if (n.parent !== null) expect(ids.has(n.parent)).toBe(true);
      }
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of bstInsertSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(BST_INSERT_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(bstInsertSteps(input)).toEqual(bstInsertSteps(input));
  });

  it("handles a single value", () => {
    const steps = bstInsertSteps([42]);
    const last = steps[steps.length - 1];
    expect(last.data.nodes).toHaveLength(1);
    expect(last.data.nodes[0].parent).toBeNull();
  });
});
