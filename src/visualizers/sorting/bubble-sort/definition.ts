import type { VisualizerDefinition } from "@/core/types";
import type { SortData, SortInput, SortOptions } from "../types";
import { SortRenderer } from "../SortRenderer";
import { bubbleSortSteps } from "./algorithm";
import { BUBBLE_SORT_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size = 18, min = 5, max = 100): SortInput =>
  Array.from({ length: size }, () => randInt(min, max));

export const bubbleSortDefinition: VisualizerDefinition<
  SortInput,
  SortData,
  SortOptions
> = {
  id: "bubble-sort",
  title: "Bubble Sort",
  category: "sorting",
  summary: "Repeatedly swaps adjacent out-of-order elements until sorted.",
  tags: ["comparison", "in-place", "stable"],
  code: BUBBLE_SORT_CODE,
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
  buildSteps: bubbleSortSteps,
  Renderer: SortRenderer,
};
