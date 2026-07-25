import type { LeetCodeProblem } from "../../types";
import type { BombData } from "./algorithm";
import { bombSteps } from "./algorithm";
import { CODE } from "./code";
import { BombRenderer } from "./BombRenderer";

interface BombInput {
  code: number[];
  k: number;
}

export const defuseTheBombProblem: LeetCodeProblem<BombInput, BombData, Record<string, never>> = {
  id: "defuse-the-bomb",
  number: 1652,
  title: "Defuse the Bomb",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/defuse-the-bomb/",
  summary: "Replace each value with the circular sum of its k following (or preceding) neighbors.",
  prompt:
    "Given a circular array code and an integer k, replace each element with the sum of the next " +
    "k numbers (if k > 0), the previous |k| numbers (if k < 0), or 0 (if k = 0).",
  topics: ["Array", "Sliding Window"],
  tags: ["Array", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n · k)", timeWorst: "O(n · k)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ code: [5, 7, 1, 4], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => bombSteps(input.code, input.k),
  Renderer: BombRenderer,
};
