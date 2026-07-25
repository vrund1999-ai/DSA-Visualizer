import type { LeetCodeProblem } from "../../types";
import type { PalinSubData } from "./algorithm";
import { palinSubSteps } from "./algorithm";
import { CODE } from "./code";
import { PalinSubRenderer } from "./PalinSubRenderer";

export const palindromicSubstringsProblem: LeetCodeProblem<string, PalinSubData, Record<string, never>> = {
  id: "palindromic-substrings",
  number: 647,
  title: "Palindromic Substrings",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/palindromic-substrings/",
  summary: "Expand around each of the 2n−1 centers, counting matches.",
  prompt:
    "Given a string s, return the number of palindromic substrings it contains " +
    "(substrings at different positions count separately).",
  topics: ["Two Pointers", "String", "Dynamic Programming"],
  tags: ["Two Pointers", "String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "aaba",
  defaultOptions: {},
  buildSteps: (input) => palinSubSteps(input),
  Renderer: PalinSubRenderer,
};
