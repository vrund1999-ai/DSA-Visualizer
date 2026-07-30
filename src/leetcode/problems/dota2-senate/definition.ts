import type { LeetCodeProblem } from "../../types";
import type { SenateData } from "./algorithm";
import { senateSteps } from "./algorithm";
import { CODE } from "./code";
import { SenateRenderer } from "./SenateRenderer";

export const dota2SenateProblem: LeetCodeProblem<string, SenateData, Record<string, never>> = {
  id: "dota2-senate",
  number: 649,
  title: "Dota2 Senate",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/dota2-senate/",
  summary: "Each party is a queue of positions; the earlier front bans the opposing front and re-enters a lap later.",
  prompt:
    "Senators from parties 'R' and 'D' vote in round order. On their turn a senator may ban a senator from " +
    "the other party (removing their rights). Predict which party ultimately announces victory.",
  topics: ["Greedy", "Queue"],
  tags: ["Greedy", "Queue"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "RDDRD",
  defaultOptions: {},
  buildSteps: (input) => senateSteps(input),
  Renderer: SenateRenderer,
};
