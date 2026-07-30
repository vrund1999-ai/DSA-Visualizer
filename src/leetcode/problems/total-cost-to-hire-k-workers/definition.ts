import type { LeetCodeProblem } from "../../types";
import type { HireData } from "./algorithm";
import { hireSteps } from "./algorithm";
import { CODE } from "./code";
import { HireRenderer } from "./HireRenderer";

interface HireInput {
  costs: number[];
  k: number;
  candidates: number;
}

export const totalCostToHireProblem: LeetCodeProblem<HireInput, HireData, Record<string, never>> = {
  id: "total-cost-to-hire-k-workers",
  number: 2462,
  title: "Total Cost to Hire K Workers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/total-cost-to-hire-k-workers/",
  summary: "Two min-heaps grow from each end, exposing the cheapest front and back candidates to hire each round.",
  prompt:
    "Hire exactly k workers in k rounds. Each round hire the lowest-cost worker among the first and last " +
    "`candidates` still available (ties go to the smaller index). Return the total cost.",
  topics: ["Array", "Two Pointers", "Heap", "Simulation"],
  tags: ["Heap", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((k + candidates) log candidates)", timeWorst: "O(n log n)", space: "O(candidates)" },
  inputSchema: [],
  makeDefaultInput: () => ({ costs: [17, 12, 10, 2, 7, 2, 11, 20, 8], k: 3, candidates: 4 }),
  defaultOptions: {},
  buildSteps: (input) => hireSteps(input.costs, input.k, input.candidates),
  Renderer: HireRenderer,
};
