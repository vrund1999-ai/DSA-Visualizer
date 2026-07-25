import type { LeetCodeProblem } from "../../types";
import type { FlowersData } from "./algorithm";
import { flowersSteps } from "./algorithm";
import { CODE } from "./code";
import { FlowersRenderer } from "./FlowersRenderer";

interface FlowersInput {
  flowerbed: number[];
  n: number;
}

export const canPlaceFlowersProblem: LeetCodeProblem<FlowersInput, FlowersData, Record<string, never>> = {
  id: "can-place-flowers",
  number: 605,
  title: "Can Place Flowers",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/can-place-flowers/",
  summary: "Greedily plant in empty plots with empty neighbours; compare count to n.",
  prompt:
    "A flowerbed (0 = empty, 1 = planted) forbids adjacent flowers. Return whether n new " +
    "flowers can be planted without violating that rule.",
  topics: ["Array", "Greedy"],
  tags: ["Array", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ flowerbed: [1, 0, 0, 0, 1, 0, 0], n: 2 }),
  defaultOptions: {},
  buildSteps: (input) => flowersSteps(input.flowerbed, input.n),
  Renderer: FlowersRenderer,
};
