import type { LeetCodeProblem } from "../../types";
import type { AddBinaryData, AddBinaryInput } from "./algorithm";
import { addBinarySteps } from "./algorithm";
import { CODE } from "./code";
import { AddBinaryRenderer } from "./AddBinaryRenderer";

export const addBinaryProblem: LeetCodeProblem<
  AddBinaryInput,
  AddBinaryData,
  Record<string, never>
> = {
  id: "add-binary",
  number: 67,
  title: "Add Binary",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/add-binary/",
  summary: "Sum two binary strings bit by bit with carry.",
  prompt:
    "Given two binary strings `a` and `b`, return their sum as a binary string.",
  topics: ["Math", "String", "Bit Manipulation", "Simulation"],
  tags: ["Math", "String", "Bit Manipulation", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 52.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: "1010", b: "1011" }),
  defaultOptions: {},
  buildSteps: (input) => addBinarySteps(input),
  Renderer: AddBinaryRenderer,
};
