import type { LeetCodeProblem } from "../../types";
import type { ContainVirusData } from "./algorithm";
import { containVirusSteps } from "./algorithm";
import { CODE } from "./code";
import { ContainVirusRenderer } from "./ContainVirusRenderer";

interface ContainVirusInput {
  grid: number[][];
}

export const containVirusProblem: LeetCodeProblem<ContainVirusInput, ContainVirusData, Record<string, never>> = {
  id: "contain-virus",
  number: 749,
  title: "Contain Virus",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/contain-virus/",
  summary: "Each night wall off the region threatening the most uninfected cells, then let the others spread.",
  prompt:
    "A grid has infected (1) and uninfected (0) cells. Each night, the region threatening the most " +
    "uninfected cells is quarantined with walls (one per shared edge); every other region then infects its " +
    "neighbours. Return the total walls used once the spread is contained.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix", "Simulation"],
  tags: ["Simulation", "DFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((rc)²)", timeWorst: "O((rc)²)", space: "O(rc)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    grid: [
      [0, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => containVirusSteps(input.grid),
  Renderer: ContainVirusRenderer,
};
