import type { LeetCodeProblem } from "../../types";
import type { SerializeData } from "./algorithm";
import { serializeSteps } from "./algorithm";
import { CODE } from "./code";
import { SerializeRenderer } from "./SerializeRenderer";

export const serializeDeserializeProblem: LeetCodeProblem<
  (number | null)[],
  SerializeData,
  Record<string, never>
> = {
  id: "serialize-and-deserialize-binary-tree",
  number: 297,
  title: "Serialize and Deserialize Binary Tree",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
  summary: "Preorder encoding with '#' null markers uniquely captures the tree shape.",
  prompt:
    "Design an algorithm to serialize a binary tree to a string and deserialize it back. " +
    "This visualization shows preorder serialization, using '#' for null children. " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Design", "String", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Design", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, null, null, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => serializeSteps(input),
  Renderer: SerializeRenderer,
};
