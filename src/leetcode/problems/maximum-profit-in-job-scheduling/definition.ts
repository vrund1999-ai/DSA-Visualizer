import type { LeetCodeProblem } from "../../types";
import type { JobSchedulingData } from "./algorithm";
import { jobSchedulingSteps } from "./algorithm";
import { CODE } from "./code";
import { JobSchedulingRenderer } from "./JobSchedulingRenderer";

interface JobSchedulingInput {
  startTime: number[];
  endTime: number[];
  profit: number[];
}

export const maximumProfitJobSchedulingProblem: LeetCodeProblem<JobSchedulingInput, JobSchedulingData, Record<string, never>> = {
  id: "maximum-profit-in-job-scheduling",
  number: 1235,
  title: "Maximum Profit in Job Scheduling",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
  summary: "Sort by end, DP with binary search for the latest compatible job.",
  prompt:
    "Given jobs with start times, end times, and profits, choose a subset of " +
    "non-overlapping jobs to maximize total profit. Return that maximum.",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Sorting"],
  tags: ["Array", "Binary Search", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ startTime: [1, 2, 3, 3], endTime: [3, 4, 5, 6], profit: [50, 10, 40, 70] }),
  defaultOptions: {},
  buildSteps: (input) => jobSchedulingSteps(input.startTime, input.endTime, input.profit),
  Renderer: JobSchedulingRenderer,
};
