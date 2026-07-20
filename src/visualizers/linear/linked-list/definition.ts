import type { VisualizerDefinition } from "@/core/types";
import type {
  LinkedListData,
  LinkedListInput,
  LinkedListOp,
  LinkedListOptions,
} from "./types";
import { LinkedListRenderer } from "./LinkedListRenderer";
import { linkedListSteps } from "./algorithm";
import { LINKED_LIST_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/** Seed a list with a few tail inserts, then mix in head-inserts and deletes of present values. */
function makeLinkedListInput(): LinkedListInput {
  const present: number[] = [];
  const ops: LinkedListOp[] = [];
  while (present.length < 4) {
    const v = randInt(1, 99);
    if (!present.includes(v)) {
      present.push(v);
      ops.push({ op: "insertTail", value: v });
    }
  }
  for (let i = 0; i < 4; i++) {
    const r = Math.random();
    if (r < 0.4 && present.length > 0) {
      const idx = randInt(0, present.length - 1);
      ops.push({ op: "delete", value: present[idx] });
      present.splice(idx, 1);
    } else if (r < 0.7) {
      const v = randInt(1, 99);
      present.unshift(v);
      ops.push({ op: "insertHead", value: v });
    } else {
      const v = randInt(1, 99);
      present.push(v);
      ops.push({ op: "insertTail", value: v });
    }
  }
  return ops;
}

export const linkedListDefinition: VisualizerDefinition<
  LinkedListInput,
  LinkedListData,
  LinkedListOptions
> = {
  id: "linked-list",
  title: "Singly Linked List",
  category: "linear",
  summary: "Nodes chained by next pointers; insert at head/tail and delete by value.",
  tags: ["linked list", "pointers"],
  code: LINKED_LIST_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(n)",
    timeWorst: "O(n)",
    space: "O(n)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeLinkedListInput,
  defaultOptions: {},
  buildSteps: (input) => linkedListSteps(input),
  Renderer: LinkedListRenderer,
};
