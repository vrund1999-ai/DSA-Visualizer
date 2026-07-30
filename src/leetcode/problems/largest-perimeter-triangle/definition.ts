import type { LeetCodeProblem } from "../../types";
import type { TriangleData } from "./algorithm";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";
import { TriangleRenderer } from "./TriangleRenderer";

interface TriangleInput {
  nums: number[];
}

export const largestPerimeterProblem: LeetCodeProblem<TriangleInput, TriangleData, Record<string, never>> = {
  id: "largest-perimeter-triangle",
  number: 976,
  title: "Largest Perimeter Triangle",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/largest-perimeter-triangle/",
  summary: "Sort descending; the first consecutive triple satisfying b + c > a gives the largest perimeter.",
  prompt:
    "Given side lengths, return the largest perimeter of a triangle with a non-zero area formed from three " +
    "of them, or 0 if none is possible.",
  topics: ["Array", "Math", "Greedy", "Sorting"],
  tags: ["Greedy", "Sorting", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [3, 6, 2, 3, 5, 4] }),
  defaultOptions: {},
  buildSteps: (input) => triangleSteps(input.nums),
  Renderer: TriangleRenderer,
};
