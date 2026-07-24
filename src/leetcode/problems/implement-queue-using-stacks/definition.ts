import type { LeetCodeProblem } from "../../types";
import type { QueueOp, QueueStacksData } from "./algorithm";
import { queueStacksSteps } from "./algorithm";
import { CODE } from "./code";
import { QueueStacksRenderer } from "./QueueStacksRenderer";

export const implementQueueStacksProblem: LeetCodeProblem<QueueOp[], QueueStacksData, Record<string, never>> = {
  id: "implement-queue-using-stacks",
  number: 232,
  title: "Implement Queue using Stacks",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/implement-queue-using-stacks/",
  summary: "Two LIFO stacks give amortized O(1) FIFO by pouring in→out on demand.",
  prompt:
    "Implement a first-in-first-out queue using only two stacks. Support push, pop, " +
    "peek, and empty with amortized O(1) per operation.",
  topics: ["Stack", "Design", "Queue"],
  tags: ["Stack", "Design", "Queue"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) amortized", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { type: "push", x: 1 },
    { type: "push", x: 2 },
    { type: "push", x: 3 },
    { type: "peek" },
    { type: "pop" },
    { type: "push", x: 4 },
    { type: "pop" },
    { type: "pop" },
  ],
  defaultOptions: {},
  buildSteps: (input) => queueStacksSteps(input),
  Renderer: QueueStacksRenderer,
};
