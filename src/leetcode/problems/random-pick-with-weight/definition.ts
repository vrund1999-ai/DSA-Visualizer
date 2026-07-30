import type { LeetCodeProblem } from "../../types";
import type { PickWeightData } from "./algorithm";
import { pickWeightSteps } from "./algorithm";
import { CODE } from "./code";
import { PickWeightRenderer } from "./PickWeightRenderer";

interface PickWeightInput {
  weights: number[];
  /** sample target values to demonstrate the picking (normally random) */
  targets: number[];
}

export const randomPickWithWeightProblem: LeetCodeProblem<PickWeightInput, PickWeightData, Record<string, never>> = {
  id: "random-pick-with-weight",
  number: 528,
  title: "Random Pick with Weight",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/random-pick-with-weight/",
  summary: "Cumulative sums map each index to a weight-sized band; a random target binary-searches to its index.",
  prompt:
    "Given an array of positive weights, implement pickIndex() so index i is returned with probability " +
    "w[i] / sum(w). (Sample targets shown instead of random draws.)",
  topics: ["Math", "Binary Search", "Prefix Sum", "Randomized"],
  tags: ["Binary Search", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n) per pick", timeWorst: "O(log n) per pick", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ weights: [1, 3, 2, 4], targets: [1, 4, 6, 9] }),
  defaultOptions: {},
  buildSteps: (input) => pickWeightSteps(input.weights, input.targets),
  Renderer: PickWeightRenderer,
};
