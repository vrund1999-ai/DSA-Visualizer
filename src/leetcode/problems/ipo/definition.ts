import type { LeetCodeProblem } from "../../types";
import type { IpoData } from "./algorithm";
import { ipoSteps } from "./algorithm";
import { CODE } from "./code";
import { IpoRenderer } from "./IpoRenderer";

interface IpoInput {
  k: number;
  w: number;
  profits: number[];
  capital: number[];
}

export const ipoProblem: LeetCodeProblem<IpoInput, IpoData, Record<string, never>> = {
  id: "ipo",
  number: 502,
  title: "IPO",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/ipo/",
  summary: "Repeatedly take the most profitable project you can currently afford (max-heap), unlocking more as capital grows.",
  prompt:
    "You can complete at most k projects. Each project needs capital[i] on hand and yields profits[i] added " +
    "to your capital. Starting with capital w, return the maximum capital after finishing up to k projects.",
  topics: ["Array", "Greedy", "Sorting", "Heap (Priority Queue)"],
  tags: ["Greedy", "Heap"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ k: 3, w: 0, profits: [1, 2, 3, 5], capital: [0, 1, 1, 2] }),
  defaultOptions: {},
  buildSteps: (input) => ipoSteps(input.k, input.w, input.profits, input.capital),
  Renderer: IpoRenderer,
};
