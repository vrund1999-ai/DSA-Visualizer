import type { Step } from "@/core/types";

export interface WordSearch2Data {
  board: string[][];
  /** cells on the current DFS path, "r,c" */
  path: string[];
  cur: [number, number] | null;
  prefix: string;
  found: string[];
  justFound: string | null;
  answer: string[] | null;
}

export type WordSearch2Step = Step<WordSearch2Data>;

interface TrieNode {
  children: Map<string, TrieNode>;
  word: string | null;
}

const MAX_STEPS = 500;

/**
 * Searching each word separately rewalks the board repeatedly; a trie of all words lets one DFS follow
 * every candidate prefix at once. From each cell the search descends only while the trie still has a
 * matching child, marking a word complete at trie nodes flagged as words. `line` indexes CODE.
 */
export function wordSearch2Steps(inputBoard: string[][], words: string[]): WordSearch2Step[] {
  const steps: WordSearch2Step[] = [];
  const board = inputBoard.map((r) => [...r]);
  const R = board.length;
  const C = board[0].length;

  const root: TrieNode = { children: new Map(), word: null };
  for (const w of words) {
    let node = root;
    for (const ch of w) {
      if (!node.children.has(ch)) node.children.set(ch, { children: new Map(), word: null });
      node = node.children.get(ch)!;
    }
    node.word = w;
  }

  const found: string[] = [];
  const path: string[] = [];

  const snap = (o: Partial<WordSearch2Data>): WordSearch2Data => ({ board: board.map((r) => [...r]), path: [...path], cur: null, prefix: "", found: [...found], justFound: null, answer: null, ...o });
  // The cap only limits how many intermediate frames we record; the DFS always runs to completion.
  const push = (line: number, explanation: string, o: Partial<WordSearch2Data> = {}) => {
    if (steps.length >= MAX_STEPS) return;
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Build a trie of ${words.length} word(s); DFS every cell following matching prefixes.`);

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = Array.from({ length: R }, () => new Array(C).fill(false));

  function dfs(r: number, c: number, node: TrieNode, prefix: string) {
    const ch = board[r][c];
    const next = node.children.get(ch);
    if (!next) return;
    const word = prefix + ch;
    visited[r][c] = true;
    path.push(`${r},${c}`);
    let justFound: string | null = null;
    if (next.word && !found.includes(next.word)) {
      found.push(next.word);
      justFound = next.word;
    }
    push(justFound ? 7 : 5, justFound ? `Completed word "${justFound}".` : `Extend prefix "${word}" at (${r},${c}).`, { cur: [r, c], prefix: word, justFound });
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < R && nc < C && !visited[nr][nc]) dfs(nr, nc, next, word);
    }
    visited[r][c] = false;
    path.pop();
  }

  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) dfs(r, c, root, "");

  // Always emit the final answer frame, even if intermediate frames were capped.
  steps.push({ id: steps.length, line: 14, explanation: `Found ${found.length} word(s): ${found.join(", ") || "none"}.`, data: snap({ answer: [...found] }), highlights: [] });
  return steps;
}
