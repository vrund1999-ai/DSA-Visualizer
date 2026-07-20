import type { Highlight } from "@/core/types";
import type { TreeStep } from "../types";
import { buildBST, snapshot, type BSTNode } from "../tree";

export interface BSTDeleteInput {
  values: number[];
  deletes: number[];
}

/**
 * Pure step generator for BST deletion, covering all three cases: leaf, single
 * child, and two children (replace with the in-order successor). `line` points
 * into BST_DELETE_CODE.
 */
export function bstDeleteSteps(input: BSTDeleteInput): TreeStep[] {
  let root = buildBST(input.values);
  const steps: TreeStep[] = [];
  let comparisons = 0;
  let removed = 0;

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: snapshot(root),
      highlights,
      metrics: { comparisons, removed },
    });
  };

  push(0, "Build the BST, then delete the requested values one at a time.", []);

  const minNode = (node: BSTNode): BSTNode => {
    let cur = node;
    while (cur.left) cur = cur.left;
    return cur;
  };

  const del = (node: BSTNode | null, x: number): BSTNode | null => {
    if (node === null) {
      push(1, `${x} is not in this subtree.`, []);
      return null;
    }
    comparisons++;
    if (x < node.value) {
      push(3, `${x} < ${node.value} — recurse left.`, [
        { ref: node.id, role: "compared" },
      ]);
      node.left = del(node.left, x);
      return node;
    }
    if (x > node.value) {
      push(5, `${x} > ${node.value} — recurse right.`, [
        { ref: node.id, role: "compared" },
      ]);
      node.right = del(node.right, x);
      return node;
    }
    // found
    push(6, `Found ${x}.`, [{ ref: node.id, role: "current" }]);
    if (!node.left) {
      removed++;
      push(7, `No left child — splice in the right child.`, [
        { ref: node.id, role: "swapped" },
      ]);
      return node.right;
    }
    if (!node.right) {
      removed++;
      push(8, `No right child — splice in the left child.`, [
        { ref: node.id, role: "swapped" },
      ]);
      return node.left;
    }
    const s = minNode(node.right);
    push(10, `Two children — copy in-order successor ${s.value}.`, [
      { ref: node.id, role: "swapped" },
      { ref: s.id, role: "compared" },
    ]);
    node.value = s.value;
    node.right = del(node.right, s.value);
    return node;
  };

  for (const v of input.deletes) {
    push(0, `delete(${v}): search from the root.`, []);
    root = del(root, v);
  }

  push(14, "Done — all requested values deleted.", []);
  return steps;
}
