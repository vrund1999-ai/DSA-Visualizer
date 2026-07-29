import type { LeetCodeProblem } from "../../types";
import type { EnclavesData } from "./algorithm";
import { enclavesSteps } from "./algorithm";
import { CODE } from "./code";
import { EnclavesRenderer } from "./EnclavesRenderer";

export const numberOfEnclavesProblem: LeetCodeProblem<number[][], EnclavesData, Record<string, never>> = {
  id: "number-of-enclaves",
  number: 1020,
  title: "Number of Enclaves",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-enclaves/",
  summary: "Flood-fill land reachable from the border, then count the land that remains enclosed.",
  prompt:
    "Given a binary grid where 1 is land, return the number of land cells from which you cannot walk " +
    "off the boundary of the grid in any number of moves.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"],
  tags: ["Array", "Depth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => enclavesSteps(input),
  Renderer: EnclavesRenderer,
};
