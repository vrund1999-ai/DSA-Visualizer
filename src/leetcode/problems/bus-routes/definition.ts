import type { LeetCodeProblem } from "../../types";
import type { BusData } from "./algorithm";
import { busSteps } from "./algorithm";
import { CODE } from "./code";
import { BusRenderer } from "./BusRenderer";

interface BusInput {
  routes: number[][];
  source: number;
  target: number;
}

export const busRoutesProblem: LeetCodeProblem<BusInput, BusData, Record<string, never>> = {
  id: "bus-routes",
  number: 815,
  title: "Bus Routes",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/bus-routes/",
  summary: "BFS over routes (adjacent when they share a stop), one bus per level, until target is on a route.",
  prompt:
    "Each routes[i] is a bus's repeating stop loop. Starting at the source stop, return the fewest " +
    "buses you must take to reach the target stop, or -1 if impossible.",
  topics: ["Array", "Hash Table", "Breadth-First Search", "Graph"],
  tags: ["Breadth-First Search", "Graph", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(Σ|routes|)", timeWorst: "O(Σ|routes|)", space: "O(Σ|routes|)" },
  inputSchema: [],
  makeDefaultInput: () => ({ routes: [[1, 2, 7], [3, 6, 7]], source: 1, target: 6 }),
  defaultOptions: {},
  buildSteps: (input) => busSteps(input.routes, input.source, input.target),
  Renderer: BusRenderer,
};
