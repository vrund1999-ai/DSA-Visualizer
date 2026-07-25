import type { LeetCodeProblem } from "../../types";
import type { HeatersData } from "./algorithm";
import { heatersSteps } from "./algorithm";
import { CODE } from "./code";
import { HeatersRenderer } from "./HeatersRenderer";

interface HeatersInput {
  houses: number[];
  heaters: number[];
}

export const heatersProblem: LeetCodeProblem<HeatersInput, HeatersData, Record<string, never>> = {
  id: "heaters",
  number: 475,
  title: "Heaters",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/heaters/",
  summary: "Sort both; the answer is the max over houses of the nearest-heater distance.",
  prompt:
    "Given house and heater positions on a line, find the minimum heating radius so that " +
    "every house is within range of at least one heater.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((n+m) log)", timeWorst: "O((n+m) log)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ houses: [1, 2, 3, 4], heaters: [1, 4] }),
  defaultOptions: {},
  buildSteps: (input) => heatersSteps(input.houses, input.heaters),
  Renderer: HeatersRenderer,
};
