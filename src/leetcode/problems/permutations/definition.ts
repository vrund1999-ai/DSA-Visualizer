import type { LeetCodeProblem } from "../../types";
import type { PermutationsData } from "./algorithm";
import { permutationsSteps } from "./algorithm";
import { CODE } from "./code";
import { PermutationsRenderer } from "./PermutationsRenderer";

export const permutationsProblem: LeetCodeProblem<
  number[],
  PermutationsData,
  Record<string, never>
> = {
  id: "permutations",
  number: 46,
  title: "Permutations",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/permutations/",
  summary: "All orderings of distinct numbers via backtracking.",
  prompt:
    "Given an array `nums` of distinct integers, return all possible " +
    "permutations in any order.",
  topics: ["Array", "Backtracking"],
  tags: ["Array", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·n!)", timeWorst: "O(n·n!)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3],
  defaultOptions: {},
  buildSteps: (input) => permutationsSteps(input),
  Renderer: PermutationsRenderer,
};
