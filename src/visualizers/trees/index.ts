import { bstInsertDefinition } from "./bst-insert/definition";
import {
  bstInorderDefinition,
  bstPreorderDefinition,
  bstPostorderDefinition,
  bstBfsDefinition,
} from "./bst-traversal/definition";
import { bstDeleteDefinition } from "./bst-delete/definition";

/** Every tree visualizer definition. Add new tree algorithms to this list. */
export const treeDefinitions = [
  bstInsertDefinition,
  bstDeleteDefinition,
  bstInorderDefinition,
  bstPreorderDefinition,
  bstPostorderDefinition,
  bstBfsDefinition,
];
