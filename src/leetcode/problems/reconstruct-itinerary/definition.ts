import type { LeetCodeProblem } from "../../types";
import type { ItineraryData } from "./algorithm";
import { itinerarySteps } from "./algorithm";
import { CODE } from "./code";
import { ItineraryRenderer } from "./ItineraryRenderer";

export const reconstructItineraryProblem: LeetCodeProblem<string[][], ItineraryData, Record<string, never>> = {
  id: "reconstruct-itinerary",
  number: 332,
  title: "Reconstruct Itinerary",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/reconstruct-itinerary/",
  summary: "Hierholzer's Eulerian path: walk to the smallest unused destination; dead ends build the route.",
  prompt:
    "Given airline tickets [from, to], reconstruct the itinerary that starts at 'JFK', uses every " +
    "ticket exactly once, and is lexicographically smallest.",
  topics: ["Depth-First Search", "Graph", "Eulerian Circuit"],
  tags: ["Graph", "Depth-First Search", "Eulerian Circuit"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(E log E)", timeWorst: "O(E log E)", space: "O(E)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ],
  defaultOptions: {},
  buildSteps: (input) => itinerarySteps(input),
  Renderer: ItineraryRenderer,
};
