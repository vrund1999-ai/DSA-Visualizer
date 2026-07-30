import type { LeetCodeProblem } from "../../types";
import type { PowerFourData } from "./algorithm";
import { powerFourSteps } from "./algorithm";
import { CODE } from "./code";
import { PowerFourRenderer } from "./PowerFourRenderer";

interface PowerFourInput {
  n: number;
}

export const powerOfFourProblem: LeetCodeProblem<PowerFourInput, PowerFourData, Record<string, never>> = {
  id: "power-of-four",
  number: 342,
  title: "Power of Four",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/power-of-four/",
  summary: "A power of four is a power of two (one set bit) whose bit sits at an even position (mask 0x55555555).",
  prompt: "Given an integer n, return true if it is a power of four.",
  topics: ["Math", "Bit Manipulation", "Recursion"],
  tags: ["Bit Manipulation", "Math"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 16 }),
  defaultOptions: {},
  buildSteps: (input) => powerFourSteps(input.n),
  Renderer: PowerFourRenderer,
};
