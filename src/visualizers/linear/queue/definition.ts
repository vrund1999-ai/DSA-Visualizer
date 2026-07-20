import type { VisualizerDefinition } from "@/core/types";
import type { QueueData, QueueInput, QueueOptions } from "./types";
import { QueueRenderer } from "./QueueRenderer";
import { queueSteps } from "./algorithm";
import { QUEUE_CODE } from "./code";
import { makeOpSequence, randValue } from "../ops";

export const queueDefinition: VisualizerDefinition<
  QueueInput,
  QueueData,
  QueueOptions
> = {
  id: "queue",
  title: "Queue (FIFO)",
  category: "linear",
  summary: "First-in, first-out: enqueue adds at the rear, dequeue removes from the front.",
  tags: ["queue", "FIFO"],
  code: QUEUE_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(1)",
    timeWorst: "O(1)",
    space: "O(n)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: () =>
    makeOpSequence<QueueInput[number], QueueInput[number]>(
      11,
      () => ({ op: "enqueue", value: randValue() }),
      () => ({ op: "dequeue" }),
    ),
  defaultOptions: {},
  buildSteps: (input) => queueSteps(input),
  Renderer: QueueRenderer,
};
