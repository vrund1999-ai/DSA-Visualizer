import type { LeetCodeProblem } from "../../types";
import type { TriangleData } from "./algorithm";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";
import { TriangleRenderer } from "./TriangleRenderer";

export const typeOfTriangleProblem: LeetCodeProblem<number[], TriangleData, Record<string, never>> = {
  id: "type-of-triangle",
  number: 3024,
  title: "Type of Triangle",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/type-of-triangle/",
  summary: "Sort the sides; check a+b > c, then classify by how many sides are equal.",
  prompt:
    "Given the three side lengths of a triangle, return its type: 'equilateral', 'isosceles', " +
    "'scalene', or 'none' if the sides can't form a triangle.",
  topics: ["Array", "Math", "Sorting"],
  tags: ["Array", "Math", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 3, 3],
  defaultOptions: {},
  buildSteps: (input) => triangleSteps(input),
  Renderer: TriangleRenderer,
};
