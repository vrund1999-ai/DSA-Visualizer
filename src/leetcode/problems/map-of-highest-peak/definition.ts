import type { LeetCodeProblem } from "../../types";
import type { HighestPeakData } from "./algorithm";
import { highestPeakSteps } from "./algorithm";
import { CODE } from "./code";
import { HighestPeakRenderer } from "./HighestPeakRenderer";

interface HighestPeakInput {
  isWater: number[][];
}

export const mapOfHighestPeakProblem: LeetCodeProblem<HighestPeakInput, HighestPeakData, Record<string, never>> = {
  id: "map-of-highest-peak",
  number: 1765,
  title: "Map of Highest Peak",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/map-of-highest-peak/",
  summary: "Multi-source BFS from every water cell (height 0) assigns each land cell its distance to the nearest water.",
  prompt:
    "Given a grid where 1 marks water and 0 land, assign each cell a height so water cells are 0, adjacent " +
    "heights differ by at most 1, and the maximum height is as large as possible.",
  topics: ["Array", "Breadth-First Search", "Matrix"],
  tags: ["BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ isWater: [[0, 0, 1], [1, 0, 0], [0, 0, 0]] }),
  defaultOptions: {},
  buildSteps: (input) => highestPeakSteps(input.isWater),
  Renderer: HighestPeakRenderer,
};
