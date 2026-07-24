import type { LeetCodeProblem } from "../../types";
import type { FruitData } from "./algorithm";
import { fruitSteps } from "./algorithm";
import { CODE } from "./code";
import { FruitRenderer } from "./FruitRenderer";

export const fruitIntoBasketsProblem: LeetCodeProblem<number[], FruitData, Record<string, never>> = {
  id: "fruit-into-baskets",
  number: 904,
  title: "Fruit Into Baskets",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/fruit-into-baskets/",
  summary: "Longest subarray with at most two distinct values (sliding window).",
  prompt:
    "You have two baskets, each holding a single type of fruit. Starting from any tree " +
    "and moving right, pick one fruit per tree until you can't. Return the maximum number " +
    "of fruits (longest subarray with at most two distinct types).",
  topics: ["Array", "Hash Table", "Sliding Window"],
  tags: ["Array", "Hash Table", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 44.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 2, 2, 1, 1, 3, 3],
  defaultOptions: {},
  buildSteps: (input) => fruitSteps(input),
  Renderer: FruitRenderer,
};
