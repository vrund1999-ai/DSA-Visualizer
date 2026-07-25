import type { LeetCodeProblem } from "../../types";
import type { ReverseStrData } from "./algorithm";
import { reverseStrSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseStrRenderer } from "./ReverseStrRenderer";

interface ReverseStrInput {
  s: string;
  k: number;
}

export const reverseStringIIProblem: LeetCodeProblem<ReverseStrInput, ReverseStrData, Record<string, never>> = {
  id: "reverse-string-ii",
  number: 541,
  title: "Reverse String II",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/reverse-string-ii/",
  summary: "Stride by 2k; reverse the first k characters of each block.",
  prompt:
    "Given a string s and integer k, reverse the first k characters for every 2k " +
    "characters counting from the start. If fewer than k remain, reverse all of them.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "abcdefg", k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => reverseStrSteps(input.s, input.k),
  Renderer: ReverseStrRenderer,
};
