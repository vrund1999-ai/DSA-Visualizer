import type { LeetCodeProblem } from "../../types";
import type { BottlesData } from "./algorithm";
import { bottlesSteps } from "./algorithm";
import { CODE } from "./code";
import { BottlesRenderer } from "./BottlesRenderer";

interface BottlesInput {
  numBottles: number;
  numExchange: number;
}

export const waterBottlesProblem: LeetCodeProblem<BottlesInput, BottlesData, Record<string, never>> = {
  id: "water-bottles",
  number: 1518,
  title: "Water Bottles",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/water-bottles/",
  summary: "Drink all bottles, then repeatedly trade empties for new full ones until too few remain to exchange.",
  prompt:
    "You have numBottles full water bottles and can exchange numExchange empties for one full bottle. " +
    "Return the maximum number of bottles you can drink.",
  topics: ["Math", "Simulation"],
  tags: ["Math", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ numBottles: 15, numExchange: 4 }),
  defaultOptions: {},
  buildSteps: (input) => bottlesSteps(input.numBottles, input.numExchange),
  Renderer: BottlesRenderer,
};
