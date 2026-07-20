import type { Highlight } from "@/core/types";
import { rowRef, cellRef, type HashInput, type HashStep } from "./types";

const SIZE = 7;

/**
 * Pure step generator for a hash table with separate chaining (bucket = value %
 * size). Inserts append to a bucket's chain; searches walk the chain comparing
 * each entry. `line` points into HASH_TABLE_CODE.
 */
export function hashTableSteps(input: HashInput): HashStep[] {
  const buckets: number[][] = Array.from({ length: SIZE }, () => []);
  const steps: HashStep[] = [];
  let entries = 0;
  let comparisons = 0;

  const snapshot = () => buckets.map((b) => [...b]);

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { size: SIZE, buckets: snapshot() },
      highlights,
      metrics: { entries, comparisons },
    });
  };

  push(0, `A hash table with ${SIZE} buckets; collisions are chained in a list.`, []);

  for (const action of input) {
    const i = action.value % SIZE;
    if (action.op === "insert") {
      push(1, `insert(${action.value}): hash → bucket ${i}.`, [
        { ref: rowRef(i), role: "active" },
      ]);
      buckets[i].push(action.value);
      entries++;
      push(2, `Append ${action.value} to bucket ${i}'s chain.`, [
        { ref: rowRef(i), role: "active" },
        { ref: cellRef(i, buckets[i].length - 1), role: "swapped" },
      ]);
    } else {
      push(5, `search(${action.value}): hash → bucket ${i}.`, [
        { ref: rowRef(i), role: "active" },
      ]);
      let found = false;
      for (let j = 0; j < buckets[i].length; j++) {
        comparisons++;
        push(6, `Compare with ${buckets[i][j]} in bucket ${i}.`, [
          { ref: rowRef(i), role: "active" },
          { ref: cellRef(i, j), role: "current" },
        ]);
        if (buckets[i][j] === action.value) {
          found = true;
          push(7, `Found ${action.value} in bucket ${i}.`, [
            { ref: rowRef(i), role: "active" },
            { ref: cellRef(i, j), role: "swapped" },
          ]);
          break;
        }
      }
      if (!found) {
        push(8, `${action.value} is not in bucket ${i} — not found.`, [
          { ref: rowRef(i), role: "active" },
        ]);
      }
    }
  }

  return steps;
}
