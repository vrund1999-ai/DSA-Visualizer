import type { LeetCodeProblem } from "../../types";
import type { BallsData } from "./algorithm";
import { ballsSteps } from "./algorithm";
import { CODE } from "./code";
import { BallsRenderer } from "./BallsRenderer";

interface BallsInput {
  nums: number[];
  maxOperations: number;
}

export const minimumLimitOfBallsProblem: LeetCodeProblem<BallsInput, BallsData, Record<string, never>> = {
  id: "minimum-limit-of-balls-in-a-bag",
  number: 1760,
  title: "Minimum Limit of Balls in a Bag",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/",
  summary: "Binary-search the max bag size; each bag needs ceil(n/cap)−1 splits within the budget.",
  prompt:
    "Each bag holds some balls. In one operation you split a bag into two. Given nums and " +
    "maxOperations, minimize the maximum number of balls in any bag (the penalty) and return it.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log(max))", timeWorst: "O(n log(max))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 4, 8, 2], maxOperations: 4 }),
  defaultOptions: {},
  buildSteps: (input) => ballsSteps(input.nums, input.maxOperations),
  Renderer: BallsRenderer,
};
