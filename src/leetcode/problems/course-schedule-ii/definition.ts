import type { LeetCodeProblem } from "../../types";
import type { CourseOrderData } from "./algorithm";
import { courseOrderSteps } from "./algorithm";
import { CODE } from "./code";
import { CourseOrderRenderer } from "./CourseOrderRenderer";

interface CourseOrderInput {
  numCourses: number;
  prerequisites: [number, number][];
}

export const courseScheduleIIProblem: LeetCodeProblem<CourseOrderInput, CourseOrderData, Record<string, never>> = {
  id: "course-schedule-ii",
  number: 210,
  title: "Course Schedule II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/course-schedule-ii/",
  summary: "Kahn's BFS topological sort emits an order or detects a cycle.",
  prompt:
    "Given numCourses and prerequisite pairs [a, b] (take b before a), return an ordering " +
    "of courses that satisfies all prerequisites, or an empty array if impossible.",
  topics: ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"],
  tags: ["Graph", "Topological Sort", "Breadth-First Search"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V + E)", timeWorst: "O(V + E)", space: "O(V + E)" },
  inputSchema: [],
  makeDefaultInput: () => ({ numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] }),
  defaultOptions: {},
  buildSteps: (input) => courseOrderSteps(input.numCourses, input.prerequisites),
  Renderer: CourseOrderRenderer,
};
