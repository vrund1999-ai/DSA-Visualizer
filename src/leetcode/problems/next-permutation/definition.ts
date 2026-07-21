import type { LeetCodeProblem } from "../../types";
import type { NextPermData } from "./algorithm";
import { nextPermSteps } from "./algorithm";
import { CODE } from "./code";
import { NextPermRenderer } from "./NextPermRenderer";

export const nextPermutationProblem: LeetCodeProblem<
  number[],
  NextPermData,
  Record<string, never>
> = {
  id: "next-permutation",
  number: 31,
  title: "Next Permutation",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/next-permutation/",
  summary: "Rearrange numbers into the next greater permutation, in-place.",
  prompt:
    "Given an array of numbers, rearrange them into the lexicographically next " +
    "greater permutation. If no greater permutation exists, rearrange to the " +
    "lowest order (ascending). Must be done in-place with O(1) extra memory.",
  topics: ["Array", "Two Pointers"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 68.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 5, 4, 2],
  defaultOptions: {},
  buildSteps: (input) => nextPermSteps(input),
  Renderer: NextPermRenderer,
};
