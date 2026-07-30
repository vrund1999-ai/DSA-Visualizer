import type { LeetCodeProblem } from "../../types";
import type { BrickData } from "./algorithm";
import { brickSteps } from "./algorithm";
import { CODE } from "./code";
import { BrickRenderer } from "./BrickRenderer";

export const brickWallProblem: LeetCodeProblem<number[][], BrickData, Record<string, never>> = {
  id: "brick-wall",
  number: 554,
  title: "Brick Wall",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/brick-wall/",
  summary: "Count shared internal gap positions; the best line sits on the most common gap, crossing the fewest bricks.",
  prompt:
    "A wall has rows of bricks of various widths (each row totals the same width). Draw a vertical line " +
    "from top to bottom crossing the fewest bricks (an edge between bricks is not a crossing). Return that count.",
  topics: ["Hash Table", "Array"],
  tags: ["Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(total bricks)", timeWorst: "O(total bricks)", space: "O(width)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => brickSteps(input),
  Renderer: BrickRenderer,
};
