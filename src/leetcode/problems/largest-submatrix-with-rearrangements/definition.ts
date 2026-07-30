import type { LeetCodeProblem } from "../../types";
import type { LargestSubmatrixData } from "./algorithm";
import { largestSubmatrixSteps } from "./algorithm";
import { CODE } from "./code";
import { LargestSubmatrixRenderer } from "./LargestSubmatrixRenderer";

interface LargestSubmatrixInput {
  matrix: number[][];
}

export const largestSubmatrixProblem: LeetCodeProblem<LargestSubmatrixInput, LargestSubmatrixData, Record<string, never>> = {
  id: "largest-submatrix-with-rearrangements",
  number: 1727,
  title: "Largest Submatrix With Rearrangements",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/largest-submatrix-with-rearrangements/",
  summary: "Column heights per row, sorted descending: width (j+1) at height h[j] gives area h[j]·(j+1); take the max.",
  prompt:
    "Given a binary matrix whose columns may be reordered in any way, return the area of the largest " +
    "submatrix containing only 1s achievable after an optimal rearrangement.",
  topics: ["Array", "Greedy", "Sorting", "Matrix"],
  tags: ["Greedy", "Sorting", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n log n)", timeWorst: "O(m·n log n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ matrix: [[0, 0, 1], [1, 1, 1], [1, 0, 1]] }),
  defaultOptions: {},
  buildSteps: (input) => largestSubmatrixSteps(input.matrix),
  Renderer: LargestSubmatrixRenderer,
};
