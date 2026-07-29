import type { LeetCodeProblem } from "../../types";
import type { FourDivData } from "./algorithm";
import { fourDivSteps } from "./algorithm";
import { CODE } from "./code";
import { FourDivRenderer } from "./FourDivRenderer";

export const fourDivisorsProblem: LeetCodeProblem<number[], FourDivData, Record<string, never>> = {
  id: "four-divisors",
  number: 1390,
  title: "Four Divisors",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/four-divisors/",
  summary: "Enumerate divisors up to √n in pairs; sum them for numbers with exactly four divisors.",
  prompt:
    "Given an integer array nums, return the sum of divisors of the integers that have exactly four " +
    "divisors (0 if none qualify).",
  topics: ["Array", "Math"],
  tags: ["Array", "Math"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·√max)", timeWorst: "O(n·√max)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [21, 4, 7, 10],
  defaultOptions: {},
  buildSteps: (input) => fourDivSteps(input),
  Renderer: FourDivRenderer,
};
