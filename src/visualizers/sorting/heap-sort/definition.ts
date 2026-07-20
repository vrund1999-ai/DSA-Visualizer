import type { VisualizerDefinition } from "@/core/types";
import type { SortData, SortInput, SortOptions } from "../types";
import { SortRenderer } from "../SortRenderer";
import { heapSortSteps } from "./algorithm";
import { HEAP_SORT_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size = 16, min = 5, max = 100): SortInput =>
  Array.from({ length: size }, () => randInt(min, max));

export const heapSortDefinition: VisualizerDefinition<
  SortInput,
  SortData,
  SortOptions
> = {
  id: "heap-sort",
  title: "Heap Sort",
  category: "sorting",
  summary: "Builds a binary heap, then repeatedly extracts the extreme element.",
  tags: ["comparison", "in-place", "heap"],
  code: HEAP_SORT_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n log n)",
    timeAverage: "O(n log n)",
    timeWorst: "O(n log n)",
    space: "O(1)",
    stable: false,
    inPlace: true,
  },
  inputSchema: [
    { kind: "array", label: "Array", min: 5, max: 100, defaultSize: 16, maxSize: 48 },
  ],
  makeDefaultInput: () => randomArray(),
  defaultOptions: { order: "asc" },
  buildSteps: heapSortSteps,
  Renderer: SortRenderer,
};
