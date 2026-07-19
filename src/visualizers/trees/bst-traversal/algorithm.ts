import type { Highlight } from "@/core/types";
import type { TreeInput, TreeStep } from "../types";
import { buildBST, snapshot, type BSTNode } from "../tree";

type Visit = (node: BSTNode, line: number) => void;

/**
 * Shared driver: build the BST from the input, then walk it in the given order,
 * emitting a step per visit. Visited nodes stay highlighted and carry their
 * visit-order number as a badge; the node being visited is the "current" one.
 */
function traversalSteps(
  input: TreeInput,
  order: (root: BSTNode | null, visit: Visit) => void,
  startLine: number,
  endLine: number,
): TreeStep[] {
  const root = buildBST(input);
  const data = snapshot(root); // the tree is fixed during traversal
  const steps: TreeStep[] = [];
  const visitOrder = new Map<number, number>();
  let visited = 0;

  const frame = (currentId: number): Highlight[] =>
    data.nodes.map((n) => ({
      ref: n.id,
      role:
        n.id === currentId
          ? "current"
          : visitOrder.has(n.id)
            ? "visited"
            : "active",
      badge: visitOrder.has(n.id) ? String(visitOrder.get(n.id)) : undefined,
    }));

  const push = (line: number, explanation: string, currentId: number) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data,
      highlights: frame(currentId),
      metrics: { visited },
    });
  };

  push(startLine, "Start the traversal.", -1);

  const visit: Visit = (node, line) => {
    visited++;
    visitOrder.set(node.id, visited);
    push(line, `Visit ${node.value} (#${visited}).`, node.id);
  };

  order(root, visit);
  push(endLine, "Traversal complete — every node visited.", -1);

  return steps;
}

/** In-order (left, node, right) depth-first traversal. */
export function inorderTraversalSteps(input: TreeInput): TreeStep[] {
  return traversalSteps(
    input,
    (root, visit) => {
      const walk = (node: BSTNode | null) => {
        if (!node) return;
        walk(node.left);
        visit(node, 3);
        walk(node.right);
      };
      walk(root);
    },
    0,
    5,
  );
}

/** Level-order (breadth-first) traversal using a queue. */
export function bfsTraversalSteps(input: TreeInput): TreeStep[] {
  return traversalSteps(
    input,
    (root, visit) => {
      const queue: BSTNode[] = root ? [root] : [];
      while (queue.length > 0) {
        const node = queue.shift()!;
        visit(node, 3);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    },
    0,
    6,
  );
}
