import type { LeetCodeProblem } from "../../types";
import type { DelayData } from "./algorithm";
import { delaySteps } from "./algorithm";
import { CODE } from "./code";
import { DelayRenderer } from "./DelayRenderer";

interface DelayInput {
  times: number[][];
  n: number;
  k: number;
}

export const networkDelayTimeProblem: LeetCodeProblem<DelayInput, DelayData, Record<string, never>> = {
  id: "network-delay-time",
  number: 743,
  title: "Network Delay Time",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/network-delay-time/",
  summary: "Dijkstra from the source; the answer is the largest shortest-path distance to any node.",
  prompt:
    "Signals travel along directed weighted edges times[i] = [u, v, w]. Starting from node k, return " +
    "the time for all n nodes to receive the signal, or -1 if some node cannot.",
  topics: ["Graph", "Heap", "Shortest Path", "Dijkstra"],
  tags: ["Graph", "Heap", "Shortest Path"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(E log V)", timeWorst: "O(E log V)", space: "O(V + E)" },
  inputSchema: [],
  makeDefaultInput: () => ({ times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n: 4, k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => delaySteps(input.times, input.n, input.k),
  Renderer: DelayRenderer,
};
