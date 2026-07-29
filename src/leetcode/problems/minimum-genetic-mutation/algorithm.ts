import type { Step } from "@/core/types";

export interface GeneData {
  start: string;
  end: string;
  bank: string[];
  /** genes in the current BFS frontier */
  queue: string[];
  /** gene being expanded */
  cur: string | null;
  /** newly discovered valid mutation */
  found: string | null;
  seen: string[];
  steps: number;
  answer: number | null;
}

export type GeneStep = Step<GeneData>;

const CHARS = ["A", "C", "G", "T"];

/**
 * Each valid single-character mutation is an edge, so the fewest mutations is a shortest path — plain
 * BFS by levels. Every gene in the frontier tries all 8×3 one-character changes; those in the bank
 * and unseen form the next level. `line` indexes CODE.
 */
export function geneSteps(start: string, end: string, bank: string[]): GeneStep[] {
  const steps: GeneStep[] = [];
  const set = new Set(bank);
  let level = [start];
  let dist = 0;
  const seen = new Set([start]);

  const snap = (o: Partial<GeneData>): GeneData => ({ start, end, bank, queue: [...level], cur: null, found: null, seen: [...seen], steps: dist, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GeneData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (!set.has(end)) {
    push(2, "Target gene is not in the bank → unreachable (-1).", { answer: -1 });
    return steps;
  }

  push(3, `BFS from ${start}; each edge is a single-character mutation.`);

  while (level.length) {
    const next: string[] = [];
    for (const gene of level) {
      if (gene === end) {
        push(8, `Reached ${end} after ${dist} mutation(s).`, { cur: gene, answer: dist });
        return steps;
      }
      push(7, `Expand ${gene} (level ${dist}).`, { cur: gene });
      for (let i = 0; i < gene.length; i++) {
        for (const c of CHARS) {
          if (c === gene[i]) continue;
          const m = gene.slice(0, i) + c + gene.slice(i + 1);
          if (set.has(m) && !seen.has(m)) {
            seen.add(m);
            next.push(m);
            push(11, `Valid mutation ${m} joins the next level.`, { cur: gene, found: m });
          }
        }
      }
    }
    level = next;
    dist++;
    if (level.length) push(14, `Advance to level ${dist}.`);
  }

  push(16, "Exhausted the bank without reaching the target → -1.", { answer: -1 });
  return steps;
}
