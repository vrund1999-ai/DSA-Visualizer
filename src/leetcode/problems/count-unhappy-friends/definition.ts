import type { LeetCodeProblem } from "../../types";
import type { UnhappyData } from "./algorithm";
import { unhappySteps } from "./algorithm";
import { CODE } from "./code";
import { UnhappyRenderer } from "./UnhappyRenderer";

interface UnhappyInput {
  n: number;
  preferences: number[][];
  pairs: number[][];
}

export const countUnhappyFriendsProblem: LeetCodeProblem<UnhappyInput, UnhappyData, Record<string, never>> = {
  id: "count-unhappy-friends",
  number: 1583,
  title: "Count Unhappy Friends",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-unhappy-friends/",
  summary: "Precompute preference ranks, then flag friends who mutually prefer someone over their partner.",
  prompt:
    "Given n friends, each one's ordered preference list, and a set of pairings, count the " +
    "friends who prefer another friend u over their own partner while u also prefers them over u's partner.",
  topics: ["Array", "Simulation"],
  tags: ["Array", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 52.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    n: 4,
    preferences: [
      [1, 2, 3],
      [3, 2, 0],
      [3, 1, 0],
      [1, 2, 0],
    ],
    pairs: [
      [0, 1],
      [2, 3],
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => unhappySteps(input.n, input.preferences, input.pairs),
  Renderer: UnhappyRenderer,
};
