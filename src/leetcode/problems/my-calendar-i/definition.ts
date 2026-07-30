import type { LeetCodeProblem } from "../../types";
import type { CalendarData } from "./algorithm";
import { calendarSteps } from "./algorithm";
import { CODE } from "./code";
import { CalendarRenderer } from "./CalendarRenderer";

interface CalendarInput {
  ops: [number, number][];
}

export const myCalendarIProblem: LeetCodeProblem<CalendarInput, CalendarData, Record<string, never>> = {
  id: "my-calendar-i",
  number: 729,
  title: "My Calendar I",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/my-calendar-i/",
  summary: "Accept a booking only if the half-open interval [start, end) overlaps no existing event (start < e and s < end).",
  prompt:
    "Implement a calendar: book(start, end) returns true and records the event if it does not double-book " +
    "(overlap) any existing event; otherwise it returns false.",
  topics: ["Array", "Binary Search", "Design", "Ordered Set"],
  tags: ["Design", "Intervals"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n) per book", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ ops: [[10, 20], [15, 25], [20, 30], [5, 12]] }),
  defaultOptions: {},
  buildSteps: (input) => calendarSteps(input.ops),
  Renderer: CalendarRenderer,
};
