import type { LeetCodeProblem } from "../../types";
import type { RevealData } from "./algorithm";
import { revealSteps } from "./algorithm";
import { CODE } from "./code";
import { RevealRenderer } from "./RevealRenderer";

export const revealCardsProblem: LeetCodeProblem<number[], RevealData, Record<string, never>> = {
  id: "reveal-cards-in-increasing-order",
  number: 950,
  title: "Reveal Cards In Increasing Order",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reveal-cards-in-increasing-order/",
  summary: "Simulate the reveal with a queue of positions, assigning sorted cards to each revealed slot.",
  prompt:
    "Order a deck so that repeatedly revealing the top card and moving the next to the bottom yields " +
    "cards in increasing order. Return that ordering.",
  topics: ["Array", "Queue", "Sorting", "Simulation"],
  tags: ["Queue", "Sorting", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [17, 13, 11, 2, 3, 5, 7],
  defaultOptions: {},
  buildSteps: (input) => revealSteps(input),
  Renderer: RevealRenderer,
};
