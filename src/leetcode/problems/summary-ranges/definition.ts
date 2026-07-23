import type { LeetCodeProblem } from "../../types";
import type { SummaryRangesData } from "./algorithm";
import { summaryRangesSteps } from "./algorithm";
import { CODE } from "./code";
import { SummaryRangesRenderer } from "./SummaryRangesRenderer";

export const summaryRangesProblem: LeetCodeProblem<
  number[],
  SummaryRangesData,
  Record<string, never>
> = {
  id: "summary-ranges",
  number: 228,
  title: "Summary Ranges",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/summary-ranges/",
  summary: "Compress a sorted array into consecutive ranges.",
  prompt:
    "Given a sorted array of distinct integers, return the smallest sorted list " +
    "of ranges that cover all the numbers exactly. Each range is 'a' or 'a->b'.",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 1, 2, 4, 5, 7],
  defaultOptions: {},
  buildSteps: (input) => summaryRangesSteps(input),
  Renderer: SummaryRangesRenderer,
};
