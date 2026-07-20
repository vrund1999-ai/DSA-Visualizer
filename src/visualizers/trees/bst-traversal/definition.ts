import type { VisualizerDefinition } from "@/core/types";
import type { TreeData, TreeInput, TreeOptions } from "../types";
import { TreeRenderer } from "../TreeRenderer";
import {
  inorderTraversalSteps,
  preorderTraversalSteps,
  postorderTraversalSteps,
  bfsTraversalSteps,
} from "./algorithm";
import { INORDER_CODE, PREORDER_CODE, POSTORDER_CODE, BFS_CODE } from "./code";
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

export const bstPreorderDefinition: VisualizerDefinition<
  TreeInput,
  TreeData,
  TreeOptions
> = {
  id: "bst-preorder",
  title: "BST Pre-order Traversal",
  category: "trees",
  summary: "Depth-first node→left→right walk (useful for copying/serializing a tree).",
  tags: ["binary search tree", "traversal", "DFS"],
  code: PREORDER_CODE,
  language: "typescript",
  complexity: { timeBest: "O(n)", timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [arrayInput],
  makeDefaultInput: () => makeTreeInput(9),
  defaultOptions: { traversal: "preorder" },
  buildSteps: (input) => preorderTraversalSteps(input),
  Renderer: TreeRenderer,
};

export const bstPostorderDefinition: VisualizerDefinition<
  TreeInput,
  TreeData,
  TreeOptions
> = {
  id: "bst-postorder",
  title: "BST Post-order Traversal",
  category: "trees",
  summary: "Depth-first left→right→node walk (useful for deleting/freeing a tree).",
  tags: ["binary search tree", "traversal", "DFS"],
  code: POSTORDER_CODE,
  language: "typescript",
  complexity: { timeBest: "O(n)", timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [arrayInput],
  makeDefaultInput: () => makeTreeInput(9),
  defaultOptions: { traversal: "postorder" },
  buildSteps: (input) => postorderTraversalSteps(input),
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
