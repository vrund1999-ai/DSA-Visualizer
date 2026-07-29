import type { LeetCodeProblem } from "../../types";
import type { DominoesData } from "./algorithm";
import { dominoesSteps } from "./algorithm";
import { CODE } from "./code";
import { DominoesRenderer } from "./DominoesRenderer";

export const pushDominoesProblem: LeetCodeProblem<string, DominoesData, Record<string, never>> = {
  id: "push-dominoes",
  number: 838,
  title: "Push Dominoes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/push-dominoes/",
  summary: "Two passes assign a signed, decaying force from each R (right) and L (left); the net sign wins.",
  prompt:
    "Dominoes are pushed left ('L'), right ('R'), or upright ('.'). Simultaneously, forces resolve. " +
    "Return the final configuration after all dominoes settle.",
  topics: ["Two Pointers", "String", "Dynamic Programming"],
  tags: ["Two Pointers", "String", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ".L.R...LR..L..",
  defaultOptions: {},
  buildSteps: (input) => dominoesSteps(input),
  Renderer: DominoesRenderer,
};
