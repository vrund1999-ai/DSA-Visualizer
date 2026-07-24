import type { Step } from "@/core/types";

export interface SerializeData {
  heap: (number | null)[];
  /** heap index currently emitted */
  current: number | null;
  /** tokens produced so far */
  tokens: string[];
  /** heap indices already emitted (non-null nodes) */
  visited: number[];
  done: boolean;
}

export type SerializeStep = Step<SerializeData>;

/**
 * Preorder serialization: emit the node value, recurse left, recurse right, using a
 * sentinel '#' for null children so the exact shape can be rebuilt. `line` indexes
 * CODE.
 */
export function serializeSteps(heap: (number | null)[]): SerializeStep[] {
  const steps: SerializeStep[] = [];
  const tokens: string[] = [];
  const visited: number[] = [];

  const snap = (o: Partial<SerializeData>): SerializeData => ({ heap: [...heap], current: null, tokens: [...tokens], visited: [...visited], done: false, ...o });
  const push = (line: number, explanation: string, data: SerializeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Serialize with a preorder walk; '#' marks a null child.", snap({}));

  const dfs = (i: number) => {
    if (i >= heap.length || heap[i] === null) {
      tokens.push("#");
      push(3, "Null child → emit '#'.", snap({}));
      return;
    }
    tokens.push(String(heap[i]));
    visited.push(i);
    push(4, `Emit ${heap[i]} (preorder: root before children).`, snap({ current: i }));
    dfs(2 * i + 1);
    dfs(2 * i + 2);
  };
  dfs(0);

  push(8, `Serialized: "${tokens.join(",")}".`, snap({ done: true }));
  return steps;
}
