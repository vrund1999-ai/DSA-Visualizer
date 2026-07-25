import type { LeetCodeProblem } from "../../types";
import type { TileData } from "./algorithm";
import { tileSteps } from "./algorithm";
import { CODE } from "./code";
import { TileRenderer } from "./TileRenderer";

export const letterTilePossibilitiesProblem: LeetCodeProblem<string, TileData, Record<string, never>> = {
  id: "letter-tile-possibilities",
  number: 1079,
  title: "Letter Tile Possibilities",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/letter-tile-possibilities/",
  summary: "DFS over remaining letter counts: each pick is one new sequence, recursion extends it.",
  prompt:
    "Given a set of letter tiles (with possible repeats), return the number of distinct " +
    "non-empty sequences that can be formed using the tiles.",
  topics: ["Hash Table", "String", "Backtracking", "Counting"],
  tags: ["String", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(∑ P(n,k))", timeWorst: "O(n·n!)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "AAB",
  defaultOptions: {},
  buildSteps: (input) => tileSteps(input),
  Renderer: TileRenderer,
};
