import type { LeetCodeProblem } from "../../types";
import type { FloodData } from "./algorithm";
import { floodSteps } from "./algorithm";
import { CODE } from "./code";
import { FloodRenderer } from "./FloodRenderer";

interface FloodInput {
  rains: number[];
}

export const avoidFloodProblem: LeetCodeProblem<FloodInput, FloodData, Record<string, never>> = {
  id: "avoid-flood-in-the-city",
  number: 1488,
  title: "Avoid Flood in the City",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/avoid-flood-in-the-city/",
  summary: "Greedily spend the earliest available dry day that follows a full lake's fill day to prevent it overflowing.",
  prompt:
    "rains[i] > 0 fills that lake; rains[i] == 0 is a dry day that can empty one chosen lake. Return a plan " +
    "(lake dried per dry day, -1 on rain days) that avoids any lake flooding, or [] if impossible.",
  topics: ["Array", "Hash Table", "Binary Search", "Greedy", "Heap (Priority Queue)"],
  tags: ["Greedy", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ rains: [1, 2, 0, 0, 2, 1] }),
  defaultOptions: {},
  buildSteps: (input) => floodSteps(input.rains),
  Renderer: FloodRenderer,
};
