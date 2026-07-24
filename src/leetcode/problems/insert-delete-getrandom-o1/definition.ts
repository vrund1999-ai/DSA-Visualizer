import type { LeetCodeProblem } from "../../types";
import type { RandomSetData, RandomSetOp } from "./algorithm";
import { randomSetSteps } from "./algorithm";
import { CODE } from "./code";
import { RandomSetRenderer } from "./RandomSetRenderer";

export const insertDeleteGetRandomProblem: LeetCodeProblem<
  RandomSetOp[],
  RandomSetData,
  Record<string, never>
> = {
  id: "insert-delete-getrandom-o1",
  number: 380,
  title: "Insert Delete GetRandom O(1)",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
  summary: "O(1) insert/remove/random via array + index map.",
  prompt:
    "Design a set supporting insert, remove, and getRandom each in average O(1) " +
    "time. The trick: a dense array plus a value→index map, with swap-and-pop " +
    "removal.",
  topics: ["Array", "Hash Table", "Math", "Design", "Randomized"],
  tags: ["Array", "Hash Table", "Math", "Design", "Randomized"],
  companies: ["Bloomberg"],
  frequency: 84.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { op: "insert", arg: 1 },
    { op: "insert", arg: 2 },
    { op: "insert", arg: 3 },
    { op: "remove", arg: 2 },
    { op: "insert", arg: 4 },
    { op: "getRandom" },
    { op: "remove", arg: 1 },
  ],
  defaultOptions: {},
  buildSteps: (input) => randomSetSteps(input),
  Renderer: RandomSetRenderer,
};
