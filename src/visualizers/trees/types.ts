import type { Step } from "@/core/types";

/** A node as the renderer sees it, with layout coordinates. */
export interface TreeNodeSnapshot {
  id: number;
  value: number;
  /** vertical level (root = 0). */
  depth: number;
  /** in-order index, used as the horizontal position. */
  pos: number;
  /** id of the parent node, or null for the root. */
  parent: number | null;
}

export interface TreeData {
  nodes: TreeNodeSnapshot[];
}

/** Values to insert, in order. */
export type TreeInput = number[];

export interface TreeOptions {
  traversal?: "inorder" | "preorder" | "postorder" | "bfs";
}

export type TreeStep = Step<TreeData>;
