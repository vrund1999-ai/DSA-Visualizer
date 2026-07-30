import type { LeetCodeProblem } from "../../types";
import type { NumTreesData } from "./algorithm";
import { numTreesSteps } from "./algorithm";
import { CODE } from "./code";
import { NumTreesRenderer } from "./NumTreesRenderer";

export const uniqueBSTsProblem: LeetCodeProblem<number, NumTreesData, Record<string, never>> = {
  id: "unique-binary-search-trees",
  number: 96,
  title: "Unique Binary Search Trees",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/unique-binary-search-trees/",
  summary: "Catalan DP: each root splits nodes into left/right groups whose BST counts multiply and sum.",
  prompt: "Given n, return the number of structurally unique BSTs that store the values 1…n.",
  topics: ["Math", "Dynamic Programming", "Tree", "Binary Search Tree"],
  tags: ["Dynamic Programming", "Math"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 5,
  defaultOptions: {},
  buildSteps: (input) => numTreesSteps(input),
  Renderer: NumTreesRenderer,
};
