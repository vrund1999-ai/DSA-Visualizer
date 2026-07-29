import type { LeetCodeProblem } from "../../types";
import type { RefuelData } from "./algorithm";
import { refuelSteps } from "./algorithm";
import { CODE } from "./code";
import { RefuelRenderer } from "./RefuelRenderer";

interface RefuelInput {
  target: number;
  startFuel: number;
  stations: number[][];
}

export const minRefuelStopsProblem: LeetCodeProblem<RefuelInput, RefuelData, Record<string, never>> = {
  id: "minimum-number-of-refueling-stops",
  number: 871,
  title: "Minimum Number of Refueling Stops",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
  summary: "Bank the fuel of every station passed; when stranded, refuel from the largest banked station.",
  prompt:
    "A car starts with startFuel and burns 1 unit per mile toward a target. Given fuel stations at " +
    "[position, fuel], return the fewest stops needed to reach the target, or -1 if impossible.",
  topics: ["Array", "Dynamic Programming", "Greedy", "Heap"],
  tags: ["Greedy", "Heap", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ target: 100, startFuel: 10, stations: [[10, 60], [20, 30], [30, 30], [60, 40]] }),
  defaultOptions: {},
  buildSteps: (input) => refuelSteps(input.target, input.startFuel, input.stations),
  Renderer: RefuelRenderer,
};
