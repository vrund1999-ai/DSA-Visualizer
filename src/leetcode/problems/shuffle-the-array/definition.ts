import type { LeetCodeProblem } from "../../types";
import type { ShuffleData } from "./algorithm";
import { shuffleSteps } from "./algorithm";
import { CODE } from "./code";
import { ShuffleRenderer } from "./ShuffleRenderer";

interface ShuffleInput {
  nums: number[];
  n: number;
}

export const shuffleArrayProblem: LeetCodeProblem<ShuffleInput, ShuffleData, Record<string, never>> = {
  id: "shuffle-the-array",
  number: 1470,
  title: "Shuffle the Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/shuffle-the-array/",
  summary: "Interleave the two halves: x1, y1, x2, y2, …",
  prompt:
    "Given an array nums of 2n elements in the form [x1..xn, y1..yn], return the array " +
    "[x1, y1, x2, y2, …, xn, yn].",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 5, 1, 3, 4, 7], n: 3 }),
  defaultOptions: {},
  buildSteps: (input) => shuffleSteps(input.nums, input.n),
  Renderer: ShuffleRenderer,
};
