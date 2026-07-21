import type { LeetCodeProblem } from "../../types";
import type { ClimbData } from "./algorithm";
import { climbSteps } from "./algorithm";
import { CODE } from "./code";
import { ClimbRenderer } from "./ClimbRenderer";

export const climbingStairsProblem: LeetCodeProblem<
  number,
  ClimbData,
  Record<string, never>
> = {
  id: "climbing-stairs",
  number: 70,
  title: "Climbing Stairs",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/climbing-stairs/",
  summary: "Count ways to climb n steps taking 1 or 2 at a time.",
  prompt:
    "You are climbing a staircase that takes `n` steps to reach the top. Each " +
    "time you can climb 1 or 2 steps. In how many distinct ways can you reach " +
    "the top?",
  topics: ["Math", "Dynamic Programming", "Memoization"],
  tags: ["Math", "Dynamic Programming", "Memoization"],
  companies: ["Bloomberg"],
  frequency: 65.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 6,
  defaultOptions: {},
  buildSteps: (input) => climbSteps(input),
  Renderer: ClimbRenderer,
};
