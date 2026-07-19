import type { VisualizerDefinition } from "@/core/types";
import type { SearchData, SearchInput, SearchOptions } from "../types";
import { SearchRenderer } from "../SearchRenderer";
import { linearSearchSteps } from "./algorithm";
import { LINEAR_SEARCH_CODE } from "./code";
import { makeSearchInput } from "../input";

export const linearSearchDefinition: VisualizerDefinition<
  SearchInput,
  SearchData,
  SearchOptions
> = {
  id: "linear-search",
  title: "Linear Search",
  category: "searching",
  summary: "Scans each element in turn until the target is found or the end is reached.",
  tags: ["array", "unsorted"],
  code: LINEAR_SEARCH_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(n)",
    timeWorst: "O(n)",
    space: "O(1)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: () => makeSearchInput({ sorted: false }),
  defaultOptions: {},
  buildSteps: linearSearchSteps,
  Renderer: SearchRenderer,
};
