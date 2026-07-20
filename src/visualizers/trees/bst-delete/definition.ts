import type { VisualizerDefinition } from "@/core/types";
import type { TreeData, TreeOptions } from "../types";
import { TreeRenderer } from "../TreeRenderer";
import { bstDeleteSteps, type BSTDeleteInput } from "./algorithm";
import { BST_DELETE_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function makeDeleteInput(): BSTDeleteInput {
  const pool = Array.from({ length: 90 }, (_, i) => i + 10);
  for (let i = 0; i < 9; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const values = pool.slice(0, 9);
  // delete three of the inserted values in a random order (exercises all cases)
  const shuffled = [...values];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return { values, deletes: shuffled.slice(0, 3) };
}

export const bstDeleteDefinition: VisualizerDefinition<
  BSTDeleteInput,
  TreeData,
  TreeOptions
> = {
  id: "bst-delete",
  title: "BST Deletion",
  category: "trees",
  summary: "Removes nodes, handling leaf, single-child, and two-child (successor) cases.",
  tags: ["binary search tree", "delete"],
  code: BST_DELETE_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(log n)",
    timeAverage: "O(log n)",
    timeWorst: "O(n)",
    space: "O(h)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeDeleteInput,
  defaultOptions: {},
  buildSteps: (input) => bstDeleteSteps(input),
  Renderer: TreeRenderer,
};
