import type { VisualizerDefinition } from "@/core/types";
import type { SearchData, SearchInput, SearchOptions } from "../types";
import { SearchRenderer } from "../SearchRenderer";
import { jumpSearchSteps } from "./algorithm";
import { JUMP_SEARCH_CODE } from "./code";
import { makeSearchInput } from "../input";

export const jumpSearchDefinition: VisualizerDefinition<
  SearchInput,
  SearchData,
  SearchOptions
> = {
  id: "jump-search",
  title: "Jump Search",
  category: "searching",
  summary: "Jumps ahead in √n blocks on a sorted array, then scans the final block.",
  tags: ["array", "sorted"],
  code: JUMP_SEARCH_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(√n)",
    timeWorst: "O(√n)",
    space: "O(1)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: () => makeSearchInput({ sorted: true }),
  defaultOptions: {},
  buildSteps: jumpSearchSteps,
  Renderer: SearchRenderer,
};
