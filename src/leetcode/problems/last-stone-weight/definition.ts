import type { LeetCodeProblem } from "../../types";
import type { StonesData } from "./algorithm";
import { stonesSteps } from "./algorithm";
import { CODE } from "./code";
import { StonesRenderer } from "./StonesRenderer";

export const lastStoneWeightProblem: LeetCodeProblem<number[], StonesData, Record<string, never>> = {
  id: "last-stone-weight",
  number: 1046,
  title: "Last Stone Weight",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/last-stone-weight/",
  summary: "Repeatedly smash the two heaviest stones with a max-heap; return the last remaining weight.",
  prompt:
    "Each turn, smash the two heaviest stones: equal weights vanish, otherwise the difference remains. " +
    "Return the weight of the last stone (0 if none remain).",
  topics: ["Array", "Heap"],
  tags: ["Array", "Heap"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 7, 4, 1, 8, 1],
  defaultOptions: {},
  buildSteps: (input) => stonesSteps(input),
  Renderer: StonesRenderer,
};
