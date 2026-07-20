import type { Step } from "@/core/types";

export type StackOp = { op: "push"; value: number } | { op: "pop" };
export type StackInput = StackOp[];

/** items[items.length - 1] is the top of the stack. */
export interface StackData {
  items: number[];
}

export type StackOptions = Record<string, never>;
export type StackStep = Step<StackData>;
