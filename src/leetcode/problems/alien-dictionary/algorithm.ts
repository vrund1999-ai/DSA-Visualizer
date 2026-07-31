import type { Step } from "@/core/types";

export interface AlienData {
  chars: string[];
  edges: [string, string][];
  indeg: Record<string, number>;
  order: string[];
  /** char removed from the queue this step */
  active: string | null;
  queue: string[];
  answer: string | null;
  invalid: boolean;
}

export type AlienStep = Step<AlienData>;

/**
 * Alien Dictionary: adjacent words give ordering constraints (their first differing letter → an edge). A
 * topological sort (Kahn's algorithm) then produces a valid character order; a leftover node means a cycle,
 * and a longer word before its own prefix is invalid. `line` indexes CODE.
 */
export function alienSteps(words: string[]): AlienStep[] {
  const steps: AlienStep[] = [];
  const adj = new Map<string, Set<string>>();
  const indeg = new Map<string, number>();
  for (const w of words)
    for (const c of w) {
      if (!adj.has(c)) adj.set(c, new Set());
      if (!indeg.has(c)) indeg.set(c, 0);
    }
  const chars = [...indeg.keys()].sort();
  const edges: [string, string][] = [];

  const snap = (o: Partial<AlienData>): AlienData => ({
    chars,
    edges: [...edges],
    indeg: Object.fromEntries(indeg),
    order: [],
    active: null,
    queue: [],
    answer: null,
    invalid: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<AlienData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  for (let i = 1; i < words.length; i++) {
    const a = words[i - 1];
    const b = words[i];
    if (a.startsWith(b) && a.length > b.length) {
      push(6, `"${a}" before its prefix "${b}" is invalid → "".`, { answer: "", invalid: true });
      return steps;
    }
    for (let j = 0; j < Math.min(a.length, b.length); j++) {
      if (a[j] !== b[j]) {
        if (!adj.get(a[j])!.has(b[j])) {
          adj.get(a[j])!.add(b[j]);
          indeg.set(b[j], indeg.get(b[j])! + 1);
          edges.push([a[j], b[j]]);
        }
        break;
      }
    }
  }
  push(15, `Built ${edges.length} ordering edge(s) from adjacent words.`);

  const queue = chars.filter((c) => indeg.get(c) === 0);
  const order: string[] = [];
  push(17, `Queue characters with no prerequisites: [${queue.join(", ")}].`, { queue: [...queue] });

  while (queue.length) {
    const c = queue.shift()!;
    order.push(c);
    for (const n of adj.get(c)!) {
      indeg.set(n, indeg.get(n)! - 1);
      if (indeg.get(n) === 0) queue.push(n);
    }
    push(19, `Remove ${c} → order "${order.join("")}".`, { active: c, order: [...order], queue: [...queue] });
  }

  const answer = order.length === chars.length ? order.join("") : "";
  push(23, order.length === chars.length ? `Valid order: "${answer}".` : `Cycle detected → "".`, {
    order: [...order],
    answer,
    invalid: answer === "",
  });
  return steps;
}
