import type { Step } from "@/core/types";

export type WordOp = ["add", string] | ["search", string];

interface TrieNode {
  children: Map<string, TrieNode>;
  end: boolean;
  id: number;
}

export interface TrieRow {
  id: number;
  char: string;
  depth: number;
  end: boolean;
}

export interface WordDictData {
  /** flattened trie for rendering (pre-order) */
  trie: TrieRow[];
  op: string;
  /** node ids on the successful search/add path */
  path: number[];
  result: boolean | null;
  answer: (boolean | null)[] | null;
}

export type WordDictStep = Step<WordDictData>;

/**
 * Words share prefixes in a trie, so adding walks/creates one node per character and marks the last
 * as a word end. A search with '.' branches into every child at that position (a small DFS), while a
 * literal character follows just its edge. `line` indexes CODE.
 */
export function wordDictSteps(ops: WordOp[]): WordDictStep[] {
  const steps: WordDictStep[] = [];
  let counter = 1;
  const root: TrieNode = { children: new Map(), end: false, id: 0 };
  const results: (boolean | null)[] = [];

  const flatten = (): TrieRow[] => {
    const rows: TrieRow[] = [];
    const walk = (node: TrieNode, char: string, depth: number) => {
      if (depth > 0) rows.push({ id: node.id, char, depth, end: node.end });
      for (const [c, child] of [...node.children.entries()].sort()) walk(child, c, depth + 1);
    };
    walk(root, "", 0);
    return rows;
  };

  const push = (line: number, explanation: string, op: string, path: number[], result: boolean | null) => {
    steps.push({ id: steps.length, line, explanation, data: { trie: flatten(), op, path, result, answer: null }, highlights: [] });
  };

  push(1, "Trie stores words by shared prefix; '.' in search matches any child.", "init", [], null);

  const searchPath: number[] = [];
  const search = (word: string, node: TrieNode, i: number): boolean => {
    if (i === word.length) return node.end;
    const ch = word[i];
    if (ch === ".") {
      for (const child of node.children.values()) {
        searchPath.push(child.id);
        if (search(word, child, i + 1)) return true;
        searchPath.pop();
      }
      return false;
    }
    const child = node.children.get(ch);
    if (!child) return false;
    searchPath.push(child.id);
    return search(word, child, i + 1);
  };

  for (const op of ops) {
    if (op[0] === "add") {
      const word = op[1];
      let node = root;
      const path: number[] = [];
      for (const ch of word) {
        if (!node.children.has(ch)) node.children.set(ch, { children: new Map(), end: false, id: counter++ });
        node = node.children.get(ch)!;
        path.push(node.id);
      }
      node.end = true;
      results.push(null);
      push(6, `addWord("${word}") → insert path and mark the end.`, `addWord("${word}")`, path, null);
    } else {
      const word = op[1];
      searchPath.length = 0;
      const result = search(word, root, 0);
      results.push(result);
      push(9, `search("${word}") → ${result}.`, `search("${word}")`, [...searchPath], result);
    }
  }

  steps.push({ id: steps.length, line: 16, explanation: `Processed ${ops.length} operations.`, data: { trie: flatten(), op: "done", path: [], result: null, answer: results }, highlights: [] });
  return steps;
}
