import type { LeetCodeProblem } from "../../types";
import type { CustomSortData } from "./algorithm";
import { customSortSteps } from "./algorithm";
import { CODE } from "./code";
import { CustomSortRenderer } from "./CustomSortRenderer";

interface CustomSortInput {
  order: string;
  s: string;
}

export const customSortStringProblem: LeetCodeProblem<CustomSortInput, CustomSortData, Record<string, never>> = {
  id: "custom-sort-string",
  number: 791,
  title: "Custom Sort String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/custom-sort-string/",
  summary: "Count characters of s, then emit them in the priority given by order, appending any leftovers.",
  prompt:
    "Given a permutation `order` defining character priority, rearrange the characters of s so that they " +
    "follow that order (characters not in order may go anywhere).",
  topics: ["Hash Table", "String", "Sorting"],
  tags: ["Sorting", "Counting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(|order| + |s|)", timeWorst: "O(|order| + |s|)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ order: "cba", s: "abcd" }),
  defaultOptions: {},
  buildSteps: (input) => customSortSteps(input.order, input.s),
  Renderer: CustomSortRenderer,
};
