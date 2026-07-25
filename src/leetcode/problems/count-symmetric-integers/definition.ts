import type { LeetCodeProblem } from "../../types";
import type { SymmetricData } from "./algorithm";
import { symmetricSteps } from "./algorithm";
import { CODE } from "./code";
import { SymmetricRenderer } from "./SymmetricRenderer";

interface SymmetricInput {
  low: number;
  high: number;
}

export const countSymmetricIntegersProblem: LeetCodeProblem<SymmetricInput, SymmetricData, Record<string, never>> = {
  id: "count-symmetric-integers",
  number: 2843,
  title: "Count Symmetric Integers",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-symmetric-integers/",
  summary: "Scan the range; an even-length number is symmetric when its two digit-halves sum equally.",
  prompt:
    "An integer with 2·n digits is symmetric if the sum of its first n digits equals the sum of its " +
    "last n. Return how many integers in [low, high] are symmetric.",
  topics: ["Math", "Enumeration"],
  tags: ["Math", "Enumeration"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((high−low)·d)", timeWorst: "O((high−low)·d)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ low: 1200, high: 1230 }),
  defaultOptions: {},
  buildSteps: (input) => symmetricSteps(input.low, input.high),
  Renderer: SymmetricRenderer,
};
