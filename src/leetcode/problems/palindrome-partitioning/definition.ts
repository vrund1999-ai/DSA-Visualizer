import type { LeetCodeProblem } from "../../types";
import type { PalPartData } from "./algorithm";
import { palPartSteps } from "./algorithm";
import { CODE } from "./code";
import { PalPartRenderer } from "./PalPartRenderer";

export const palindromePartitioningProblem: LeetCodeProblem<
  string,
  PalPartData,
  Record<string, never>
> = {
  id: "palindrome-partitioning",
  number: 131,
  title: "Palindrome Partitioning",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/palindrome-partitioning/",
  summary: "All ways to split a string into palindromes (backtracking).",
  prompt:
    "Given a string `s`, partition it so every substring is a palindrome, and " +
    "return all possible palindrome partitionings.",
  topics: ["String", "Dynamic Programming", "Backtracking"],
  tags: ["String", "Dynamic Programming", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 59.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·2ⁿ)", timeWorst: "O(n·2ⁿ)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "aab",
  defaultOptions: {},
  buildSteps: (input) => palPartSteps(input),
  Renderer: PalPartRenderer,
};
