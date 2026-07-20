import type { VisualizerDefinition } from "@/core/types";
import type { StringData, StringInput, StringOptions } from "../types";
import { StringRenderer } from "../StringRenderer";
import { rabinKarpSteps } from "./algorithm";
import { RABIN_KARP_CODE } from "./code";
import { makeStringInput } from "../input";

export const rabinKarpDefinition: VisualizerDefinition<
  StringInput,
  StringData,
  StringOptions
> = {
  id: "rabin-karp-string-search",
  title: "Rabin–Karp String Search",
  category: "strings",
  summary: "Slides a rolling hash across the text, verifying characters only on a hash hit.",
  tags: ["pattern matching", "rolling hash"],
  code: RABIN_KARP_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n + m)",
    timeAverage: "O(n + m)",
    timeWorst: "O(nm)",
    space: "O(1)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeStringInput,
  defaultOptions: {},
  buildSteps: (input) => rabinKarpSteps(input),
  Renderer: StringRenderer,
};
