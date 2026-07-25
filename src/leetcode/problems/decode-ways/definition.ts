import type { LeetCodeProblem } from "../../types";
import type { DecodeWaysData } from "./algorithm";
import { decodeWaysSteps } from "./algorithm";
import { CODE } from "./code";
import { DecodeWaysRenderer } from "./DecodeWaysRenderer";

export const decodeWaysProblem: LeetCodeProblem<string, DecodeWaysData, Record<string, never>> = {
  id: "decode-ways",
  number: 91,
  title: "Decode Ways",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/decode-ways/",
  summary: "dp[i] adds one-digit (dp[i-1]) and valid two-digit (dp[i-2]) decodings, blocked by zeros.",
  prompt:
    "A message of digits maps A→1 … Z→26. Given a digit string, count the number of ways to " +
    "decode it back into letters.",
  topics: ["String", "Dynamic Programming"],
  tags: ["String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "226",
  defaultOptions: {},
  buildSteps: (input) => decodeWaysSteps(input),
  Renderer: DecodeWaysRenderer,
};
