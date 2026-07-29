import type { LeetCodeProblem } from "../../types";
import type { MeetingData } from "./algorithm";
import { meetingSteps } from "./algorithm";
import { CODE } from "./code";
import { MeetingRenderer } from "./MeetingRenderer";

export const meetingRoomsProblem: LeetCodeProblem<number[][], MeetingData, Record<string, never>> = {
  id: "meeting-rooms",
  number: 252,
  title: "Meeting Rooms",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/meeting-rooms/",
  summary: "Sort by start time; a conflict exists iff some meeting begins before the previous one ends.",
  prompt:
    "Given an array of meeting time intervals [start, end], determine whether a person could attend " +
    "all meetings (no two intervals overlap).",
  topics: ["Array", "Sorting", "Intervals"],
  tags: ["Array", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
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
