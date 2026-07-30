import type { LeetCodeProblem } from "../../types";
import type { EggDropData } from "./algorithm";
import { eggDropSteps } from "./algorithm";
import { CODE } from "./code";
import { EggDropRenderer } from "./EggDropRenderer";

interface EggDropInput {
  k: number;
  n: number;
}

export const superEggDropProblem: LeetCodeProblem<EggDropInput, EggDropData, Record<string, never>> = {
  id: "super-egg-drop",
  number: 887,
  title: "Super Egg Drop",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/super-egg-drop/",
  summary: "Flip the DP: dp[m][e] counts floors testable with m moves and e eggs = dp[m−1][e−1] + dp[m−1][e] + 1; grow m until it covers n.",
  prompt:
    "With k identical eggs and a building of n floors, find the minimum number of moves that guarantees " +
    "determining the highest floor from which an egg can be dropped without breaking.",
  topics: ["Math", "Binary Search", "Dynamic Programming"],
  tags: ["Dynamic Programming", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k log n)", timeWorst: "O(k log n)", space: "O(k log n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ k: 2, n: 6 }),
  defaultOptions: {},
  buildSteps: (input) => eggDropSteps(input.k, input.n),
  Renderer: EggDropRenderer,
};
