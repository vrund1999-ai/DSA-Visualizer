import type { LeetCodeProblem } from "../../types";
import type { FoodPathData } from "./algorithm";
import { foodPathSteps } from "./algorithm";
import { CODE } from "./code";
import { FoodPathRenderer } from "./FoodPathRenderer";

export const shortestPathToFoodProblem: LeetCodeProblem<string[][], FoodPathData, Record<string, never>> = {
  id: "shortest-path-to-get-food",
  number: 1730,
  title: "Shortest Path to Get Food",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/shortest-path-to-get-food/",
  summary: "4-directional BFS from '*' to the nearest food cell '#'.",
  prompt:
    "You start at '*' in a grid of open cells 'O', walls 'X', and food '#'. Return the " +
    "length of the shortest path to any food cell, or -1 if none is reachable.",
  topics: ["Array", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Breadth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["X", "X", "X", "X", "X", "X"],
    ["X", "*", "O", "O", "O", "X"],
    ["X", "O", "O", "#", "O", "X"],
    ["X", "X", "X", "X", "X", "X"],
  ],
  defaultOptions: {},
  buildSteps: (input) => foodPathSteps(input),
  Renderer: FoodPathRenderer,
};
