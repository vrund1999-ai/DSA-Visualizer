import type { Step } from "@/core/types";

export type LinkedListOp =
  | { op: "insertHead"; value: number }
  | { op: "insertTail"; value: number }
  | { op: "delete"; value: number };
export type LinkedListInput = LinkedListOp[];

/** nodes[0] is the head; each node points to the next. */
export interface LinkedListData {
  nodes: number[];
}

export type LinkedListOptions = Record<string, never>;
export type LinkedListStep = Step<LinkedListData>;
