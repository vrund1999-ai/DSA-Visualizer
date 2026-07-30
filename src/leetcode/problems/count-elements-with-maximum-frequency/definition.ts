import type { LeetCodeProblem } from "../../types";
import type { MaxFreqData } from "./algorithm";
import { maxFreqSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxFreqRenderer } from "./MaxFreqRenderer";

interface MaxFreqInput {
  nums: number[];
}

export const countMaxFreqProblem: LeetCodeProblem<MaxFreqInput, MaxFreqData, Record<string, never>> = {
  id: "count-elements-with-maximum-frequency",
  number: 3005,
  title: "Count Elements With Maximum Frequency",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
  summary: "Tally frequencies, find the largest, then sum the counts of every value that reaches it.",
  prompt:
    "Return the total number of elements in nums that have the maximum frequency (the sum of the counts of " +
    "all values tied for the highest frequency).",
  topics: ["Array", "Hash Table", "Counting"],
  tags: ["Hash Table", "Counting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 2, 3, 1, 4] }),
  defaultOptions: {},
  buildSteps: (input) => maxFreqSteps(input.nums),
  Renderer: MaxFreqRenderer,
};
