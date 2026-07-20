import type { Step } from "@/core/types";

export type QueueOp =
  | { op: "enqueue"; value: number }
  | { op: "dequeue" };
export type QueueInput = QueueOp[];

/** items[0] is the front; items[items.length - 1] is the rear. */
export interface QueueData {
  items: number[];
}

export type QueueOptions = Record<string, never>;
export type QueueStep = Step<QueueData>;
