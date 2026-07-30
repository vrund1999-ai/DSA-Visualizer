import type { LeetCodeProblem } from "../../types";
import type { CountPathsData } from "./algorithm";
import { countPathsSteps } from "./algorithm";
import { CODE } from "./code";
import { CountPathsRenderer } from "./CountPathsRenderer";

interface CountPathsInput {
  n: number;
  roads: number[][];
}

export const countPathsProblem: LeetCodeProblem<CountPathsInput, CountPathsData, Record<string, never>> = {
  id: "number-of-ways-to-arrive-at-destination",
  number: 1976,
  title: "Number of Ways to Arrive at Destination",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
  summary: "Dijkstra with a parallel path counter: a shorter path resets the count, a tie adds the predecessor's.",
  prompt:
    "Given n intersections and bidirectional roads with travel times, count the number of shortest-time " +
    "ways to travel from intersection 0 to n−1, modulo 1e9+7.",
  topics: ["Graph", "Dynamic Programming", "Shortest Path", "Heap"],
  tags: ["Graph", "Dijkstra", "Shortest Path"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(E log V)", timeWorst: "O(E log V)", space: "O(V + E)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    n: 7,
    roads: [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]],
  }),
  defaultOptions: {},
  buildSteps: (input) => countPathsSteps(input.n, input.roads),
  Renderer: CountPathsRenderer,
};
