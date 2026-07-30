import type { LeetCodeProblem } from "../../types";
import type { RemoveScoreData } from "./algorithm";
import { removeScoreSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveScoreRenderer } from "./RemoveScoreRenderer";

interface RemoveScoreInput {
  s: string;
  x: number;
  y: number;
}

export const maxScoreRemovingSubstringsProblem: LeetCodeProblem<RemoveScoreInput, RemoveScoreData, Record<string, never>> = {
  id: "maximum-score-from-removing-substrings",
  number: 1717,
  title: "Maximum Score From Removing Substrings",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-score-from-removing-substrings/",
  summary: "Greedily strip the higher-point pair first with a stack, then the other pair on what remains.",
  prompt:
    "Remove substring 'ab' for x points or 'ba' for y points, repeatedly, to maximize the total score. " +
    "Return the maximum score obtainable.",
  topics: ["String", "Stack", "Greedy"],
  tags: ["Greedy", "Stack"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "cdbcbbaaabab", x: 4, y: 5 }),
  defaultOptions: {},
  buildSteps: (input) => removeScoreSteps(input.s, input.x, input.y),
  Renderer: RemoveScoreRenderer,
};
