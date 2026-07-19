import { bstInsertDefinition } from "./bst-insert/definition";
import {
  bstInorderDefinition,
  bstBfsDefinition,
} from "./bst-traversal/definition";

/** Every tree visualizer definition. Add new tree algorithms to this list. */
export const treeDefinitions = [
  bstInsertDefinition,
  bstInorderDefinition,
  bstBfsDefinition,
];
