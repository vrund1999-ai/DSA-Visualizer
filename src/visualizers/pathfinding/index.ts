import { bfsDefinition } from "./bfs/definition";
import { dfsDefinition } from "./dfs/definition";
import { dijkstraDefinition } from "./dijkstra/definition";

/** Every pathfinding visualizer definition. Add new ones to this list. */
export const pathfindingDefinitions = [
  bfsDefinition,
  dfsDefinition,
  dijkstraDefinition,
];
