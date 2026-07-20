import type { VisualizerDefinition } from "@/core/types";
import type { GridData, GridInput, GridOptions } from "../../pathfinding/types";
import { GridRenderer } from "../../pathfinding/GridRenderer";
import { makeGrid } from "../../pathfinding/grid";
import { ratInMazeSteps } from "./algorithm";
import { RAT_MAZE_CODE } from "./code";

export const ratInMazeDefinition: VisualizerDefinition<
  GridInput,
  GridData,
  GridOptions
> = {
  id: "rat-in-a-maze",
  title: "Rat in a Maze",
  category: "backtracking",
  summary: "Depth-first backtracking through a maze, retreating at dead ends until the exit is reached.",
  tags: ["grid", "backtracking", "DFS"],
  code: RAT_MAZE_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(rows × cols)",
    timeWorst: "O(rows × cols)",
    space: "O(rows × cols)",
  },
  inputSchema: [{ kind: "grid", label: "Maze", rows: 9, cols: 18 }],
  makeDefaultInput: () => makeGrid(9, 18, 0.2),
  defaultOptions: {},
  buildSteps: (input) => ratInMazeSteps(input),
  Renderer: GridRenderer,
};
