import type { LeetCodeProblem } from "../../types";
import type { FurthestData } from "./algorithm";
import { furthestSteps } from "./algorithm";
import { CODE } from "./code";
import { FurthestRenderer } from "./FurthestRenderer";

interface FurthestInput {
  heights: number[];
  bricks: number;
  ladders: number;
}

export const furthestBuildingProblem: LeetCodeProblem<FurthestInput, FurthestData, Record<string, never>> = {
  id: "furthest-building-you-can-reach",
  number: 1642,
  title: "Furthest Building You Can Reach",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/furthest-building-you-can-reach/",
  summary: "A min-heap keeps ladders on the largest climbs, demoting the smallest to bricks as new climbs appear.",
  prompt:
    "Moving along a row of buildings, each upward climb costs bricks equal to the height difference or one " +
    "ladder. With limited bricks and ladders, return the furthest building index reachable.",
  topics: ["Array", "Greedy", "Heap"],
  tags: ["Greedy", "Heap"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log L)", timeWorst: "O(n log L)", space: "O(L)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heights: [4, 2, 7, 6, 9, 14, 12], bricks: 5, ladders: 1 }),
  defaultOptions: {},
  buildSteps: (input) => furthestSteps(input.heights, input.bricks, input.ladders),
  Renderer: FurthestRenderer,
};
