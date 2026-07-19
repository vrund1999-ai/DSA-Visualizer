import type { VisualizerDefinition } from "@/core/types";
import type { TreeData, TreeInput, TreeOptions } from "../types";
import { TreeRenderer } from "../TreeRenderer";
import { inorderTraversalSteps, bfsTraversalSteps } from "./algorithm";
import { INORDER_CODE, BFS_CODE } from "./code";
import { makeTreeInput } from "../input";

const arrayInput = {
  kind: "array" as const,
  label: "Values",
  min: 10,
  max: 99,
  defaultSize: 9,
  maxSize: 15,
};

export const bstInorderDefinition: VisualizerDefinition<
  TreeInput,
  TreeData,
  TreeOptions
> = {
  id: "bst-inorder",
  title: "BST In-order Traversal",
  category: "trees",
  summary: "Depth-first left→node→right walk, which visits a BST's values in sorted order.",
  tags: ["binary search tree", "traversal", "DFS"],
  code: INORDER_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n)",
    timeAverage: "O(n)",
    timeWorst: "O(n)",
    space: "O(h)",
  },
  inputSchema: [arrayInput],
  makeDefaultInput: () => makeTreeInput(9),
  defaultOptions: { traversal: "inorder" },
  buildSteps: (input) => inorderTraversalSteps(input),
  Renderer: TreeRenderer,
};

export const bstBfsDefinition: VisualizerDefinition<
  TreeInput,
  TreeData,
  TreeOptions
> = {
  id: "bst-bfs",
  title: "BST Level-order Traversal",
  category: "trees",
  summary: "Breadth-first walk that visits nodes level by level using a queue.",
  tags: ["binary search tree", "traversal", "BFS"],
  code: BFS_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n)",
    timeAverage: "O(n)",
    timeWorst: "O(n)",
    space: "O(n)",
  },
  inputSchema: [arrayInput],
  makeDefaultInput: () => makeTreeInput(9),
  defaultOptions: { traversal: "bfs" },
  buildSteps: (input) => bfsTraversalSteps(input),
  Renderer: TreeRenderer,
};
