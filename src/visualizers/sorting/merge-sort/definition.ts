import type { VisualizerDefinition } from "@/core/types";
import type { SortData, SortInput, SortOptions } from "../types";
import { SortRenderer } from "../SortRenderer";
import { mergeSortSteps } from "./algorithm";
import { MERGE_SORT_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size = 16, min = 5, max = 100): SortInput =>
  Array.from({ length: size }, () => randInt(min, max));

export const mergeSortDefinition: VisualizerDefinition<
  SortInput,
  SortData,
  SortOptions
> = {
  id: "merge-sort",
  title: "Merge Sort",
  category: "sorting",
  summary: "Recursively splits the array and merges sorted halves back together.",
  tags: ["comparison", "divide & conquer", "stable"],
  code: MERGE_SORT_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n log n)",
    timeAverage: "O(n log n)",
    timeWorst: "O(n log n)",
    space: "O(n)",
    stable: true,
    inPlace: false,
  },
  inputSchema: [
    { kind: "array", label: "Array", min: 5, max: 100, defaultSize: 16, maxSize: 48 },
  ],
  makeDefaultInput: () => randomArray(),
  defaultOptions: { order: "asc" },
  buildSteps: mergeSortSteps,
  Renderer: SortRenderer,
};
