import type { LeetCodeProblem } from "../../types";
import type { MeetingData } from "./algorithm";
import { meetingSteps } from "./algorithm";
import { CODE } from "./code";
import { MeetingRenderer } from "./MeetingRenderer";

export const meetingRoomsIIProblem: LeetCodeProblem<
  [number, number][],
  MeetingData,
  Record<string, never>
> = {
  id: "meeting-rooms-ii",
  number: 253,
  title: "Meeting Rooms II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/meeting-rooms-ii/",
  summary: "Fewest rooms for overlapping meetings (sweep line).",
  prompt:
    "Given meeting time intervals `[start, end]`, return the minimum number of " +
    "conference rooms required so no two overlapping meetings share a room.",
  topics: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap (Priority Queue)"],
  tags: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap (Priority Queue)"],
  companies: ["Bloomberg"],
  frequency: 65.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 30],
    [5, 10],
    [15, 20],
  ],
  defaultOptions: {},
  buildSteps: (input) => meetingSteps(input),
  Renderer: MeetingRenderer,
};
