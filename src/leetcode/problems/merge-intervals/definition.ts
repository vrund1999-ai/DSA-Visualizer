import { makePlaceholderProblem } from "../../placeholder";

export const mergeIntervalsProblem = makePlaceholderProblem({
  id: "merge-intervals",
  number: 56,
  title: "Merge Intervals",
  difficulty: "medium",
  url: "https://leetcode.com/problems/merge-intervals/",
  summary: "Merge all overlapping intervals into non-overlapping ranges.",
  prompt:
    "Given an array of intervals where `intervals[i] = [start, end]`, merge all " +
    "overlapping intervals and return an array of the non-overlapping intervals " +
    "that cover all the intervals in the input.",
  topics: ["Array", "Sorting"],
});
