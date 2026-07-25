import type { LeetCodeProblem } from "../../types";
import type { InterleaveData } from "./algorithm";
import { interleaveSteps } from "./algorithm";
import { CODE } from "./code";
import { InterleaveRenderer } from "./InterleaveRenderer";

interface InterleaveInput {
  s1: string;
  s2: string;
  s3: string;
}

export const interleavingStringProblem: LeetCodeProblem<InterleaveInput, InterleaveData, Record<string, never>> = {
  id: "interleaving-string",
  number: 97,
  title: "Interleaving String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/interleaving-string/",
  summary: "2-D DP over s1 × s2; each step consumes one matching char of s3.",
  prompt:
    "Given strings s1, s2, and s3, return true if s3 can be formed by interleaving s1 and " +
    "s2 — using all characters of both while preserving each string's internal order.",
  topics: ["String", "Dynamic Programming"],
  tags: ["String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s1: "aabcc", s2: "dbbca", s3: "aadbbcbcac" }),
  defaultOptions: {},
  buildSteps: (input) => interleaveSteps(input.s1, input.s2, input.s3),
  Renderer: InterleaveRenderer,
};
