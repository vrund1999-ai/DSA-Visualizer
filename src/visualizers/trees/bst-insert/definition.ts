import type { VisualizerDefinition } from "@/core/types";
import type { TreeData, TreeInput, TreeOptions } from "../types";
import { TreeRenderer } from "../TreeRenderer";
import { bstInsertSteps } from "./algorithm";
import { BST_INSERT_CODE } from "./code";
import { makeTreeInput } from "../input";

export const bstInsertDefinition: VisualizerDefinition<
  TreeInput,
  TreeData,
  TreeOptions
> = {
  id: "bst-insert",
  title: "BST Insertion",
  category: "trees",
  summary: "Inserts values one by one, walking left/right to find each spot.",
  tags: ["binary search tree", "insert"],
  code: BST_INSERT_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(log n)",
    timeAverage: "O(log n)",
    timeWorst: "O(n)",
    space: "O(n)",
  },
  inputSchema: [
    { kind: "array", label: "Values", min: 10, max: 99, defaultSize: 9, maxSize: 15 },
  ],
  makeDefaultInput: () => makeTreeInput(9),
  defaultOptions: {},
  buildSteps: (input) => bstInsertSteps(input),
  Renderer: TreeRenderer,
};
