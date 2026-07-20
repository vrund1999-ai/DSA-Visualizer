import type { VisualizerDefinition } from "@/core/types";
import type { SortData, SortInput, SortOptions } from "../types";
import { SortRenderer } from "../SortRenderer";
import { shellSortSteps } from "./algorithm";
import { SHELL_SORT_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size = 16, min = 5, max = 100): SortInput =>
  Array.from({ length: size }, () => randInt(min, max));

export const shellSortDefinition: VisualizerDefinition<
  SortInput,
  SortData,
  SortOptions
> = {
  id: "shell-sort",
  title: "Shell Sort",
  category: "sorting",
  summary: "Insertion sort over shrinking gaps, moving elements a long way early.",
  tags: ["comparison", "in-place", "gapped"],
  code: SHELL_SORT_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n log n)",
    timeAverage: "O(n^1.25)",
    timeWorst: "O(n²)",
    space: "O(1)",
    stable: false,
    inPlace: true,
  },
  inputSchema: [
    { kind: "array", label: "Array", min: 5, max: 100, defaultSize: 16, maxSize: 48 },
  ],
  makeDefaultInput: () => randomArray(),
  defaultOptions: { order: "asc" },
  buildSteps: shellSortSteps,
  Renderer: SortRenderer,
};
