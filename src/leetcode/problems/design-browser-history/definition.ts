import type { LeetCodeProblem } from "../../types";
import type { BrowserHistoryData, BrowserOp } from "./algorithm";
import { browserHistorySteps } from "./algorithm";
import { CODE } from "./code";
import { BrowserHistoryRenderer } from "./BrowserHistoryRenderer";

interface BrowserHistoryInput {
  homepage: string;
  ops: BrowserOp[];
}

export const designBrowserHistoryProblem: LeetCodeProblem<BrowserHistoryInput, BrowserHistoryData, Record<string, never>> = {
  id: "design-browser-history",
  number: 1472,
  title: "Design Browser History",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/design-browser-history/",
  summary: "Array of pages plus a cursor; visiting truncates the forward history.",
  prompt:
    "Implement a BrowserHistory that starts on a homepage and supports visit(url) " +
    "(clearing forward history), back(steps), and forward(steps), each clamped to the " +
    "available range.",
  topics: ["Array", "Linked List", "Stack", "Design", "Doubly-Linked List"],
  tags: ["Array", "Stack", "Design"],
  companies: ["Bloomberg"],
  frequency: 48.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) amortized", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    homepage: "leetcode",
    ops: [
      { type: "visit", url: "google" },
      { type: "visit", url: "facebook" },
      { type: "visit", url: "youtube" },
      { type: "back", steps: 1 },
      { type: "back", steps: 1 },
      { type: "forward", steps: 1 },
      { type: "visit", url: "linkedin" },
      { type: "forward", steps: 2 },
      { type: "back", steps: 2 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => browserHistorySteps(input.homepage, input.ops),
  Renderer: BrowserHistoryRenderer,
};
