import type { LeetCodeProblem } from "../../types";
import type { Max69Data } from "./algorithm";
import { max69Steps } from "./algorithm";
import { CODE } from "./code";
import { Max69Renderer } from "./Max69Renderer";

interface Max69Input {
  num: number;
}

export const maximum69Problem: LeetCodeProblem<Max69Input, Max69Data, Record<string, never>> = {
  id: "maximum-69-number",
  number: 1323,
  title: "Maximum 69 Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-69-number/",
  summary: "Changing the most-significant 6 to a 9 gives the largest possible value with at most one change.",
  prompt:
    "You have a number made of only 6s and 9s. Change at most one digit (6→9 or 9→6) to get the maximum " +
    "possible number.",
  topics: ["Math", "Greedy"],
  tags: ["Greedy", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(d)", timeWorst: "O(d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => ({ num: 9669 }),
  defaultOptions: {},
  buildSteps: (input) => max69Steps(input.num),
  Renderer: Max69Renderer,
};
