import type { LeetCodeProblem } from "../../types";
import type { ChairData } from "./algorithm";
import { chairSteps } from "./algorithm";
import { CODE } from "./code";
import { ChairRenderer } from "./ChairRenderer";

interface ChairInput {
  times: number[][];
  targetFriend: number;
}

export const smallestUnoccupiedChairProblem: LeetCodeProblem<ChairInput, ChairData, Record<string, never>> = {
  id: "the-number-of-the-smallest-unoccupied-chair",
  number: 1942,
  title: "The Number of the Smallest Unoccupied Chair",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/",
  summary: "Process friends by arrival, freeing chairs whose occupants have left, then seat each in the smallest free chair.",
  prompt:
    "Friends arrive at and leave a party at given times; each takes the smallest-numbered unoccupied " +
    "chair on arrival. Return the chair number that the target friend sits in.",
  topics: ["Array", "Heap", "Simulation", "Ordered Set"],
  tags: ["Heap", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ times: [[3, 10], [1, 5], [2, 6]], targetFriend: 0 }),
  defaultOptions: {},
  buildSteps: (input) => chairSteps(input.times, input.targetFriend),
  Renderer: ChairRenderer,
};
