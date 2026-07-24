import type { LeetCodeProblem } from "../../types";
import type { StackOp, StackQueueData } from "./algorithm";
import { stackQueueSteps } from "./algorithm";
import { CODE } from "./code";
import { StackQueueRenderer } from "./StackQueueRenderer";

export const implementStackQueuesProblem: LeetCodeProblem<StackOp[], StackQueueData, Record<string, never>> = {
  id: "implement-stack-using-queues",
  number: 225,
  title: "Implement Stack using Queues",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/implement-stack-using-queues/",
  summary: "One FIFO queue rotated on each push so the newest value sits at the front.",
  prompt:
    "Implement a last-in-first-out stack using only a queue. Support push, pop, top, and " +
    "empty; push may be O(n).",
  topics: ["Stack", "Design", "Queue"],
  tags: ["Stack", "Design", "Queue"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n) push", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { type: "push", x: 1 },
    { type: "push", x: 2 },
    { type: "push", x: 3 },
    { type: "top" },
    { type: "pop" },
    { type: "pop" },
  ],
  defaultOptions: {},
  buildSteps: (input) => stackQueueSteps(input),
  Renderer: StackQueueRenderer,
};
