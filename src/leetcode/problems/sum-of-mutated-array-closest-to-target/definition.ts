import type { LeetCodeProblem } from "../../types";
import type { MutatedData } from "./algorithm";
import { mutatedSteps } from "./algorithm";
import { CODE } from "./code";
import { MutatedRenderer } from "./MutatedRenderer";

interface MutatedInput {
  arr: number[];
  target: number;
}

export const mutatedArrayProblem: LeetCodeProblem<MutatedInput, MutatedData, Record<string, never>> = {
  id: "sum-of-mutated-array-closest-to-target",
  number: 1300,
  title: "Sum of Mutated Array Closest to Target",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/",
  summary: "The capped sum grows with the cap, so binary-search the crossover and pick the closest of two values.",
  prompt:
    "Find a value such that replacing every element greater than it with that value makes the array sum as " +
    "close to target as possible. On ties, return the smallest such value.",
  topics: ["Array", "Binary Search", "Sorting"],
  tags: ["Binary Search"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log max)", timeWorst: "O(n log max)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [4, 9, 3], target: 10 }),
  defaultOptions: {},
  buildSteps: (input) => mutatedSteps(input.arr, input.target),
  Renderer: MutatedRenderer,
};
