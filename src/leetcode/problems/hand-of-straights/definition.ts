import type { LeetCodeProblem } from "../../types";
import type { StraightsData } from "./algorithm";
import { straightsSteps } from "./algorithm";
import { CODE } from "./code";
import { StraightsRenderer } from "./StraightsRenderer";

interface StraightsInput {
  hand: number[];
  groupSize: number;
}

export const handOfStraightsProblem: LeetCodeProblem<StraightsInput, StraightsData, Record<string, never>> = {
  id: "hand-of-straights",
  number: 846,
  title: "Hand of Straights",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/hand-of-straights/",
  summary: "Process cards smallest-first; the lowest remaining card must start its groups of consecutive cards.",
  prompt:
    "Given a hand of cards and a groupSize, return whether the cards can be rearranged into groups of " +
    "groupSize consecutive cards.",
  topics: ["Array", "Hash Table", "Greedy", "Sorting"],
  tags: ["Array", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ hand: [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize: 3 }),
  defaultOptions: {},
  buildSteps: (input) => straightsSteps(input.hand, input.groupSize),
  Renderer: StraightsRenderer,
};
