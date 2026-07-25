import type { LeetCodeProblem } from "../../types";
import type { SingleIIIData } from "./algorithm";
import { singleIIISteps } from "./algorithm";
import { CODE } from "./code";
import { SingleIIIRenderer } from "./SingleIIIRenderer";

export const singleNumberIIIProblem: LeetCodeProblem<number[], SingleIIIData, Record<string, never>> = {
  id: "single-number-iii",
  number: 260,
  title: "Single Number III",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/single-number-iii/",
  summary: "XOR all to get a^b, use a differing bit to split into two groups, XOR each apart.",
  prompt:
    "Exactly two elements of nums appear once and all others appear twice. Return the two " +
    "single elements, in any order, using linear time and constant extra space.",
  topics: ["Array", "Bit Manipulation"],
  tags: ["Array", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 1, 3, 2, 5],
  defaultOptions: {},
  buildSteps: (input) => singleIIISteps(input),
  Renderer: SingleIIIRenderer,
};
