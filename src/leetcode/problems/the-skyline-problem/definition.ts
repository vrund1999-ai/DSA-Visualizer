import type { LeetCodeProblem } from "../../types";
import type { SkylineData } from "./algorithm";
import { skylineSteps } from "./algorithm";
import { CODE } from "./code";
import { SkylineRenderer } from "./SkylineRenderer";

export const theSkylineProblem: LeetCodeProblem<number[][], SkylineData, Record<string, never>> = {
  id: "the-skyline-problem",
  number: 218,
  title: "The Skyline Problem",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/the-skyline-problem/",
  summary: "Sweep building edges left to right; a key point appears wherever the tallest active building changes.",
  prompt:
    "Given the positions and heights of rectangular buildings, output the skyline as a list of key points " +
    "[x, height] marking the left endpoints of each horizontal segment.",
  topics: ["Array", "Divide and Conquer", "Heap", "Sweep Line"],
  tags: ["Heap", "Sweep Line"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ],
  defaultOptions: {},
  buildSteps: (input) => skylineSteps(input),
  Renderer: SkylineRenderer,
};
