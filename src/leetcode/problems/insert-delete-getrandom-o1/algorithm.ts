import type { Step } from "@/core/types";

export interface RandomSetOp {
  op: "insert" | "remove" | "getRandom";
  arg?: number;
}

export interface IdxEntry {
  value: number;
  index: number;
}

export interface RandomSetData {
  arr: number[];
  idx: IdxEntry[];
  op: string;
  result: string | null;
  swapped: number | null;
}

export type RandomSetStep = Step<RandomSetData>;

/**
 * An array gives O(1) random access; a value→index map gives O(1) lookup. Remove
 * is O(1) by swapping the target with the last element (updating the map) then
 * popping, avoiding an O(n) shift. `line` indexes CODE.
 */
export function randomSetSteps(ops: RandomSetOp[]): RandomSetStep[] {
  const steps: RandomSetStep[] = [];
  const arr: number[] = [];
  const idx = new Map<number, number>();

  const entries = (): IdxEntry[] => [...idx.entries()].map(([value, index]) => ({ value, index }));
  const push = (line: number, op: string, result: string | null, swapped: number | null = null) => {
    steps.push({ id: steps.length, line, explanation: result ? `${op} → ${result}` : op, data: { arr: [...arr], idx: entries(), op, result, swapped }, highlights: [] });
  };

  push(1, "new RandomizedSet()", null);

  for (const { op, arg } of ops) {
    if (op === "insert" && arg !== undefined) {
      if (idx.has(arg)) {
        push(3, `insert(${arg})`, "false (already present)");
      } else {
        idx.set(arg, arr.length);
        arr.push(arg);
        push(4, `insert(${arg})`, "true");
      }
    } else if (op === "remove" && arg !== undefined) {
      if (!idx.has(arg)) {
        push(8, `remove(${arg})`, "false (absent)");
      } else {
        const i = idx.get(arg)!;
        const last = arr[arr.length - 1];
        arr[i] = last;
        idx.set(last, i);
        arr.pop();
        idx.delete(arg);
        push(11, `remove(${arg})`, "true", i);
      }
    } else if (op === "getRandom") {
      const v = arr.length ? arr[0] : null;
      push(14, "getRandom()", v === null ? "empty" : `${v} (any element, O(1))`);
    }
  }

  return steps;
}
