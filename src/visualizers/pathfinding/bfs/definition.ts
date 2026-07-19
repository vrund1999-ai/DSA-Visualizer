import type { VisualizerDefinition } from "@/core/types";
import type { GridData, GridInput, GridOptions } from "../types";
import { GridRenderer } from "../GridRenderer";
import { frontierSearch } from "../search";
import { makeGrid } from "../grid";
import { BFS_CODE } from "./code";

export const bfsDefinition: VisualizerDefinition<
  GridInput,
  GridData,
  GridOptions
> = {
  id: "bfs",
  title: "Breadth-First Search",
  category: "pathfinding",
  summary: "Explores the grid in expanding rings, guaranteeing a shortest path.",
  tags: ["grid", "unweighted", "shortest path"],
  code: BFS_CODE,
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
  buildSteps: (input) => frontierSearch(input, "bfs"),
  Renderer: GridRenderer,
};
