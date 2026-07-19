import type { VisualizerDefinition } from "@/core/types";
import type { SortData, SortInput, SortOptions } from "../types";
import { SortRenderer } from "../SortRenderer";
import { selectionSortSteps } from "./algorithm";
import { SELECTION_SORT_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size = 18, min = 5, max = 100): SortInput =>
  Array.from({ length: size }, () => randInt(min, max));

export const selectionSortDefinition: VisualizerDefinition<
  SortInput,
  SortData,
  SortOptions
> = {
  id: "selection-sort",
  title: "Selection Sort",
  category: "sorting",
  summary: "Selects the smallest remaining element each pass and swaps it into place.",
  tags: ["comparison", "in-place", "unstable"],
  code: SELECTION_SORT_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n²)",
    timeAverage: "O(n²)",
    timeWorst: "O(n²)",
    space: "O(1)",
    stable: false,
    inPlace: true,
  },
  inputSchema: [
    { kind: "array", label: "Array", min: 5, max: 100, defaultSize: 18, maxSize: 60 },
  ],
  makeDefaultInput: () => randomArray(),
  defaultOptions: { order: "asc" },
  buildSteps: selectionSortSteps,
  Renderer: SortRenderer,
};
