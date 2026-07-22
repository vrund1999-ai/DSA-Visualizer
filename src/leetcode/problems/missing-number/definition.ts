import type { LeetCodeProblem } from "../../types";
import type { MissingData } from "./algorithm";
import { missingSteps } from "./algorithm";
import { CODE } from "./code";
import { MissingRenderer } from "./MissingRenderer";

export const missingNumberProblem: LeetCodeProblem<
  number[],
  MissingData,
  Record<string, never>
> = {
  id: "missing-number",
  number: 268,
  title: "Missing Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/missing-number/",
  summary: "Find the missing value in 0..n using XOR.",
  prompt:
    "Given an array `nums` containing n distinct numbers from the range [0, n], " +
    "return the one number in that range that is missing.",
  topics: ["Array", "Hash Table", "Math", "Bit Manipulation"],
  tags: ["Array", "Hash Table", "Math", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 53.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 0, 1],
  defaultOptions: {},
  buildSteps: (input) => missingSteps(input),
  Renderer: MissingRenderer,
};
