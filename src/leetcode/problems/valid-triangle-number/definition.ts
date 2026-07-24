import type { LeetCodeProblem } from "../../types";
import type { TriangleData } from "./algorithm";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";
import { TriangleRenderer } from "./TriangleRenderer";

export const validTriangleNumberProblem: LeetCodeProblem<
  number[],
  TriangleData,
  Record<string, never>
> = {
  id: "valid-triangle-number",
  number: 611,
  title: "Valid Triangle Number",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/valid-triangle-number/",
  summary: "Count triangle-forming triples (sort + two pointers).",
  prompt:
    "Given an array `nums`, count the triplets that can form the sides of a " +
    "triangle (each pair of sides must sum to more than the third).",
  topics: ["Array", "Two Pointers", "Binary Search", "Greedy", "Sorting"],
  tags: ["Array", "Two Pointers", "Binary Search", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 2, 3, 4],
  defaultOptions: {},
  buildSteps: (input) => triangleSteps(input),
  Renderer: TriangleRenderer,
};
