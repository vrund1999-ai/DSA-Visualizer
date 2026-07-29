import type { LeetCodeProblem } from "../../types";
import type { JudgeData } from "./algorithm";
import { judgeSteps } from "./algorithm";
import { CODE } from "./code";
import { JudgeRenderer } from "./JudgeRenderer";

interface JudgeInput {
  n: number;
  trust: number[][];
}

export const findTownJudgeProblem: LeetCodeProblem<JudgeInput, JudgeData, Record<string, never>> = {
  id: "find-the-town-judge",
  number: 997,
  title: "Find the Town Judge",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-town-judge/",
  summary: "The judge's net score (trusted-by minus trusts) equals n−1; tally ±1 per edge and scan.",
  prompt:
    "In a town of n people, the judge trusts nobody, everybody (except the judge) trusts the judge, and " +
    "there's exactly one such person. Given the trust pairs, return the judge's label, or -1.",
  topics: ["Array", "Hash Table", "Graph"],
  tags: ["Array", "Hash Table", "Graph"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + t)", timeWorst: "O(n + t)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 3, trust: [[1, 3], [2, 3]] }),
  defaultOptions: {},
  buildSteps: (input) => judgeSteps(input.n, input.trust),
  Renderer: JudgeRenderer,
};
