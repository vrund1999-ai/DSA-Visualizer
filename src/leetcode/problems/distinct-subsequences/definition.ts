import type { LeetCodeProblem } from "../../types";
import type { DistinctSubseqData } from "./algorithm";
import { distinctSubseqSteps } from "./algorithm";
import { CODE } from "./code";
import { DistinctSubseqRenderer } from "./DistinctSubseqRenderer";

interface DistinctSubseqInput {
  s: string;
  t: string;
}

export const distinctSubsequencesProblem: LeetCodeProblem<DistinctSubseqInput, DistinctSubseqData, Record<string, never>> = {
  id: "distinct-subsequences",
  number: 115,
  title: "Distinct Subsequences",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/distinct-subsequences/",
  summary: "Fill a dp grid: each cell inherits dp[i-1][j], plus dp[i-1][j-1] when characters match.",
  prompt:
    "Given strings s and t, count the number of distinct subsequences of s that equal t (a " +
    "subsequence keeps relative order but may drop characters).",
  topics: ["String", "Dynamic Programming"],
  tags: ["String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "rabbbit", t: "rabbit" }),
  defaultOptions: {},
  buildSteps: (input) => distinctSubseqSteps(input.s, input.t),
  Renderer: DistinctSubseqRenderer,
};
