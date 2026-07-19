import type { VisualizerDefinition } from "@/core/types";
import type { SortData, SortInput, SortOptions } from "../types";
import { SortRenderer } from "../SortRenderer";
import { insertionSortSteps } from "./algorithm";
import { INSERTION_SORT_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size = 18, min = 5, max = 100): SortInput =>
  Array.from({ length: size }, () => randInt(min, max));

export const insertionSortDefinition: VisualizerDefinition<
  SortInput,
  SortData,
  SortOptions
> = {
  id: "insertion-sort",
  title: "Insertion Sort",
  category: "sorting",
  summary: "Builds a sorted prefix by inserting each new value into its correct position.",
  tags: ["comparison", "in-place", "stable"],
  code: INSERTION_SORT_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n)",
    timeAverage: "O(n²)",
    timeWorst: "O(n²)",
    space: "O(1)",
    stable: true,
    inPlace: true,
  },
  inputSchema: [
    { kind: "array", label: "Array", min: 5, max: 100, defaultSize: 18, maxSize: 60 },
  ],
  makeDefaultInput: () => randomArray(),
  defaultOptions: { order: "asc" },
  buildSteps: insertionSortSteps,
  Renderer: SortRenderer,
};
