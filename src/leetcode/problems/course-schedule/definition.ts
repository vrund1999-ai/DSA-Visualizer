import type { LeetCodeProblem } from "../../types";
import type { CourseData, CourseScheduleInput } from "./algorithm";
import { courseSteps } from "./algorithm";
import { CODE } from "./code";
import { CourseRenderer } from "./CourseRenderer";

export const courseScheduleProblem: LeetCodeProblem<
  CourseScheduleInput,
  CourseData,
  Record<string, never>
> = {
  id: "course-schedule",
  number: 207,
  title: "Course Schedule",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/course-schedule/",
  summary: "Detect a prerequisite cycle via topological sort.",
  prompt:
    "There are `numCourses` courses labelled 0..n-1 with prerequisite pairs " +
    "[a, b] meaning b must be taken before a. Return true if you can finish all " +
    "courses (i.e. the prerequisite graph has no cycle).",
  topics: ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"],
  tags: ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V + E)", timeWorst: "O(V + E)", space: "O(V + E)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    numCourses: 4,
    prerequisites: [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => courseSteps(input),
  Renderer: CourseRenderer,
};
