import type { VisualizerDefinition } from "@/core/types";
import type { SearchData, SearchInput, SearchOptions } from "../types";
import { SearchRenderer } from "../SearchRenderer";
import { interpolationSearchSteps } from "./algorithm";
import { INTERPOLATION_SEARCH_CODE } from "./code";
import { makeSearchInput } from "../input";

export const interpolationSearchDefinition: VisualizerDefinition<
  SearchInput,
  SearchData,
  SearchOptions
> = {
  id: "interpolation-search",
  title: "Interpolation Search",
  category: "searching",
  summary: "Estimates the target's position by interpolating between the endpoints.",
  tags: ["array", "sorted", "uniform"],
  code: INTERPOLATION_SEARCH_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(log log n)",
    timeWorst: "O(n)",
    space: "O(1)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: () => makeSearchInput({ sorted: true }),
  defaultOptions: {},
  buildSteps: interpolationSearchSteps,
  Renderer: SearchRenderer,
};
