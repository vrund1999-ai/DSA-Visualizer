import type { VisualizerDefinition } from "@/core/types";
import type { SearchData, SearchInput, SearchOptions } from "../types";
import { SearchRenderer } from "../SearchRenderer";
import { binarySearchSteps } from "./algorithm";
import { BINARY_SEARCH_CODE } from "./code";
import { makeSearchInput } from "../input";

export const binarySearchDefinition: VisualizerDefinition<
  SearchInput,
  SearchData,
  SearchOptions
> = {
  id: "binary-search",
  title: "Binary Search",
  category: "searching",
  summary: "Repeatedly halves a sorted array's search window until the target is found.",
  tags: ["array", "sorted", "divide & conquer"],
  code: BINARY_SEARCH_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(log n)",
    timeWorst: "O(log n)",
    space: "O(1)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: () => makeSearchInput({ sorted: true }),
  defaultOptions: {},
  buildSteps: binarySearchSteps,
  Renderer: SearchRenderer,
};
