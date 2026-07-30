import type { LeetCodeProblem } from "../../types";
import type { EqualSubData } from "./algorithm";
import { equalSubSteps } from "./algorithm";
import { CODE } from "./code";
import { EqualSubRenderer } from "./EqualSubRenderer";

interface EqualSubInput {
  s: string;
  t: string;
  maxCost: number;
}

export const getEqualSubstringsProblem: LeetCodeProblem<EqualSubInput, EqualSubData, Record<string, never>> = {
  id: "get-equal-substrings-within-budget",
  number: 1208,
  title: "Get Equal Substrings Within Budget",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/get-equal-substrings-within-budget/",
  summary: "Sliding window over per-character conversion costs, shrinking whenever the running cost exceeds the budget.",
  prompt:
    "Changing s[i] to t[i] costs |s[i] − t[i]| (as letter codes). Return the maximum length of a substring " +
    "of s that can be changed to the matching substring of t with total cost at most maxCost.",
  topics: ["String", "Sliding Window", "Binary Search"],
  tags: ["Sliding Window", "String"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "abcd", t: "bcdf", maxCost: 3 }),
  defaultOptions: {},
  buildSteps: (input) => equalSubSteps(input.s, input.t, input.maxCost),
  Renderer: EqualSubRenderer,
};
