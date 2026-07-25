import type { LeetCodeProblem } from "../../types";
import type { EvenNumData } from "./algorithm";
import { evenNumSteps } from "./algorithm";
import { CODE } from "./code";
import { EvenNumRenderer } from "./EvenNumRenderer";

export const findingThreeDigitEvenNumbersProblem: LeetCodeProblem<number[], EvenNumData, Record<string, never>> = {
  id: "finding-3-digit-even-numbers",
  number: 2094,
  title: "Finding 3-Digit Even Numbers",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/finding-3-digit-even-numbers/",
  summary: "Enumerate even values 100..998; keep those whose digit multiset fits the supply.",
  prompt:
    "Given an array of digits, return all unique 3-digit even integers (no leading zero) that " +
    "can be formed by choosing three of the digits, sorted ascending.",
  topics: ["Array", "Hash Table", "Sorting", "Enumeration", "Counting"],
  tags: ["Array", "Hash Table", "Enumeration"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 1, 3, 0],
  defaultOptions: {},
  buildSteps: (input) => evenNumSteps(input),
  Renderer: EvenNumRenderer,
};
