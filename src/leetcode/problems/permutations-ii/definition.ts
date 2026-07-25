import type { LeetCodeProblem } from "../../types";
import type { PermutationsIIData } from "./algorithm";
import { permutationsIISteps } from "./algorithm";
import { CODE } from "./code";
import { PermutationsIIRenderer } from "./PermutationsIIRenderer";

export const permutationsIIProblem: LeetCodeProblem<number[], PermutationsIIData, Record<string, never>> = {
  id: "permutations-ii",
  number: 47,
  title: "Permutations II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/permutations-ii/",
  summary: "Backtracking over sorted numbers, skipping duplicate branches.",
  prompt:
    "Given a collection of numbers that may contain duplicates, return all unique " +
    "permutations in any order.",
  topics: ["Array", "Backtracking", "Sorting"],
  tags: ["Array", "Backtracking", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·n!)", timeWorst: "O(n·n!)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 2],
  defaultOptions: {},
  buildSteps: (input) => permutationsIISteps(input),
  Renderer: PermutationsIIRenderer,
};
