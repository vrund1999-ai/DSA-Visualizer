import type { LeetCodeProblem } from "../../types";
import type { BalanceData } from "./algorithm";
import { balanceSteps } from "./algorithm";
import { CODE } from "./code";
import { BalanceRenderer } from "./BalanceRenderer";

export const minimumDeletionsBalancedProblem: LeetCodeProblem<string, BalanceData, Record<string, never>> = {
  id: "minimum-deletions-to-make-string-balanced",
  number: 1653,
  title: "Minimum Deletions to Make String Balanced",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/",
  summary: "Left-to-right DP: each 'a' either deletes itself or all earlier 'b's, whichever is cheaper.",
  prompt:
    "A string of 'a' and 'b' is balanced if no 'b' comes before an 'a' (no index i < j with s[i]='b', " +
    "s[j]='a'). Return the minimum deletions to make s balanced.",
  topics: ["String", "Dynamic Programming", "Stack"],
  tags: ["String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "aababbab",
  defaultOptions: {},
  buildSteps: (input) => balanceSteps(input),
  Renderer: BalanceRenderer,
};
