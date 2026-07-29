import type { LeetCodeProblem } from "../../types";
import type { RanksData } from "./algorithm";
import { ranksSteps } from "./algorithm";
import { CODE } from "./code";
import { RanksRenderer } from "./RanksRenderer";

export const relativeRanksProblem: LeetCodeProblem<number[], RanksData, Record<string, never>> = {
  id: "relative-ranks",
  number: 506,
  title: "Relative Ranks",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/relative-ranks/",
  summary: "Sort indices by descending score; the top three get medals, the rest their placement number.",
  prompt:
    "Given unique scores, return each athlete's rank: '1st'/'2nd'/'3rd' place get 'Gold/Silver/Bronze " +
    "Medal', and the rest get their placement number as a string.",
  topics: ["Array", "Sorting", "Heap"],
  tags: ["Array", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [10, 3, 8, 9, 4],
  defaultOptions: {},
  buildSteps: (input) => ranksSteps(input),
  Renderer: RanksRenderer,
};
