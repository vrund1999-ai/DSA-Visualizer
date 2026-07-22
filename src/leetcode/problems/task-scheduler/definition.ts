import type { LeetCodeProblem } from "../../types";
import type { TaskData, TaskSchedulerInput } from "./algorithm";
import { taskSteps } from "./algorithm";
import { CODE } from "./code";
import { TaskRenderer } from "./TaskRenderer";

export const taskSchedulerProblem: LeetCodeProblem<
  TaskSchedulerInput,
  TaskData,
  Record<string, never>
> = {
  id: "task-scheduler",
  number: 621,
  title: "Task Scheduler",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/task-scheduler/",
  summary: "Least time to run tasks with a cooldown (greedy).",
  prompt:
    "Given tasks (letters) and a cooldown `n`, identical tasks must be at least " +
    "n intervals apart. Return the minimum number of time units (including idle) " +
    "to finish all tasks.",
  topics: ["Array", "Hash Table", "Greedy", "Sorting", "Heap (Priority Queue)"],
  tags: ["Array", "Hash Table", "Greedy", "Sorting", "Heap (Priority Queue)"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ tasks: ["A", "A", "A", "B", "B", "B"], n: 2 }),
  defaultOptions: {},
  buildSteps: (input) => taskSteps(input),
  Renderer: TaskRenderer,
};
