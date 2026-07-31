import type { LeetCodeProblem } from "../../types";
import type { MaxAndData } from "./algorithm";
import { maxAndSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxAndRenderer } from "./MaxAndRenderer";

interface MaxAndInput {
  nums: number[];
}

export const longestMaxAndProblem: LeetCodeProblem<MaxAndInput, MaxAndData, Record<string, never>> = {
  id: "longest-subarray-with-maximum-bitwise-and",
  number: 2419,
  title: "Longest Subarray With Maximum Bitwise AND",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/",
  summary: "ANDing more elements only clears bits, so the best AND equals the max element — return its longest consecutive run.",
  prompt:
    "Return the length of the longest subarray whose bitwise AND equals the maximum possible AND of any " +
    "subarray of nums.",
  topics: ["Array", "Bit Manipulation", "Brainteaser"],
  tags: ["Bit Manipulation", "Brainteaser"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 3, 3, 2, 2] }),
  defaultOptions: {},
  buildSteps: (input) => maxAndSteps(input.nums),
  Renderer: MaxAndRenderer,
};
