import type { LeetCodeProblem } from "../../types";
import type { KClosestData } from "./algorithm";
import { kClosestSteps } from "./algorithm";
import { CODE } from "./code";
import { KClosestRenderer } from "./KClosestRenderer";

interface KClosestInput {
  points: number[][];
  k: number;
}

export const kClosestPointsProblem: LeetCodeProblem<KClosestInput, KClosestData, Record<string, never>> = {
  id: "k-closest-points-to-origin",
  number: 973,
  title: "K Closest Points to Origin",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/k-closest-points-to-origin/",
  summary: "Rank points by squared distance x²+y² and keep the k smallest.",
  prompt: "Given an array of points on a plane and an integer k, return the k points closest to the origin (0, 0).",
  topics: ["Array", "Math", "Divide and Conquer", "Sorting", "Heap", "Quickselect"],
  tags: ["Array", "Math", "Sorting", "Heap"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ points: [[1, 3], [-2, 2], [5, 8], [0, 1]], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => kClosestSteps(input.points, input.k),
  Renderer: KClosestRenderer,
};
