import type { Highlight } from "@/core/types";
import type { TreeInput, TreeStep } from "../types";
import { newNode, snapshot, type BSTNode } from "../tree";

/**
 * Pure step generator for building a binary search tree by inserting each input
 * value. Emits a snapshot per comparison along the search path and per
 * placement. `line` points into BST_INSERT_CODE.
 */
export function bstInsertSteps(input: TreeInput): TreeStep[] {
  const steps: TreeStep[] = [];
  let root: BSTNode | null = null;
  let comparisons = 0;
  let nodes = 0;

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: snapshot(root),
      highlights,
      metrics: { comparisons, nodes },
    });
  };

  push(0, "Build a binary search tree by inserting each value in order.", []);

  input.forEach((value, id) => {
    if (root === null) {
      root = newNode(id, value, null);
      nodes++;
      push(2, `Tree is empty — ${value} becomes the root.`, [
        { ref: id, role: "swapped" },
      ]);
      return;
    }

    let cur: BSTNode = root;
    while (true) {
      comparisons++;
      push(3, `Compare ${value} with node ${cur.value}.`, [
        { ref: cur.id, role: "compared" },
      ]);
      if (value < cur.value) {
        if (cur.left === null) {
          cur.left = newNode(id, value, cur.id);
          nodes++;
          push(4, `${value} < ${cur.value} and the left child is empty — insert here.`, [
            { ref: id, role: "swapped" },
          ]);
          break;
        }
        cur = cur.left;
      } else {
        if (cur.right === null) {
          cur.right = newNode(id, value, cur.id);
          nodes++;
          push(6, `${value} ≥ ${cur.value} and the right child is empty — insert here.`, [
            { ref: id, role: "swapped" },
          ]);
          break;
        }
        cur = cur.right;
      }
    }
  });

  push(7, "Done — every value is inserted into the BST.", []);

  return steps;
}
