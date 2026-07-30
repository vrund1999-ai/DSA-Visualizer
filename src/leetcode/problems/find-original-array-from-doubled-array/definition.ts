import type { LeetCodeProblem } from "../../types";
import type { DoubledData } from "./algorithm";
import { doubledSteps } from "./algorithm";
import { CODE } from "./code";
import { DoubledRenderer } from "./DoubledRenderer";

export const findOriginalDoubledProblem: LeetCodeProblem<number[], DoubledData, Record<string, never>> = {
  id: "find-original-array-from-doubled-array",
  number: 2007,
  title: "Find Original Array From Doubled Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-original-array-from-doubled-array/",
  summary: "Sort, then greedily pair each smallest unused value with a copy of its double; leftovers mean impossible.",
  prompt:
    "An array `changed` is a doubled array if it is formed by appending twice every element of some " +
    "`original` array and shuffling. Recover any valid `original`, or return [] if none exists.",
  topics: ["Array", "Hash Table", "Greedy", "Sorting"],
  tags: ["Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 4, 2, 6, 8],
  defaultOptions: {},
  buildSteps: (input) => doubledSteps(input),
  Renderer: DoubledRenderer,
};
