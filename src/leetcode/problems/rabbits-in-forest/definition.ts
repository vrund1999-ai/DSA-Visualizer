import type { LeetCodeProblem } from "../../types";
import type { RabbitsData } from "./algorithm";
import { rabbitsSteps } from "./algorithm";
import { CODE } from "./code";
import { RabbitsRenderer } from "./RabbitsRenderer";

export const rabbitsInForestProblem: LeetCodeProblem<number[], RabbitsData, Record<string, never>> = {
  id: "rabbits-in-forest",
  number: 781,
  title: "Rabbits in Forest",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rabbits-in-forest/",
  summary: "Group by answer a: each color herd holds a+1, so ceil(count/(a+1)) herds are needed.",
  prompt:
    "Some rabbits each report how many other rabbits share their color. Given those answers, return " +
    "the minimum number of rabbits that could be in the forest.",
  topics: ["Array", "Hash Table", "Math", "Greedy"],
  tags: ["Hash Table", "Math", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 2],
  defaultOptions: {},
  buildSteps: (input) => rabbitsSteps(input),
  Renderer: RabbitsRenderer,
};
