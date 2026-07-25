import type { LeetCodeProblem } from "../../types";
import type { MatchingData } from "./algorithm";
import { matchingSteps } from "./algorithm";
import { CODE } from "./code";
import { MatchingRenderer } from "./MatchingRenderer";

interface MatchingInput {
  n: number;
  m: number;
  k: number;
}

export const countArraysKMatchingProblem: LeetCodeProblem<MatchingInput, MatchingData, Record<string, never>> = {
  id: "count-the-number-of-arrays-with-k-matching-adjacent-elements",
  number: 3405,
  title: "Count the Number of Arrays with K Matching Adjacent Elements",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/",
  summary: "Multiply three factors: C(n−1, k) matching positions, m for the first value, (m−1)^(n−1−k) differing gaps.",
  prompt:
    "Count length-n arrays with values in [1, m] having exactly k indices i where arr[i] = arr[i+1], " +
    "modulo 1e9+7.",
  topics: ["Math", "Combinatorics"],
  tags: ["Math", "Combinatorics"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + log(exp))", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 5, m: 2, k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => matchingSteps(input.n, input.m, input.k),
  Renderer: MatchingRenderer,
};
