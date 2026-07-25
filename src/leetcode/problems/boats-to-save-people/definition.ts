import type { LeetCodeProblem } from "../../types";
import type { BoatsData } from "./algorithm";
import { boatsSteps } from "./algorithm";
import { CODE } from "./code";
import { BoatsRenderer } from "./BoatsRenderer";

interface BoatsInput {
  people: number[];
  limit: number;
}

export const boatsToSavePeopleProblem: LeetCodeProblem<BoatsInput, BoatsData, Record<string, never>> = {
  id: "boats-to-save-people",
  number: 881,
  title: "Boats to Save People",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/boats-to-save-people/",
  summary: "Sort, then pair the lightest with the heaviest under the weight limit.",
  prompt:
    "Each boat carries at most two people and a total weight of at most `limit`. Return " +
    "the minimum number of boats needed to carry everyone.",
  topics: ["Array", "Two Pointers", "Greedy", "Sorting"],
  tags: ["Array", "Two Pointers", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ people: [3, 2, 2, 1], limit: 3 }),
  defaultOptions: {},
  buildSteps: (input) => boatsSteps(input.people, input.limit),
  Renderer: BoatsRenderer,
};
