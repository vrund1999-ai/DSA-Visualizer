import type { LeetCodeProblem } from "../../types";
import type { VisibleData } from "./algorithm";
import { visibleSteps } from "./algorithm";
import { CODE } from "./code";
import { VisibleRenderer } from "./VisibleRenderer";

export const visiblePeopleQueueProblem: LeetCodeProblem<number[], VisibleData, Record<string, never>> = {
  id: "number-of-visible-people-in-a-queue",
  number: 1944,
  title: "Number of Visible People in a Queue",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/number-of-visible-people-in-a-queue/",
  summary: "A right-to-left monotonic stack: everyone shorter than the current person is visible, plus the first taller blocker.",
  prompt:
    "People stand in a queue. Person i sees person j (j > i) if everyone between them is shorter than both. " +
    "Return, for each person, how many people to their right they can see.",
  topics: ["Array", "Stack", "Monotonic Stack"],
  tags: ["Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [10, 6, 8, 5, 11, 9],
  defaultOptions: {},
  buildSteps: (input) => visibleSteps(input),
  Renderer: VisibleRenderer,
};
