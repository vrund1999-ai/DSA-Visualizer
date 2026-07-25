import type { LeetCodeProblem } from "../../types";
import type { MultiplyData } from "./algorithm";
import { multiplySteps } from "./algorithm";
import { CODE } from "./code";
import { MultiplyRenderer } from "./MultiplyRenderer";

interface MultiplyInput {
  num1: string;
  num2: string;
}

export const multiplyStringsProblem: LeetCodeProblem<MultiplyInput, MultiplyData, Record<string, never>> = {
  id: "multiply-strings",
  number: 43,
  title: "Multiply Strings",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/multiply-strings/",
  summary: "Digit-by-digit multiplication placing each product at positions i+j and i+j+1.",
  prompt:
    "Given two non-negative integers as strings num1 and num2, return their product as a " +
    "string, without using built-in big-integer libraries.",
  topics: ["Math", "String", "Simulation"],
  tags: ["Math", "String", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m + n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ num1: "123", num2: "45" }),
  defaultOptions: {},
  buildSteps: (input) => multiplySteps(input.num1, input.num2),
  Renderer: MultiplyRenderer,
};
