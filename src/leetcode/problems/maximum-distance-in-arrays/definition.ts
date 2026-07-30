import type { LeetCodeProblem } from "../../types";
import type { MaxDistData } from "./algorithm";
import { maxDistSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxDistRenderer } from "./MaxDistRenderer";

interface MaxDistInput {
  arrays: number[][];
}

export const maxDistanceInArraysProblem: LeetCodeProblem<MaxDistInput, MaxDistData, Record<string, never>> = {
  id: "maximum-distance-in-arrays",
  number: 624,
  title: "Maximum Distance in Arrays",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-distance-in-arrays/",
  summary: "Sweep the sorted arrays, pairing each against the running min-first and max-last of earlier arrays to keep the endpoints distinct.",
  prompt:
    "Given m sorted arrays, pick two integers from two different arrays and return the maximum possible " +
    "absolute difference between them.",
  topics: ["Array", "Greedy"],
  tags: ["Greedy", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m)", timeWorst: "O(m)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arrays: [[1, 2, 3], [4, 5], [1, 2, 3]] }),
  defaultOptions: {},
  buildSteps: (input) => maxDistSteps(input.arrays),
  Renderer: MaxDistRenderer,
};
