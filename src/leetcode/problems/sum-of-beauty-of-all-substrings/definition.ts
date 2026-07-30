import type { LeetCodeProblem } from "../../types";
import type { BeautyData } from "./algorithm";
import { beautySteps } from "./algorithm";
import { CODE } from "./code";
import { BeautyRenderer } from "./BeautyRenderer";

interface BeautyInput {
  s: string;
}

export const sumOfBeautyProblem: LeetCodeProblem<BeautyInput, BeautyData, Record<string, never>> = {
  id: "sum-of-beauty-of-all-substrings",
  number: 1781,
  title: "Sum of Beauty of All Substrings",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
  summary: "Beauty is (max − min) character frequency; fix each start and extend the end, maintaining a frequency table.",
  prompt:
    "The beauty of a string is the difference between the most-frequent and least-frequent character counts. " +
    "Return the sum of beauty over all substrings of s.",
  topics: ["Hash Table", "String", "Counting"],
  tags: ["Hash Table", "Counting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²·26)", timeWorst: "O(n²·26)", space: "O(26)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "aabcb" }),
  defaultOptions: {},
  buildSteps: (input) => beautySteps(input.s),
  Renderer: BeautyRenderer,
};
