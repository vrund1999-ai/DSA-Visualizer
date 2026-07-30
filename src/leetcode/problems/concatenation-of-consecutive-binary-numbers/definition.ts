import type { LeetCodeProblem } from "../../types";
import type { ConcatBinaryData } from "./algorithm";
import { concatBinarySteps } from "./algorithm";
import { CODE } from "./code";
import { ConcatBinaryRenderer } from "./ConcatBinaryRenderer";

interface ConcatBinaryInput {
  n: number;
}

export const concatenationBinaryProblem: LeetCodeProblem<ConcatBinaryInput, ConcatBinaryData, Record<string, never>> = {
  id: "concatenation-of-consecutive-binary-numbers",
  number: 1680,
  title: "Concatenation of Consecutive Binary Numbers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/",
  summary: "Fold each number in by shifting the running value left by its bit-length (×2^len) and adding it, all mod 1e9+7.",
  prompt:
    "Concatenate the binary representations of the integers 1 to n and return the resulting number modulo " +
    "1e9+7.",
  topics: ["Math", "Bit Manipulation", "Simulation"],
  tags: ["Bit Manipulation", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 5 }),
  defaultOptions: {},
  buildSteps: (input) => concatBinarySteps(input.n),
  Renderer: ConcatBinaryRenderer,
};
