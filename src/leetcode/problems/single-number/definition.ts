import type { LeetCodeProblem } from "../../types";
import type { SingleNumberData } from "./algorithm";
import { singleNumberSteps } from "./algorithm";
import { CODE } from "./code";
import { SingleNumberRenderer } from "./SingleNumberRenderer";

export const singleNumberProblem: LeetCodeProblem<
  number[],
  SingleNumberData,
  Record<string, never>
> = {
  id: "single-number",
  number: 136,
  title: "Single Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/single-number/",
  summary: "Find the lone unpaired value using XOR.",
  prompt:
    "Given a non-empty array `nums` where every element appears twice except " +
    "one, find that single one. Use O(n) time and O(1) extra space.",
  topics: ["Array", "Bit Manipulation"],
  tags: ["Array", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 62.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 1, 2, 1, 2],
  defaultOptions: {},
  buildSteps: (input) => singleNumberSteps(input),
  Renderer: SingleNumberRenderer,
};
