import type { LeetCodeProblem } from "../../types";
import type { Op, RandomCollData } from "./algorithm";
import { randomCollSteps } from "./algorithm";
import { CODE } from "./code";
import { RandomCollRenderer } from "./RandomCollRenderer";

export const insertDeleteGetRandomDupProblem: LeetCodeProblem<Op[], RandomCollData, Record<string, never>> = {
  id: "insert-delete-getrandom-o1-duplicates-allowed",
  number: 381,
  title: "Insert Delete GetRandom O(1) - Duplicates allowed",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
  summary: "Growable array plus value→index-set map; removal swaps the victim with the last element.",
  prompt:
    "Design a collection supporting insert, remove, and getRandom in average O(1), allowing " +
    "duplicate values (getRandom must reflect their multiplicity).",
  topics: ["Array", "Hash Table", "Math", "Design", "Randomized"],
  tags: ["Array", "Hash Table", "Design"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1) amortized", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["insert", 1],
    ["insert", 1],
    ["insert", 2],
    ["remove", 1],
    ["getRandom"],
    ["remove", 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => randomCollSteps(input),
  Renderer: RandomCollRenderer,
};
