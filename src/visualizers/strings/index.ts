import { naiveSearchDefinition } from "./naive/definition";
import { kmpSearchDefinition } from "./kmp/definition";
import { rabinKarpDefinition } from "./rabin-karp/definition";

/** Every string-matching visualizer definition. Add new ones to this list. */
export const stringDefinitions = [
  naiveSearchDefinition,
  kmpSearchDefinition,
  rabinKarpDefinition,
];
