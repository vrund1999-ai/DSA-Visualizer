import type { LeetCodeProblem } from "../../types";
import type { MaxIslandData } from "./algorithm";
import { maxIslandSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxIslandRenderer } from "./MaxIslandRenderer";

export const maxAreaOfIslandProblem: LeetCodeProblem<number[][], MaxIslandData, Record<string, never>> = {
  id: "max-area-of-island",
  number: 695,
  title: "Max Area of Island",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/max-area-of-island/",
  summary: "DFS flood-fill each island, sinking cells; track the largest area.",
  prompt:
    "Given a binary grid, return the area of the largest island (a group of 4-directionally " +
    "connected 1s), or 0 if there is none.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"],
  tags: ["Array", "Depth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 1, 0, 1, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => maxIslandSteps(input),
  Renderer: MaxIslandRenderer,
};
