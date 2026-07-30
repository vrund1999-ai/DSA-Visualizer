import type { LeetCodeProblem } from "../../types";
import type { SumZeroData } from "./algorithm";
import { sumZeroSteps } from "./algorithm";
import { CODE } from "./code";
import { SumZeroRenderer } from "./SumZeroRenderer";

interface SumZeroInput {
  n: number;
}

export const sumZeroProblem: LeetCodeProblem<SumZeroInput, SumZeroData, Record<string, never>> = {
  id: "find-n-unique-integers-sum-up-to-zero",
  number: 1304,
  title: "Find N Unique Integers Sum up to Zero",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/",
  summary: "Emit balanced pairs i and −i (each nets 0), padding with a lone 0 when n is odd.",
  prompt: "Return any array of n unique integers that sum to 0.",
  topics: ["Array", "Math"],
  tags: ["Array", "Math"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 5 }),
  defaultOptions: {},
  buildSteps: (input) => sumZeroSteps(input.n),
  Renderer: SumZeroRenderer,
};
