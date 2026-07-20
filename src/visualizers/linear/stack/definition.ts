import type { VisualizerDefinition } from "@/core/types";
import type { StackData, StackInput, StackOptions } from "./types";
import { StackRenderer } from "./StackRenderer";
import { stackSteps } from "./algorithm";
import { STACK_CODE } from "./code";
import { makeOpSequence, randValue } from "../ops";

export const stackDefinition: VisualizerDefinition<
  StackInput,
  StackData,
  StackOptions
> = {
  id: "stack",
  title: "Stack (LIFO)",
  category: "linear",
  summary: "Last-in, first-out: push adds to the top, pop removes from the top.",
  tags: ["stack", "LIFO"],
  code: STACK_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(1)",
    timeWorst: "O(1)",
    space: "O(n)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: () =>
    makeOpSequence<StackInput[number], StackInput[number]>(
      11,
      () => ({ op: "push", value: randValue() }),
      () => ({ op: "pop" }),
    ),
  defaultOptions: {},
  buildSteps: (input) => stackSteps(input),
  Renderer: StackRenderer,
};
