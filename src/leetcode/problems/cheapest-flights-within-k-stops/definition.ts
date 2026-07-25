import type { LeetCodeProblem } from "../../types";
import type { FlightsData, Flight } from "./algorithm";
import { flightsSteps } from "./algorithm";
import { CODE } from "./code";
import { FlightsRenderer } from "./FlightsRenderer";

interface FlightsInput {
  n: number;
  flights: Flight[];
  src: number;
  dst: number;
  k: number;
}

export const cheapestFlightsWithinKStopsProblem: LeetCodeProblem<FlightsInput, FlightsData, Record<string, never>> = {
  id: "cheapest-flights-within-k-stops",
  number: 787,
  title: "Cheapest Flights Within K Stops",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
  summary: "Bellman-Ford limited to k+1 rounds over a start-of-round snapshot bounds the hop count.",
  prompt:
    "Given n cities, weighted directed flights, a source, a destination, and k, return the cheapest " +
    "price from src to dst using at most k intermediate stops, or -1 if unreachable.",
  topics: ["Dynamic Programming", "Graph", "Shortest Path", "Bellman-Ford"],
  tags: ["Graph", "Shortest Path", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k · E)", timeWorst: "O(k · E)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    n: 4,
    flights: [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    src: 0,
    dst: 3,
    k: 1,
  }),
  defaultOptions: {},
  buildSteps: (input) => flightsSteps(input.n, input.flights, input.src, input.dst, input.k),
  Renderer: FlightsRenderer,
};
