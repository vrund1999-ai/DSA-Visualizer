import type { LeetCodeProblem } from "../../types";
import type { PacAtlData } from "./algorithm";
import { pacAtlSteps } from "./algorithm";
import { CODE } from "./code";
import { PacAtlRenderer } from "./PacAtlRenderer";

export const pacificAtlanticProblem: LeetCodeProblem<number[][], PacAtlData, Record<string, never>> = {
  id: "pacific-atlantic-water-flow",
  number: 417,
  title: "Pacific Atlantic Water Flow",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
  summary: "Flow backward from each ocean's border uphill; cells reached from both drain to both oceans.",
  prompt:
    "Water flows from a cell to neighbors of equal or lower height. Return all cells from which water " +
    "can reach both the Pacific (top/left edges) and Atlantic (bottom/right edges) oceans.",
  topics: ["Array", "DFS", "BFS", "Matrix"],
  tags: ["DFS", "BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ],
  defaultOptions: {},
  buildSteps: (input) => pacAtlSteps(input),
  Renderer: PacAtlRenderer,
};
