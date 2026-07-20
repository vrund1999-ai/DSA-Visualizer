import { fibonacciDefinition } from "./fibonacci/definition";
import { knapsackDefinition } from "./knapsack/definition";
import { lcsDefinition } from "./lcs/definition";
import { coinChangeDefinition } from "./coin-change/definition";
import { editDistanceDefinition } from "./edit-distance/definition";

/** Every dynamic-programming visualizer definition. Add new ones to this list. */
export const dpDefinitions = [
  fibonacciDefinition,
  coinChangeDefinition,
  knapsackDefinition,
  lcsDefinition,
  editDistanceDefinition,
];
