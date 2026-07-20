import type { VisualizerDefinition } from "@/core/types";
import type { HashData, HashInput, HashOp, HashOptions } from "./types";
import { HashTableRenderer } from "./HashTableRenderer";
import { hashTableSteps } from "./algorithm";
import { HASH_TABLE_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/** Insert a handful of values (guaranteeing a collision or two), then search. */
function makeHashInput(): HashInput {
  const ops: HashOp[] = [];
  const inserted: number[] = [];
  for (let i = 0; i < 7; i++) {
    const v = randInt(1, 60);
    inserted.push(v);
    ops.push({ op: "insert", value: v });
  }
  // one search that hits, one that likely misses
  ops.push({ op: "search", value: inserted[randInt(0, inserted.length - 1)] });
  ops.push({ op: "search", value: randInt(61, 99) });
  return ops;
}

export const hashTableDefinition: VisualizerDefinition<
  HashInput,
  HashData,
  HashOptions
> = {
  id: "hash-table",
  title: "Hash Table (Chaining)",
  category: "linear",
  summary: "Maps keys to buckets with a hash function; collisions chain in a linked list.",
  tags: ["hash table", "chaining"],
  code: HASH_TABLE_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(1)",
    timeAverage: "O(1)",
    timeWorst: "O(n)",
    space: "O(n)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeHashInput,
  defaultOptions: {},
  buildSteps: (input) => hashTableSteps(input),
  Renderer: HashTableRenderer,
};
