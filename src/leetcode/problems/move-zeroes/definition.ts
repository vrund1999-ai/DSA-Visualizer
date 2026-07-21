import type { LeetCodeProblem } from "../../types";
import type { MoveZeroesData } from "./algorithm";
import { moveZeroesSteps } from "./algorithm";
import { CODE } from "./code";
import { MoveZeroesRenderer } from "./MoveZeroesRenderer";

export const moveZeroesProblem: LeetCodeProblem<
  number[],
  MoveZeroesData,
  Record<string, never>
> = {
  id: "move-zeroes",
  number: 283,
  title: "Move Zeroes",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/move-zeroes/",
  summary: "Push all zeros to the end, keeping order of the rest.",
  prompt:
    "Given an integer array `nums`, move all 0's to the end while keeping the " +
    "relative order of the non-zero elements. Do it in-place without making a copy.",
  topics: ["Array", "Two Pointers"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 67.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 1, 0, 3, 12],
  defaultOptions: {},
  buildSteps: (input) => moveZeroesSteps(input),
  Renderer: MoveZeroesRenderer,
};
