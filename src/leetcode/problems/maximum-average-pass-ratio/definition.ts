import type { LeetCodeProblem } from "../../types";
import type { PassRatioData } from "./algorithm";
import { passRatioSteps } from "./algorithm";
import { CODE } from "./code";
import { PassRatioRenderer } from "./PassRatioRenderer";

interface PassRatioInput {
  classes: [number, number][];
  extraStudents: number;
}

export const maxAveragePassRatioProblem: LeetCodeProblem<PassRatioInput, PassRatioData, Record<string, never>> = {
  id: "maximum-average-pass-ratio",
  number: 1792,
  title: "Maximum Average Pass Ratio",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-average-pass-ratio/",
  summary: "Greedily give each guaranteed-pass student to the class with the largest marginal ratio gain (a max-heap).",
  prompt:
    "Each class has [pass, total] students. You have extraStudents guaranteed-to-pass students to distribute. " +
    "Maximize the average pass ratio across all classes and return it.",
  topics: ["Array", "Greedy", "Heap (Priority Queue)"],
  tags: ["Greedy", "Heap"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((n + k) log n)", timeWorst: "O((n + k) log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ classes: [[1, 2], [3, 5], [2, 2]], extraStudents: 2 }),
  defaultOptions: {},
  buildSteps: (input) => passRatioSteps(input.classes, input.extraStudents),
  Renderer: PassRatioRenderer,
};
