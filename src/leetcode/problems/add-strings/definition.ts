import type { LeetCodeProblem } from "../../types";
import type { AddStringsData, AddStringsInput } from "./algorithm";
import { addStringsSteps } from "./algorithm";
import { CODE } from "./code";
import { AddStringsRenderer } from "./AddStringsRenderer";

export const addStringsProblem: LeetCodeProblem<
  AddStringsInput,
  AddStringsData,
  Record<string, never>
> = {
  id: "add-strings",
  number: 415,
  title: "Add Strings",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/add-strings/",
  summary: "Add two non-negative integers given as strings.",
  prompt:
    "Given two non-negative integers `num1` and `num2` represented as strings, " +
    "return their sum as a string — without converting them to integers directly.",
  topics: ["Math", "String", "Simulation"],
  tags: ["Math", "String", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 18,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: "456", b: "77" }),
  defaultOptions: {},
  buildSteps: (input) => addStringsSteps(input),
  Renderer: AddStringsRenderer,
};
