import type { VisualizerDefinition } from "@/core/types";
import type { SortData, SortInput, SortOptions } from "../types";
import { SortRenderer } from "../SortRenderer";
import { quickSortSteps } from "./algorithm";
import { QUICK_SORT_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size = 16, min = 5, max = 100): SortInput =>
  Array.from({ length: size }, () => randInt(min, max));

export const quickSortDefinition: VisualizerDefinition<
  SortInput,
  SortData,
  SortOptions
> = {
  id: "quick-sort",
  title: "Quick Sort",
  category: "sorting",
  summary: "Partitions around a pivot (Lomuto) and recursively sorts each side.",
  tags: ["comparison", "divide & conquer", "in-place"],
  code: QUICK_SORT_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n log n)",
    timeAverage: "O(n log n)",
    timeWorst: "O(n²)",
    space: "O(log n)",
    stable: false,
    inPlace: true,
  },
  inputSchema: [
    { kind: "array", label: "Array", min: 5, max: 100, defaultSize: 16, maxSize: 48 },
  ],
  makeDefaultInput: () => randomArray(),
  defaultOptions: { order: "asc" },
  buildSteps: quickSortSteps,
  Renderer: SortRenderer,
};
