import type { LeetCodeProblem } from "../../types";
import type { GoodPairsData } from "./algorithm";
import { goodPairsSteps } from "./algorithm";
import { CODE } from "./code";
import { GoodPairsRenderer } from "./GoodPairsRenderer";

export const numberOfGoodPairsProblem: LeetCodeProblem<number[], GoodPairsData, Record<string, never>> = {
  id: "number-of-good-pairs",
  number: 1512,
  title: "Number of Good Pairs",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/number-of-good-pairs/",
  summary: "Running count of each value; each repeat adds that many good pairs.",
  prompt:
    "A good pair is indices (i, j) with i < j and nums[i] == nums[j]. Return the number " +
    "of good pairs.",
  topics: ["Array", "Hash Table", "Math", "Counting"],
  tags: ["Array", "Hash Table", "Counting"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 1, 1, 3],
  defaultOptions: {},
  buildSteps: (input) => goodPairsSteps(input),
  Renderer: GoodPairsRenderer,
};
