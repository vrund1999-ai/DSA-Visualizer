import type { LeetCodeProblem } from "../../types";
import type { SortPeopleData } from "./algorithm";
import { sortPeopleSteps } from "./algorithm";
import { CODE } from "./code";
import { SortPeopleRenderer } from "./SortPeopleRenderer";

interface SortPeopleInput {
  names: string[];
  heights: number[];
}

export const sortThePeopleProblem: LeetCodeProblem<SortPeopleInput, SortPeopleData, Record<string, never>> = {
  id: "sort-the-people",
  number: 2418,
  title: "Sort the People",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/sort-the-people/",
  summary: "Pair names with heights, sort by height descending, and read out the names.",
  prompt:
    "Given arrays of names and their distinct heights, return the names sorted by height in descending " +
    "order.",
  topics: ["Array", "Hash Table", "String", "Sorting"],
  tags: ["Sorting", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ names: ["Mary", "John", "Emma"], heights: [180, 165, 170] }),
  defaultOptions: {},
  buildSteps: (input) => sortPeopleSteps(input.names, input.heights),
  Renderer: SortPeopleRenderer,
};
