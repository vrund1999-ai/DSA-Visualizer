import type { LeetCodeProblem } from "../../types";
import type { EventsData } from "./algorithm";
import { eventsSteps } from "./algorithm";
import { CODE } from "./code";
import { EventsRenderer } from "./EventsRenderer";

export const maximumEventsAttendedProblem: LeetCodeProblem<number[][], EventsData, Record<string, never>> = {
  id: "maximum-number-of-events-that-can-be-attended",
  number: 1353,
  title: "Maximum Number of Events That Can Be Attended",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
  summary: "Sweep days; each day attend the open event with the earliest end (min-heap greedy).",
  prompt:
    "Each event spans [startDay, endDay] and you can attend one event per day (on any day in its " +
    "span). Return the maximum number of events you can attend.",
  topics: ["Array", "Greedy", "Sorting", "Heap"],
  tags: ["Greedy", "Heap", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(d log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 4],
    [4, 4],
    [2, 2],
    [3, 4],
    [1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => eventsSteps(input),
  Renderer: EventsRenderer,
};
