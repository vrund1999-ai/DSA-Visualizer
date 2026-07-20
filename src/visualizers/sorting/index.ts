import { bubbleSortDefinition } from "./bubble-sort/definition";
import { selectionSortDefinition } from "./selection-sort/definition";
import { insertionSortDefinition } from "./insertion-sort/definition";
import { mergeSortDefinition } from "./merge-sort/definition";
import { quickSortDefinition } from "./quick-sort/definition";
import { heapSortDefinition } from "./heap-sort/definition";
import { shellSortDefinition } from "./shell-sort/definition";

/** Every sorting visualizer definition. Add new sorts to this list. */
export const sortingDefinitions = [
  bubbleSortDefinition,
  selectionSortDefinition,
  insertionSortDefinition,
  mergeSortDefinition,
  quickSortDefinition,
  heapSortDefinition,
  shellSortDefinition,
];
