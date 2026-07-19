import type { TreeData, TreeInput } from "./types";

/** Mutable BST node used while building/traversing; ids are stable per node. */
export interface BSTNode {
  id: number;
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;
  parent: number | null;
}

export const newNode = (id: number, value: number, parent: number | null): BSTNode => ({
  id,
  value,
  left: null,
  right: null,
  parent,
});

/**
 * Build a BST from a sequence of values. `id` is the insertion index so a node
 * keeps the same identity across snapshots. Duplicates go right (>=).
 */
export function buildBST(values: TreeInput): BSTNode | null {
  let root: BSTNode | null = null;
  values.forEach((value, id) => {
    if (root === null) {
      root = newNode(id, value, null);
      return;
    }
    let cur: BSTNode = root;
    while (true) {
      if (value < cur.value) {
        if (cur.left === null) {
          cur.left = newNode(id, value, cur.id);
          return;
        }
        cur = cur.left;
      } else {
        if (cur.right === null) {
          cur.right = newNode(id, value, cur.id);
          return;
        }
        cur = cur.right;
      }
    }
  });
  return root;
}

/**
 * Flatten the current tree into renderer nodes. In-order traversal assigns the
 * horizontal `pos` (so the layout reads left→right in sorted order); recursion
 * depth gives the vertical level.
 */
export function snapshot(root: BSTNode | null): TreeData {
  const nodes: TreeData["nodes"] = [];
  let pos = 0;
  const walk = (node: BSTNode | null, depth: number) => {
    if (!node) return;
    walk(node.left, depth + 1);
    nodes.push({
      id: node.id,
      value: node.value,
      depth,
      pos: pos++,
      parent: node.parent,
    });
    walk(node.right, depth + 1);
  };
  walk(root, 0);
  return { nodes };
}
