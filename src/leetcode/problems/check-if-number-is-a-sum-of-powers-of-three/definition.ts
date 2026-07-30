import type { LeetCodeProblem } from "../../types";
import type { PowersThreeData } from "./algorithm";
import { powersThreeSteps } from "./algorithm";
import { CODE } from "./code";
import { PowersThreeRenderer } from "./PowersThreeRenderer";

export const checkPowersOfThreeProblem: LeetCodeProblem<number, PowersThreeData, Record<string, never>> = {
  id: "check-if-number-is-a-sum-of-powers-of-three",
  number: 1780,
  title: "Check if Number is a Sum of Powers of Three",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/",
  summary: "It works iff the base-3 representation contains only 0s and 1s — a digit 2 would reuse a power.",
  prompt: "Return true if n can be written as the sum of distinct powers of 3 (3^0, 3^1, 3^2, …).",
  topics: ["Math"],
  tags: ["Math", "Base Conversion"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 91,
  defaultOptions: {},
  buildSteps: (input) => powersThreeSteps(input),
  Renderer: PowersThreeRenderer,
};
