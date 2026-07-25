import type { LeetCodeProblem } from "../../types";
import type { CountAndSayData } from "./algorithm";
import { countAndSaySteps } from "./algorithm";
import { CODE } from "./code";
import { CountAndSayRenderer } from "./CountAndSayRenderer";

export const countAndSayProblem: LeetCodeProblem<number, CountAndSayData, Record<string, never>> = {
  id: "count-and-say",
  number: 38,
  title: "Count and Say",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-and-say/",
  summary: "Each term run-length-encodes the previous, starting from '1'.",
  prompt:
    "The count-and-say sequence starts with '1'; each subsequent term is obtained by " +
    "reading off the previous term as consecutive runs of 'count' + 'digit'. Return the " +
    "nth term.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2^n)", timeWorst: "O(2^n)", space: "O(2^n)" },
  inputSchema: [],
  makeDefaultInput: () => 5,
  defaultOptions: {},
  buildSteps: (input) => countAndSaySteps(input),
  Renderer: CountAndSayRenderer,
};
