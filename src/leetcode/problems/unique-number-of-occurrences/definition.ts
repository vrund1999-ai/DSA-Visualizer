import type { LeetCodeProblem } from "../../types";
import type { UniqueOccData } from "./algorithm";
import { uniqueOccSteps } from "./algorithm";
import { CODE } from "./code";
import { UniqueOccRenderer } from "./UniqueOccRenderer";

export const uniqueOccurrencesProblem: LeetCodeProblem<number[], UniqueOccData, Record<string, never>> = {
  id: "unique-number-of-occurrences",
  number: 1207,
  title: "Unique Number of Occurrences",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/unique-number-of-occurrences/",
  summary: "Tally occurrences, then confirm no two values share the same count.",
  prompt:
    "Given an array of integers, return true if the number of occurrences of each value " +
    "is unique.",
  topics: ["Array", "Hash Table"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 2, 1, 1, 3],
  defaultOptions: {},
  buildSteps: (input) => uniqueOccSteps(input),
  Renderer: UniqueOccRenderer,
};
