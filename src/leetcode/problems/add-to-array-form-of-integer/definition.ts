import type { LeetCodeProblem } from "../../types";
import type { AddArrayData } from "./algorithm";
import { addArraySteps } from "./algorithm";
import { CODE } from "./code";
import { AddArrayRenderer } from "./AddArrayRenderer";

interface AddArrayInput {
  num: number[];
  k: number;
}

export const addToArrayFormProblem: LeetCodeProblem<AddArrayInput, AddArrayData, Record<string, never>> = {
  id: "add-to-array-form-of-integer",
  number: 989,
  title: "Add to Array-Form of Integer",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/add-to-array-form-of-integer/",
  summary: "Seed the carry with k, then fold in num's digits least-significant first.",
  prompt:
    "The array-form of an integer num is its digits in order. Given num and an integer k, " +
    "return the array-form of num + k.",
  topics: ["Array", "Math"],
  tags: ["Array", "Math"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(max(n, log k))", timeWorst: "O(max(n, log k))", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ num: [2, 7, 4], k: 181 }),
  defaultOptions: {},
  buildSteps: (input) => addArraySteps(input.num, input.k),
  Renderer: AddArrayRenderer,
};
