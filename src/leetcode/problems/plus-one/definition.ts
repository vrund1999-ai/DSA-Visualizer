import type { LeetCodeProblem } from "../../types";
import type { PlusOneData } from "./algorithm";
import { plusOneSteps } from "./algorithm";
import { CODE } from "./code";
import { PlusOneRenderer } from "./PlusOneRenderer";

export const plusOneProblem: LeetCodeProblem<
  number[],
  PlusOneData,
  Record<string, never>
> = {
  id: "plus-one",
  number: 66,
  title: "Plus One",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/plus-one/",
  summary: "Increment a big number stored as a digit array.",
  prompt:
    "Given a large integer represented as an array of digits (most significant " +
    "first), increment it by one and return the resulting digit array.",
  topics: ["Array", "Math"],
  tags: ["Array", "Math"],
  companies: ["Bloomberg"],
  frequency: 59.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 9],
  defaultOptions: {},
  buildSteps: (input) => plusOneSteps(input),
  Renderer: PlusOneRenderer,
};
