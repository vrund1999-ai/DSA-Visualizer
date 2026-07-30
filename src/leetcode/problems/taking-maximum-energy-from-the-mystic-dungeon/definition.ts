import type { LeetCodeProblem } from "../../types";
import type { EnergyData } from "./algorithm";
import { energySteps } from "./algorithm";
import { CODE } from "./code";
import { EnergyRenderer } from "./EnergyRenderer";

interface EnergyInput {
  energy: number[];
  k: number;
}

export const mysticDungeonEnergyProblem: LeetCodeProblem<EnergyInput, EnergyData, Record<string, never>> = {
  id: "taking-maximum-energy-from-the-mystic-dungeon",
  number: 3147,
  title: "Taking Maximum Energy From the Mystic Dungeon",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/",
  summary: "dp[i] = energy[i] + dp[i+k] chains each teleport path; the best starting index gives the max energy.",
  prompt:
    "Starting at any magician, you absorb their energy and teleport k positions forward, repeating until " +
    "out of bounds. Return the maximum total energy over all starting points.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Suffix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ energy: [5, 2, -10, -5, 1], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => energySteps(input.energy, input.k),
  Renderer: EnergyRenderer,
};
