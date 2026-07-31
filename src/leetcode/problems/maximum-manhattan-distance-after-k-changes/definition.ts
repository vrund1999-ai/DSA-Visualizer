import type { LeetCodeProblem } from "../../types";
import type { ManhattanData } from "./algorithm";
import { manhattanSteps } from "./algorithm";
import { CODE } from "./code";
import { ManhattanRenderer } from "./ManhattanRenderer";

interface ManhattanInput {
  s: string;
  k: number;
}

export const maxManhattanProblem: LeetCodeProblem<ManhattanInput, ManhattanData, Record<string, never>> = {
  id: "maximum-manhattan-distance-after-k-changes",
  number: 3443,
  title: "Maximum Manhattan Distance After K Changes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/",
  summary: "Per prefix, the reachable distance is min(length, net + 2k): each change flips a cancelling move outward, adding 2.",
  prompt:
    "You walk on a grid following moves N/S/E/W and may change at most k of them. Return the maximum " +
    "Manhattan distance from the origin reached at any point during the walk.",
  topics: ["Hash Table", "Math", "String", "Counting"],
  tags: ["Greedy", "Counting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "NWSE", k: 1 }),
  defaultOptions: {},
  buildSteps: (input) => manhattanSteps(input.s, input.k),
  Renderer: ManhattanRenderer,
};
