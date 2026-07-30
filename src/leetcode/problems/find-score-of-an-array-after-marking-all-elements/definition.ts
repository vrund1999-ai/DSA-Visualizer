import type { LeetCodeProblem } from "../../types";
import type { ScoreMarkData } from "./algorithm";
import { scoreMarkSteps } from "./algorithm";
import { CODE } from "./code";
import { ScoreMarkRenderer } from "./ScoreMarkRenderer";

interface ScoreMarkInput {
  nums: number[];
}

export const findScoreProblem: LeetCodeProblem<ScoreMarkInput, ScoreMarkData, Record<string, never>> = {
  id: "find-score-of-an-array-after-marking-all-elements",
  number: 2593,
  title: "Find Score of an Array After Marking All Elements",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/",
  summary: "Process values smallest-first: add each still-unmarked value to the score and mark it with its two neighbours.",
  prompt:
    "Repeatedly choose the smallest unmarked element (smallest index on ties), add its value to the score, " +
    "then mark it and its adjacent elements. Return the score once everything is marked.",
  topics: ["Array", "Hash Table", "Sorting", "Heap (Priority Queue)", "Simulation"],
  tags: ["Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 1, 3, 4, 5, 2] }),
  defaultOptions: {},
  buildSteps: (input) => scoreMarkSteps(input.nums),
  Renderer: ScoreMarkRenderer,
};
