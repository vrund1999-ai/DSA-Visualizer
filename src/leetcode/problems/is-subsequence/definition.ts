import type { LeetCodeProblem } from "../../types";
import type { IsSubsequenceData, IsSubsequenceInput } from "./algorithm";
import { isSubsequenceSteps } from "./algorithm";
import { CODE } from "./code";
import { IsSubsequenceRenderer } from "./IsSubsequenceRenderer";

export const isSubsequenceProblem: LeetCodeProblem<
  IsSubsequenceInput,
  IsSubsequenceData,
  Record<string, never>
> = {
  id: "is-subsequence",
  number: 392,
  title: "Is Subsequence",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/is-subsequence/",
  summary: "Check subsequence membership with two pointers.",
  prompt:
    "Given two strings `s` and `t`, return true if `s` is a subsequence of `t` — " +
    "obtainable by deleting some (possibly zero) characters of t without " +
    "reordering.",
  topics: ["Two Pointers", "String", "Dynamic Programming"],
  tags: ["Two Pointers", "String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "abc", t: "ahbgdc" }),
  defaultOptions: {},
  buildSteps: (input) => isSubsequenceSteps(input),
  Renderer: IsSubsequenceRenderer,
};
