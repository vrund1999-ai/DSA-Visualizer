import type { LeetCodeProblem } from "../../types";
import type { HeightCheckerData } from "./algorithm";
import { heightCheckerSteps } from "./algorithm";
import { CODE } from "./code";
import { HeightCheckerRenderer } from "./HeightCheckerRenderer";

interface HeightCheckerInput {
  heights: number[];
}

export const heightCheckerProblem: LeetCodeProblem<HeightCheckerInput, HeightCheckerData, Record<string, never>> = {
  id: "height-checker",
  number: 1051,
  title: "Height Checker",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/height-checker/",
  summary: "Compare the line to its non-decreasing order and count how many students are out of place.",
  prompt:
    "Students should stand in non-decreasing height order. Return the number of indices where the current " +
    "height differs from the expected (sorted) height.",
  topics: ["Array", "Sorting", "Counting Sort"],
  tags: ["Sorting", "Counting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heights: [1, 1, 4, 2, 1, 3] }),
  defaultOptions: {},
  buildSteps: (input) => heightCheckerSteps(input.heights),
  Renderer: HeightCheckerRenderer,
};
