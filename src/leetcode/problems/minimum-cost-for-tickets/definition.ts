import type { LeetCodeProblem } from "../../types";
import type { TicketsData } from "./algorithm";
import { ticketsSteps } from "./algorithm";
import { CODE } from "./code";
import { TicketsRenderer } from "./TicketsRenderer";

interface TicketsInput {
  days: number[];
  costs: number[];
}

export const minimumCostForTicketsProblem: LeetCodeProblem<TicketsInput, TicketsData, Record<string, never>> = {
  id: "minimum-cost-for-tickets",
  number: 983,
  title: "Minimum Cost For Tickets",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-cost-for-tickets/",
  summary: "DP by day: each travel day picks the cheapest 1-, 7-, or 30-day pass ending that day.",
  prompt:
    "You travel on the given days. Passes cost costs[0] (1 day), costs[1] (7 days), costs[2] (30 days). " +
    "Return the minimum money needed to cover all travel days.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(last day)", timeWorst: "O(last day)", space: "O(last day)" },
  inputSchema: [],
  makeDefaultInput: () => ({ days: [1, 4, 6, 7, 8, 20], costs: [2, 7, 15] }),
  defaultOptions: {},
  buildSteps: (input) => ticketsSteps(input.days, input.costs),
  Renderer: TicketsRenderer,
};
