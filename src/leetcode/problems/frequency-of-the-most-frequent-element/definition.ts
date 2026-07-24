import type { LeetCodeProblem } from "../../types";
import type { FreqData, FreqInput } from "./algorithm";
import { freqSteps } from "./algorithm";
import { CODE } from "./code";
import { FreqRenderer } from "./FreqRenderer";

export const frequencyMostFrequentProblem: LeetCodeProblem<
  FreqInput,
  FreqData,
  Record<string, never>
> = {
  id: "frequency-of-the-most-frequent-element",
  number: 1838,
  title: "Frequency of the Most Frequent Element",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
  summary: "Max element frequency after k increments (sliding window).",
  prompt:
    "Given `nums` and `k` (the total increments you may apply, each +1 to some " +
    "element), return the maximum possible frequency of any single value.",
  topics: ["Array", "Binary Search", "Greedy", "Sliding Window", "Sorting", "Prefix Sum"],
  tags: ["Array", "Binary Search", "Greedy", "Sliding Window", "Sorting", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 4, 8, 13], k: 5 }),
  defaultOptions: {},
  buildSteps: (input) => freqSteps(input),
  Renderer: FreqRenderer,
};
