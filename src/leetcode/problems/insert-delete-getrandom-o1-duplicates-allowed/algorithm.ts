import type { Step } from "@/core/types";

export type Op = ["insert" | "remove" | "getRandom", number?];

export interface RandomCollData {
  list: number[];
  /** value -> sorted index list */
  index: [number, number[]][];
  op: string;
  /** list positions touched by this op */
  touched: number[];
  result: string | null;
  answer: string[] | null;
}

export type RandomCollStep = Step<RandomCollData>;

/**
 * A growable array gives O(1) random access; a map from value to the set of positions it occupies
 * gives O(1) insert and remove. Removal swaps the victim with the last element (so no gap forms)
 * and repairs the moved element's stored index. `line` indexes CODE.
 */
export function randomCollSteps(ops: Op[]): RandomCollStep[] {
  const steps: RandomCollStep[] = [];
  const list: number[] = [];
  const idx = new Map<number, Set<number>>();
  const results: string[] = [];

  const indexPairs = (): [number, number[]][] => [...idx.entries()].filter(([, s]) => s.size).map(([v, s]) => [v, [...s].sort((a, b) => a - b)]);
  const push = (line: number, explanation: string, op: string, touched: number[], result: string | null) => {
    steps.push({ id: steps.length, line, explanation, data: { list: [...list], index: indexPairs(), op, touched, result, answer: null }, highlights: [] });
  };

  push(1, "Array + map(value → index set): O(1) insert, remove, and random access.", "init", [], null);

  for (const [kind, v] of ops) {
    if (kind === "insert") {
      if (!idx.has(v!)) idx.set(v!, new Set());
      const pos = list.length;
      idx.get(v!)!.add(pos);
      list.push(v!);
      const wasNew = idx.get(v!)!.size === 1;
      results.push(String(wasNew));
      push(5, `insert(${v}) at index ${pos} → returns ${wasNew} (${wasNew ? "value was new" : "duplicate"}).`, `insert(${v})`, [pos], String(wasNew));
    } else if (kind === "remove") {
      const set = idx.get(v!);
      if (!set || set.size === 0) {
        results.push("false");
        push(9, `remove(${v}): not present → returns false.`, `remove(${v})`, [], "false");
        continue;
      }
      const i = set.values().next().value as number;
      set.delete(i);
      const last = list.length - 1;
      const lv = list[last];
      if (i !== last) {
        list[i] = lv;
        idx.get(lv)!.delete(last);
        idx.get(lv)!.add(i);
      }
      list.pop();
      if (set.size === 0) idx.delete(v!);
      results.push("true");
      push(13, `remove(${v}): overwrite index ${i} with last value ${lv}, pop tail → returns true.`, `remove(${v})`, i !== last ? [i] : [], "true");
    } else {
      results.push("~");
      push(18, `getRandom(): uniformly returns any of the ${list.length} stored values.`, "getRandom()", list.map((_, i) => i), "uniform");
    }
  }

  push(19, `Processed ${ops.length} operations.`, "done", [], null);
  steps[steps.length - 1].data.answer = results;
  return steps;
}
