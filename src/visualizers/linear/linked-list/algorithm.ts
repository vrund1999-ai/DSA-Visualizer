import type { Highlight } from "@/core/types";
import type { LinkedListInput, LinkedListStep } from "./types";

/**
 * Pure step generator for a singly linked list. Tail insertion and deletion
 * walk the list node by node (highlighting the cursor) so the pointer-chasing
 * cost is visible. `line` points into LINKED_LIST_CODE.
 */
export function linkedListSteps(input: LinkedListInput): LinkedListStep[] {
  const nodes: number[] = [];
  const steps: LinkedListStep[] = [];
  let operations = 0;

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { nodes: [...nodes] },
      highlights,
      metrics: { length: nodes.length, operations },
    });
  };

  push(0, "A singly linked list: each node points to the next; the head is the entry point.", []);

  for (const action of input) {
    operations++;
    if (action.op === "insertHead") {
      nodes.unshift(action.value);
      push(1, `insertHead(${action.value}): point the new node at the old head.`, [
        { ref: 0, role: "swapped" },
      ]);
    } else if (action.op === "insertTail") {
      if (nodes.length === 0) {
        nodes.push(action.value);
        push(6, `insertTail(${action.value}): the list was empty, so it becomes the head.`, [
          { ref: 0, role: "swapped" },
        ]);
      } else {
        for (let i = 0; i < nodes.length; i++) {
          push(5, `Walk to the tail: at node ${nodes[i]}.`, [
            { ref: i, role: "current" },
          ]);
        }
        nodes.push(action.value);
        push(6, `Link the new node ${action.value} after the tail.`, [
          { ref: nodes.length - 1, role: "swapped" },
        ]);
      }
    } else {
      // delete
      let found = -1;
      for (let i = 0; i < nodes.length; i++) {
        push(10, `delete(${action.value}): compare with node ${nodes[i]}.`, [
          { ref: i, role: "current" },
        ]);
        if (nodes[i] === action.value) {
          found = i;
          break;
        }
      }
      if (found >= 0) {
        push(12, `Found ${action.value} — unlink it.`, [
          { ref: found, role: "swapped" },
        ]);
        nodes.splice(found, 1);
        push(12, `${action.value} removed; length is now ${nodes.length}.`, []);
      } else {
        push(11, `Reached the end — ${action.value} is not in the list.`, []);
      }
    }
  }

  return steps;
}
