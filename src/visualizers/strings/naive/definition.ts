import type { VisualizerDefinition } from "@/core/types";
import type { StringData, StringInput, StringOptions } from "../types";
import { StringRenderer } from "../StringRenderer";
import { naiveSearchSteps } from "./algorithm";
import { NAIVE_CODE } from "./code";
import { makeStringInput } from "../input";

export const naiveSearchDefinition: VisualizerDefinition<
  StringInput,
  StringData,
  StringOptions
> = {
  id: "naive-string-search",
  title: "Naive String Search",
  category: "strings",
  summary: "Tries every alignment of the pattern, comparing character by character.",
  tags: ["pattern matching", "brute force"],
  code: NAIVE_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n)",
    timeAverage: "O(nm)",
    timeWorst: "O(nm)",
    space: "O(1)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeStringInput,
  defaultOptions: {},
  buildSteps: (input) => naiveSearchSteps(input),
  Renderer: StringRenderer,
};
