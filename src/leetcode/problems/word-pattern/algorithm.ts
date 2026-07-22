import type { Highlight, Step } from "@/core/types";

export interface WordPatternInput {
  pattern: string;
  s: string;
}

export interface Pairing {
  key: string;
  value: string;
}

export interface WordPatternData {
  pattern: string[];
  words: string[];
  i: number | null;
  mapping: Pairing[];
  result: boolean | null;
}

export type WordPatternStep = Step<WordPatternData>;

/**
 * A bijection between pattern letters and words: each letter maps to exactly one
 * word and vice versa. Track both directions; any inconsistency fails. `line`
 * indexes CODE.
 */
export function wordPatternSteps(input: WordPatternInput): WordPatternStep[] {
  const pattern = [...input.pattern];
  const words = input.s.split(" ");
  const steps: WordPatternStep[] = [];
  const p2w = new Map<string, string>();
  const w2p = new Map<string, string>();
  let result: boolean | null = null;

  const pairs = (): Pairing[] => [...p2w.entries()].map(([key, value]) => ({ key, value }));
  const snap = (o: Partial<WordPatternData>): WordPatternData => ({
    pattern: [...pattern],
    words: [...words],
    i: null,
    mapping: pairs(),
    result,
    ...o,
  });
  const push = (line: number, explanation: string, data: WordPatternData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  if (words.length !== pattern.length) {
    result = false;
    push(2, `Length mismatch: ${pattern.length} letters vs ${words.length} words — can't match.`, snap({ result: false }), []);
    return steps;
  }

  push(3, "Bind each pattern letter to a word bijectively.", snap({}), []);

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    const w = words[i];
    if (!p2w.has(c) && !w2p.has(w)) {
      p2w.set(c, w);
      w2p.set(w, c);
      push(7, `Bind '${c}' ↔ "${w}".`, snap({ i }), [{ ref: i, role: "sorted" }]);
    } else if (p2w.get(c) !== w || w2p.get(w) !== c) {
      result = false;
      push(9, `'${c}' or "${w}" already bound differently — pattern doesn't match.`, snap({ i, result: false }), [{ ref: i, role: "swapped" }]);
      return steps;
    } else {
      push(8, `'${c}' ↔ "${w}" is consistent.`, snap({ i }), [{ ref: i, role: "compared" }]);
    }
  }

  result = true;
  push(11, "Every letter matched its word consistently — the pattern fits.", snap({ result: true }), []);
  return steps;
}
