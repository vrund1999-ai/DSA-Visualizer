import type { LeetCodeProblem } from "../../types";
import type { PowerOfThreeData } from "./algorithm";
import { powerOfThreeSteps } from "./algorithm";
import { CODE } from "./code";
import { PowerOfThreeRenderer } from "./PowerOfThreeRenderer";

export const powerOfThreeProblem: LeetCodeProblem<number, PowerOfThreeData, Record<string, never>> = {
  id: "power-of-three",
  number: 326,
  title: "Power of Three",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/power-of-three/",
  summary: "Repeatedly divide by 3; a leftover of 1 means it was a power of three.",
  prompt: "Given an integer n, return true if it is a power of three (n = 3^x for some x ≥ 0).",
  topics: ["Math", "Recursion"],
  tags: ["Math", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 45,
  defaultOptions: {},
  buildSteps: (input) => powerOfThreeSteps(input),
  Renderer: PowerOfThreeRenderer,
};
