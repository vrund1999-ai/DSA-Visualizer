import type { VisualizerDefinition } from "@/core/types";
import type { GridData, GridInput, GridOptions } from "../types";
import { GridRenderer } from "../GridRenderer";
import { frontierSearch } from "../search";
import { makeGrid } from "../grid";
import { DFS_CODE } from "./code";

export const dfsDefinition: VisualizerDefinition<
  GridInput,
  GridData,
  GridOptions
> = {
  id: "dfs",
  title: "Depth-First Search",
  category: "pathfinding",
  summary: "Dives as deep as possible before backtracking; finds a path, not necessarily the shortest.",
  tags: ["grid", "unweighted", "traversal"],
  code: DFS_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(V + E)",
    timeAverage: "O(V + E)",
    timeWorst: "O(V + E)",
    space: "O(V)",
  },
  inputSchema: [{ kind: "grid", label: "Grid", rows: 10, cols: 22 }],
  makeDefaultInput: () => makeGrid(10, 22),
  defaultOptions: {},
  buildSteps: (input) => frontierSearch(input, "dfs"),
  Renderer: GridRenderer,
};
