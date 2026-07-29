import type { LeetCodeProblem } from "../../types";
import type { SumNumbersData } from "./algorithm";
import { sumNumbersSteps } from "./algorithm";
import { CODE } from "./code";
import { SumNumbersRenderer } from "./SumNumbersRenderer";

export const sumRootToLeafNumbersProblem: LeetCodeProblem<(number | null)[], SumNumbersData, Record<string, never>> = {
  id: "sum-root-to-leaf-numbers",
  number: 129,
  title: "Sum Root to Leaf Numbers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
  summary: "DFS each path, forming a decimal number (value·10 + node), and sum over the leaves.",
  prompt:
    "Each root-to-leaf path in a binary tree of digits 0-9 forms a number. Return the total sum of all " +
    "such root-to-leaf numbers.",
  topics: ["Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 9, 0, 5, 1],
  defaultOptions: {},
  buildSteps: (input) => sumNumbersSteps(input),
  Renderer: SumNumbersRenderer,
};
