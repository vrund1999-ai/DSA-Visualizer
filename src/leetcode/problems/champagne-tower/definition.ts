import type { LeetCodeProblem } from "../../types";
import type { ChampagneData } from "./algorithm";
import { champagneSteps } from "./algorithm";
import { CODE } from "./code";
import { ChampagneRenderer } from "./ChampagneRenderer";

interface ChampagneInput {
  poured: number;
  queryRow: number;
  queryGlass: number;
}

export const champagneTowerProblem: LeetCodeProblem<ChampagneInput, ChampagneData, Record<string, never>> = {
  id: "champagne-tower",
  number: 799,
  title: "Champagne Tower",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/champagne-tower/",
  summary: "Simulate row by row: a glass over capacity spills half its excess to each glass below.",
  prompt:
    "Champagne is poured into the top glass of a pyramid. Each glass holds one cup; overflow splits " +
    "equally left and right into the row below. Return how full glass (queryRow, queryGlass) is.",
  topics: ["Dynamic Programming", "Simulation"],
  tags: ["Dynamic Programming", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(R²)", timeWorst: "O(R²)", space: "O(R²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ poured: 6, queryRow: 3, queryGlass: 1 }),
  defaultOptions: {},
  buildSteps: (input) => champagneSteps(input.poured, input.queryRow, input.queryGlass),
  Renderer: ChampagneRenderer,
};
