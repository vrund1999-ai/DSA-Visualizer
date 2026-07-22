import type { Step } from "@/core/types";

export interface TrieOp {
  op: "insert" | "search" | "startsWith";
  arg: string;
}

export interface TrieNodeView {
  id: number;
  parent: number | null;
  ch: string;
  end: boolean;
}

export interface TrieData {
  nodes: TrieNodeView[];
  op: string;
  path: number[];
  result: boolean | null;
}

export type TrieStep = Step<TrieData>;

interface Node {
  id: number;
  ch: string;
  end: boolean;
  parent: number | null;
  children: Map<string, Node>;
}

/**
 * A trie stores words along shared character paths from the root, so common
 * prefixes are stored once. insert walks/creates the path and flags the last
 * node; search/startsWith just walk it. `line` indexes CODE.
 */
export function trieSteps(ops: TrieOp[]): TrieStep[] {
  const steps: TrieStep[] = [];
  let nextId = 1;
  const root: Node = { id: 0, ch: "root", end: false, parent: null, children: new Map() };

  const flatten = (): TrieNodeView[] => {
    const out: TrieNodeView[] = [];
    const walk = (n: Node) => {
      out.push({ id: n.id, parent: n.parent, ch: n.ch, end: n.end });
      for (const c of n.children.values()) walk(c);
    };
    walk(root);
    return out;
  };

  const push = (line: number, op: string, explanation: string, path: number[], result: boolean | null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { nodes: flatten(), op, path: [...path], result },
      highlights: [],
    });
  };

  const find = (s: string): { path: number[]; node: Node | null } => {
    let node: Node | null = root;
    const path = [0];
    for (const ch of s) {
      const child: Node | undefined = node!.children.get(ch);
      if (!child) return { path, node: null };
      node = child;
      path.push(node.id);
    }
    return { path, node };
  };

  for (const { op, arg } of ops) {
    if (op === "insert") {
      let node = root;
      const path = [0];
      for (const ch of arg) {
        let child = node.children.get(ch);
        if (!child) {
          child = { id: nextId++, ch, end: false, parent: node.id, children: new Map() };
          node.children.set(ch, child);
        }
        node = child;
        path.push(node.id);
      }
      node.end = true;
      push(6, `insert("${arg}")`, `Insert "${arg}" — walk/create its path and mark the end.`, path, null);
    } else if (op === "search") {
      const { path, node } = find(arg);
      const result = node?.end === true;
      push(8, `search("${arg}")`, `search("${arg}") → ${result} (path exists${node ? "" : " no"}, end=${!!node?.end}).`, path, result);
    } else {
      const { path, node } = find(arg);
      const result = node !== null;
      push(9, `startsWith("${arg}")`, `startsWith("${arg}") → ${result}.`, path, result);
    }
  }

  return steps;
}
