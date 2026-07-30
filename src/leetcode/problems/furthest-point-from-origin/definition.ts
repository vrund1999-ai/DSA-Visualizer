import type { LeetCodeProblem } from "../../types";
import type { FurthestData } from "./algorithm";
import { furthestSteps } from "./algorithm";
import { CODE } from "./code";
import { FurthestRenderer } from "./FurthestRenderer";

interface FurthestInput {
  moves: string;
}

export const furthestPointProblem: LeetCodeProblem<FurthestInput, FurthestData, Record<string, never>> = {
  id: "furthest-point-from-origin",
  number: 2833,
  title: "Furthest Point From Origin",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/furthest-point-from-origin/",
  summary: "Spend every '_' wildcard in the leaning direction; the max distance is |L − R| + count of wildcards.",
  prompt:
    "A string of moves has 'L', 'R', and '_' (which may go either way). Starting at 0 on a number line, " +
    "return the furthest distance from the origin reachable after all moves.",
  topics: ["String", "Counting"],
  tags: ["String", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ moves: "_R__LL_" }),
  defaultOptions: {},
  buildSteps: (input) => furthestSteps(input.moves),
  Renderer: FurthestRenderer,
};
