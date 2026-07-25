import type { LeetCodeProblem } from "../../types";
import type { CombinationsData } from "./algorithm";
import { combinationsSteps } from "./algorithm";
import { CODE } from "./code";
import { CombinationsRenderer } from "./CombinationsRenderer";

interface CombinationsInput {
  n: number;
  k: number;
}

export const combinationsProblem: LeetCodeProblem<CombinationsInput, CombinationsData, Record<string, never>> = {
  id: "combinations",
  number: 77,
  title: "Combinations",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/combinations/",
  summary: "Backtracking builds increasing k-subsets so each combination is unique.",
  prompt:
    "Return all possible combinations of k numbers chosen from the range [1, n].",
  topics: ["Backtracking"],
  tags: ["Backtracking"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k·C(n,k))", timeWorst: "O(k·C(n,k))", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 4, k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => combinationsSteps(input.n, input.k),
  Renderer: CombinationsRenderer,
};
