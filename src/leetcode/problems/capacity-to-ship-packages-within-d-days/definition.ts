import type { LeetCodeProblem } from "../../types";
import type { ShipData } from "./algorithm";
import { shipSteps } from "./algorithm";
import { CODE } from "./code";
import { ShipRenderer } from "./ShipRenderer";

interface ShipInput {
  weights: number[];
  days: number;
}

export const shipPackagesProblem: LeetCodeProblem<ShipInput, ShipData, Record<string, never>> = {
  id: "capacity-to-ship-packages-within-d-days",
  number: 1011,
  title: "Capacity To Ship Packages Within D Days",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
  summary: "Binary search the minimum ship capacity; greedily check feasibility.",
  prompt:
    "Packages must ship in the given order within `days` days. Each day loads packages " +
    "onto the ship without exceeding its weight capacity. Return the least capacity that " +
    "ships everything within the deadline.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 48.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log Σw)", timeWorst: "O(n log Σw)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ weights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days: 5 }),
  defaultOptions: {},
  buildSteps: (input) => shipSteps(input.weights, input.days),
  Renderer: ShipRenderer,
};
