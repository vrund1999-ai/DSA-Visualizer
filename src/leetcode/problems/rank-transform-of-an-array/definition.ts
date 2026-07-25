import type { LeetCodeProblem } from "../../types";
import type { RankData } from "./algorithm";
import { rankSteps } from "./algorithm";
import { CODE } from "./code";
import { RankRenderer } from "./RankRenderer";

export const rankTransformProblem: LeetCodeProblem<number[], RankData, Record<string, never>> = {
  id: "rank-transform-of-an-array",
  number: 1331,
  title: "Rank Transform of an Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/rank-transform-of-an-array/",
  summary: "Sort distinct values to assign 1-based ranks, then replace each element by its rank.",
  prompt:
    "Replace each element of arr by its rank: the smallest distinct value has rank 1, the next " +
    "rank 2, and equal values share a rank.",
  topics: ["Array", "Hash Table", "Sorting"],
  tags: ["Array", "Hash Table", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [40, 10, 20, 30, 10],
  defaultOptions: {},
  buildSteps: (input) => rankSteps(input),
  Renderer: RankRenderer,
};
