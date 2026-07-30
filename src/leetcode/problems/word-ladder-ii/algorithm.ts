import type { Step } from "@/core/types";

export interface WordLadderData {
  begin: string;
  end: string;
  /** BFS layers discovered so far (each a list of words) */
  layers: string[][];
  /** words in the frontier being expanded this step */
  frontier: string[];
  found: boolean;
  paths: string[][];
  answer: number | null;
}

export type WordLadderStep = Step<WordLadderData>;

const differ1 = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i] && ++diff > 1) return false;
  return diff === 1;
};

/**
 * Word Ladder II: find every shortest transformation from `begin` to `end`, changing one letter at a time
 * through dictionary words. BFS discovers layers and records each word's parents; backtracking from `end`
 * rebuilds all shortest paths. `line` indexes CODE.
 */
export function wordLadderSteps(begin: string, end: string, wordList: string[]): WordLadderStep[] {
  const steps: WordLadderStep[] = [];
  const dict = new Set(wordList);
  const layers: string[][] = [[begin]];

  const snap = (o: Partial<WordLadderData>): WordLadderData => ({
    begin,
    end,
    layers: layers.map((l) => [...l]),
    frontier: [],
    found: false,
    paths: [],
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<WordLadderData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (!dict.has(end)) {
    push(2, `"${end}" is not in the dictionary — no transformation exists.`, { answer: 0 });
    return steps;
  }

  let frontier = new Set([begin]);
  const parents = new Map<string, Set<string>>();
  const visited = new Set([begin]);
  let found = false;

  push(3, `Start BFS from "${begin}"; target is "${end}".`, { frontier: [begin] });

  while (frontier.size && !found) {
    const next = new Set<string>();
    for (const w of frontier) {
      for (const c of dict) {
        if (!visited.has(c) && differ1(w, c)) {
          if (!parents.has(c)) parents.set(c, new Set());
          parents.get(c)!.add(w);
          next.add(c);
          if (c === end) found = true;
        }
      }
    }
    if (next.size === 0) break;
    next.forEach((v) => visited.add(v));
    layers.push([...next]);
    frontier = next;
    push(18, `Next layer: ${[...next].map((w) => `"${w}"`).join(", ")}.${found ? " Reached the target!" : ""}`, {
      frontier: [...next],
      found,
    });
  }

  const paths: string[][] = [];
  if (found) {
    const dfs = (word: string, tail: string[]) => {
      if (word === begin) {
        paths.push([begin, ...tail]);
        return;
      }
      for (const p of parents.get(word) ?? []) dfs(p, [word, ...tail]);
    };
    dfs(end, []);
    paths.sort((a, b) => a.join().localeCompare(b.join()));
  }

  push(20, found ? `Backtracked ${paths.length} shortest path(s) of length ${paths[0].length}.` : `No path to "${end}".`, {
    found,
    paths,
    answer: paths.length,
  });
  return steps;
}
