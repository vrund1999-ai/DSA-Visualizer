import type { Step } from "@/core/types";

export type Nested = number | Nested[];

export interface NestedIteratorData {
  /** the original nested list as a display string */
  nested: string;
  /** the flattened values */
  flat: number[];
  /** index being flattened (during build) or consumed (during iteration) */
  cursor: number | null;
  phase: "flatten" | "iterate";
  /** values emitted by next() so far */
  output: number[];
}

export type NestedIteratorStep = Step<NestedIteratorData>;

/**
 * Flatten Nested List Iterator: a depth-first pass collects every integer (descending into sub-lists) into a
 * flat array, then next()/hasNext() walk that array. `line` indexes CODE.
 */
export function nestedIteratorSteps(nestedList: Nested[]): NestedIteratorStep[] {
  const steps: NestedIteratorStep[] = [];
  const flat: number[] = [];
  const output: number[] = [];
  const nested = JSON.stringify(nestedList);

  const snap = (o: Partial<NestedIteratorData>): NestedIteratorData => ({
    nested,
    flat: [...flat],
    cursor: null,
    phase: "flatten",
    output: [...output],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<NestedIteratorData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Depth-first flatten the nested list into a flat array.`);

  const dfs = (list: Nested[]) => {
    for (const item of list) {
      if (typeof item === "number") {
        flat.push(item);
        push(6, `Push integer ${item}.`, { cursor: flat.length - 1 });
      } else {
        push(7, `Descend into a sub-list.`);
        dfs(item);
      }
    }
  };
  dfs(nestedList);

  push(13, `Flattened to [${flat.join(", ")}]; iterate with next().`, { phase: "iterate" });

  for (let i = 0; i < flat.length; i++) {
    output.push(flat[i]);
    push(14, `next() → ${flat[i]}.`, { phase: "iterate", cursor: i });
  }

  return steps;
}
