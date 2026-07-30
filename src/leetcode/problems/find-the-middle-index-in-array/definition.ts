import type { LeetCodeProblem } from "../../types";
import type { MiddleIndexData } from "./algorithm";
import { middleIndexSteps } from "./algorithm";
import { CODE } from "./code";
import { MiddleIndexRenderer } from "./MiddleIndexRenderer";

interface MiddleIndexInput {
  nums: number[];
}

export const findMiddleIndexProblem: LeetCodeProblem<MiddleIndexInput, MiddleIndexData, Record<string, never>> = {
  id: "find-the-middle-index-in-array",
  number: 1991,
  title: "Find the Middle Index in Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-middle-index-in-array/",
  summary: "A running left sum plus total − left − nums[i] as the right sum finds the leftmost balanced index.",
  prompt:
    "Return the leftmost index i such that the sum of nums[0..i-1] equals the sum of nums[i+1..n-1] (both " +
    "empty sums count as 0), or -1 if none exists.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Prefix Sum", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 3, -1, 8, 4] }),
  defaultOptions: {},
  buildSteps: (input) => middleIndexSteps(input.nums),
  Renderer: MiddleIndexRenderer,
};
