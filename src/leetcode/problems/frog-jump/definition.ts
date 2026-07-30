import type { LeetCodeProblem } from "../../types";
import type { FrogData } from "./algorithm";
import { frogSteps } from "./algorithm";
import { CODE } from "./code";
import { FrogRenderer } from "./FrogRenderer";

export const frogJumpProblem: LeetCodeProblem<number[], FrogData, Record<string, never>> = {
  id: "frog-jump",
  number: 403,
  title: "Frog Jump",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/frog-jump/",
  summary: "Track the set of landing jump sizes per stone; the next jump must be k−1, k, or k+1.",
  prompt:
    "A frog crosses a river on stones at given positions, starting on the first. If its last jump was k " +
    "units, the next must be k−1, k, or k+1 (forward only). Can it reach the last stone?",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Dynamic Programming", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 1, 3, 5, 6, 8, 12, 17],
  defaultOptions: {},
  buildSteps: (input) => frogSteps(input),
  Renderer: FrogRenderer,
};
