import type { LeetCodeProblem } from "../../types";
import type { CircularLoopData } from "./algorithm";
import { circularLoopSteps } from "./algorithm";
import { CODE } from "./code";
import { CircularLoopRenderer } from "./CircularLoopRenderer";

export const circularArrayLoopProblem: LeetCodeProblem<number[], CircularLoopData, Record<string, never>> = {
  id: "circular-array-loop",
  number: 457,
  title: "Circular Array Loop",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/circular-array-loop/",
  summary: "Floyd's tortoise & hare over next(i) = (i + nums[i]) mod n, requiring a same-direction cycle of length > 1.",
  prompt:
    "Each nums[i] is a signed jump forward (positive) or backward (negative) in a circular array. Return " +
    "true if there is a cycle where every move is the same direction and the cycle length is greater than 1.",
  topics: ["Array", "Hash Table", "Two Pointers"],
  tags: ["Two Pointers", "Fast & Slow"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, -1, 1, 2, 2],
  defaultOptions: {},
  buildSteps: (input) => circularLoopSteps(input),
  Renderer: CircularLoopRenderer,
};
