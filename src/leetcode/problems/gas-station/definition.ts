import type { LeetCodeProblem } from "../../types";
import type { GasData, GasStationInput } from "./algorithm";
import { gasSteps } from "./algorithm";
import { CODE } from "./code";
import { GasRenderer } from "./GasRenderer";

export const gasStationProblem: LeetCodeProblem<
  GasStationInput,
  GasData,
  Record<string, never>
> = {
  id: "gas-station",
  number: 134,
  title: "Gas Station",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/gas-station/",
  summary: "Find the start station to complete the circuit (greedy).",
  prompt:
    "There are gas stations on a circular route; `gas[i]` is the fuel there and " +
    "`cost[i]` the fuel to reach the next station. Return the starting index to " +
    "travel the whole circuit once, or -1 if impossible.",
  topics: ["Array", "Greedy"],
  tags: ["Array", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] }),
  defaultOptions: {},
  buildSteps: (input) => gasSteps(input),
  Renderer: GasRenderer,
};
