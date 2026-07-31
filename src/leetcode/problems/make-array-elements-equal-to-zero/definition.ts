import type { LeetCodeProblem } from "../../types";
import type { MakeZeroData } from "./algorithm";
import { makeZeroSteps } from "./algorithm";
import { CODE } from "./code";
import { MakeZeroRenderer } from "./MakeZeroRenderer";

interface MakeZeroInput {
  nums: number[];
}

export const makeArrayZeroProblem: LeetCodeProblem<MakeZeroInput, MakeZeroData, Record<string, never>> = {
  id: "make-array-elements-equal-to-zero",
  number: 3354,
  title: "Make Array Elements Equal to Zero",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/make-array-elements-equal-to-zero/",
  summary: "Simulate the bouncing walk from each zero start and direction; count the selections that leave the array all zero.",
  prompt:
    "Start on an index holding 0 and choose a direction. Moving over a 0 continues; hitting a nonzero " +
    "decrements it and reverses direction. Count the (start, direction) selections that make every element 0.",
  topics: ["Array", "Simulation", "Prefix Sum"],
  tags: ["Simulation", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 0, 2, 0, 3] }),
  defaultOptions: {},
  buildSteps: (input) => makeZeroSteps(input.nums),
  Renderer: MakeZeroRenderer,
};
