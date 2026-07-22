import type { LeetCodeProblem } from "../../types";
import type { HappyData } from "./algorithm";
import { happySteps } from "./algorithm";
import { CODE } from "./code";
import { HappyRenderer } from "./HappyRenderer";

export const happyNumberProblem: LeetCodeProblem<
  number,
  HappyData,
  Record<string, never>
> = {
  id: "happy-number",
  number: 202,
  title: "Happy Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/happy-number/",
  summary: "Digit-square-sum loop; happy reaches 1, else cycles.",
  prompt:
    "A number is happy if repeatedly replacing it with the sum of the squares of " +
    "its digits eventually reaches 1. Given `n`, return true if it is happy.",
  topics: ["Hash Table", "Math", "Two Pointers"],
  tags: ["Hash Table", "Math", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 48.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 19,
  defaultOptions: {},
  buildSteps: (input) => happySteps(input),
  Renderer: HappyRenderer,
};
