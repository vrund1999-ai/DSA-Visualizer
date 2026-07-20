import type { VisualizerDefinition } from "@/core/types";
import type { NQueensData } from "./types";
import { BoardRenderer } from "./BoardRenderer";
import { nQueensSteps } from "./algorithm";
import { NQUEENS_CODE } from "./code";

export const nQueensDefinition: VisualizerDefinition<
  number,
  NQueensData,
  Record<string, never>
> = {
  id: "n-queens",
  title: "N-Queens",
  category: "backtracking",
  summary: "Places N non-attacking queens by trying columns and backtracking on conflicts.",
  tags: ["constraint", "backtracking"],
  code: NQUEENS_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n!)",
    timeAverage: "O(n!)",
    timeWorst: "O(n!)",
    space: "O(n)",
  },
  inputSchema: [{ kind: "number", label: "N", min: 4, max: 8, default: 6 }],
  makeDefaultInput: () => 6,
  defaultOptions: {},
  buildSteps: (input) => nQueensSteps(input),
  Renderer: BoardRenderer,
};
