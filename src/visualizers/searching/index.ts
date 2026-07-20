import { linearSearchDefinition } from "./linear-search/definition";
import { binarySearchDefinition } from "./binary-search/definition";
import { jumpSearchDefinition } from "./jump-search/definition";
import { interpolationSearchDefinition } from "./interpolation-search/definition";

/** Every searching visualizer definition. Add new searches to this list. */
export const searchingDefinitions = [
  linearSearchDefinition,
  binarySearchDefinition,
  jumpSearchDefinition,
  interpolationSearchDefinition,
];
