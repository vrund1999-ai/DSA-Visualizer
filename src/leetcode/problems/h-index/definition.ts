import type { LeetCodeProblem } from "../../types";
import type { HIndexData } from "./algorithm";
import { hIndexSteps } from "./algorithm";
import { CODE } from "./code";
import { HIndexRenderer } from "./HIndexRenderer";

export const hIndexProblem: LeetCodeProblem<
  number[],
  HIndexData,
  Record<string, never>
> = {
  id: "h-index",
  number: 274,
  title: "H-Index",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/h-index/",
  summary: "Largest h with h papers cited at least h times (sort).",
  prompt:
    "Given an array `citations` where citations[i] is the citation count of the " +
    "i-th paper, return the researcher's h-index: the maximum h such that h " +
    "papers have at least h citations each.",
  topics: ["Array", "Sorting", "Counting Sort"],
  tags: ["Array", "Sorting", "Counting Sort"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 0, 6, 1, 5],
  defaultOptions: {},
  buildSteps: (input) => hIndexSteps(input),
  Renderer: HIndexRenderer,
};
