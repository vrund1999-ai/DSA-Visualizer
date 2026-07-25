import type { LeetCodeProblem } from "../../types";
import type { LemonadeData } from "./algorithm";
import { lemonadeSteps } from "./algorithm";
import { CODE } from "./code";
import { LemonadeRenderer } from "./LemonadeRenderer";

export const lemonadeChangeProblem: LeetCodeProblem<number[], LemonadeData, Record<string, never>> = {
  id: "lemonade-change",
  number: 860,
  title: "Lemonade Change",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/lemonade-change/",
  summary: "Greedily give change, spending $10 bills before three $5 bills.",
  prompt:
    "Each lemonade costs $5; customers pay with $5, $10, or $20 bills in order. Starting " +
    "with no change, return whether you can give every customer correct change.",
  topics: ["Array", "Greedy"],
  tags: ["Array", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 5, 5, 10, 20],
  defaultOptions: {},
  buildSteps: (input) => lemonadeSteps(input),
  Renderer: LemonadeRenderer,
};
