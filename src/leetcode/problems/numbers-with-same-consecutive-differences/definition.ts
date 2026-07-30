import type { LeetCodeProblem } from "../../types";
import type { ConsecDiffData } from "./algorithm";
import { consecDiffSteps } from "./algorithm";
import { CODE } from "./code";
import { ConsecDiffRenderer } from "./ConsecDiffRenderer";

interface ConsecDiffInput {
  n: number;
  k: number;
}

export const numsSameConsecDiffProblem: LeetCodeProblem<ConsecDiffInput, ConsecDiffData, Record<string, never>> = {
  id: "numbers-with-same-consecutive-differences",
  number: 967,
  title: "Numbers With Same Consecutive Differences",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/numbers-with-same-consecutive-differences/",
  summary: "Grow numbers a digit at a time, appending only digits that differ from the last by exactly k.",
  prompt: "Return all non-negative integers of length n such that every pair of adjacent digits differs by exactly k.",
  topics: ["BFS", "Backtracking"],
  tags: ["BFS", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(9 · 2^n)", timeWorst: "O(9 · 2^n)", space: "O(2^n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 3, k: 7 }),
  defaultOptions: {},
  buildSteps: (input) => consecDiffSteps(input.n, input.k),
  Renderer: ConsecDiffRenderer,
};
