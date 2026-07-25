import type { LeetCodeProblem } from "../../types";
import type { CandyData } from "./algorithm";
import { candySteps } from "./algorithm";
import { CODE } from "./code";
import { CandyRenderer } from "./CandyRenderer";

export const candyCrushProblem: LeetCodeProblem<number[][], CandyData, Record<string, never>> = {
  id: "candy-crush",
  number: 723,
  title: "Candy Crush",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/candy-crush/",
  summary: "Mark runs of 3+, crush them all at once, drop candies by gravity, and repeat until stable.",
  prompt:
    "Given a grid of candies, repeatedly crush any horizontal or vertical run of three or more " +
    "equal candies, letting remaining candies fall, until no crush is possible. Return the final grid.",
  topics: ["Array", "Two Pointers", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((R·C)²)", timeWorst: "O((R·C)²)", space: "O(R·C)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [3, 3, 3, 1, 2],
    [1, 2, 4, 5, 5],
    [6, 1, 2, 3, 5],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
  ],
  defaultOptions: {},
  buildSteps: (input) => candySteps(input),
  Renderer: CandyRenderer,
};
