import type { VisualizerDefinition } from "@/core/types";
import type { StringData, StringInput, StringOptions } from "../types";
import { StringRenderer } from "../StringRenderer";
import { kmpSearchSteps } from "./algorithm";
import { KMP_CODE } from "./code";
import { makeStringInput } from "../input";

export const kmpSearchDefinition: VisualizerDefinition<
  StringInput,
  StringData,
  StringOptions
> = {
  id: "kmp-string-search",
  title: "KMP String Search",
  category: "strings",
  summary: "Uses a prefix table to skip re-checking characters after a mismatch.",
  tags: ["pattern matching", "prefix function"],
  code: KMP_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n)",
    timeAverage: "O(n + m)",
    timeWorst: "O(n + m)",
    space: "O(m)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeStringInput,
  defaultOptions: {},
  buildSteps: (input) => kmpSearchSteps(input),
  Renderer: StringRenderer,
};
