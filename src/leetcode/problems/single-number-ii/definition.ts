import type { LeetCodeProblem } from "../../types";
import type { SingleNumberIIData } from "./algorithm";
import { singleNumberIISteps } from "./algorithm";
import { CODE } from "./code";
import { SingleNumberIIRenderer } from "./SingleNumberIIRenderer";

export const singleNumberIIProblem: LeetCodeProblem<
  number[],
  SingleNumberIIData,
  Record<string, never>
> = {
  id: "single-number-ii",
  number: 137,
  title: "Single Number II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/single-number-ii/",
  summary: "Find the once-appearing value when others appear thrice (bit tally).",
  prompt:
    "Given an array where every element appears exactly three times except for " +
    "one, find that single element. Use O(n) time and O(1) extra space.",
  topics: ["Array", "Bit Manipulation"],
  tags: ["Array", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 2, 3, 2],
  defaultOptions: {},
  buildSteps: (input) => singleNumberIISteps(input),
  Renderer: SingleNumberIIRenderer,
};
