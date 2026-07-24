import type { Step } from "@/core/types";

export interface WordLadderData {
  begin: string;
  end: string;
  words: string[];
  /** BFS level number (1-based) */
  level: number;
  /** words in the current frontier */
  frontier: string[];
  /** word currently being expanded */
  current: string | null;
  /** words already discovered */
  seen: string[];
  answer: number | null;
}

export type WordLadderStep = Step<WordLadderData>;

const neighbors = (word: string, dict: Set<string>): string[] => {
  const out: string[] = [];
  for (let i = 0; i < word.length; i++) {
    for (let c = 97; c <= 122; c++) {
      const ch = String.fromCharCode(c);
      if (ch === word[i]) continue;
      const w = word.slice(0, i) + ch + word.slice(i + 1);
      if (dict.has(w)) out.push(w);
    }
  }
  return out;
};

/**
 * Shortest word-transformation length via BFS: each level flips exactly one letter,
 * expanding all frontier words to their in-dictionary neighbours. The level on which
 * `end` appears is the answer. `line` indexes CODE.
 */
export function wordLadderSteps(begin: string, end: string, wordList: string[]): WordLadderStep[] {
  const steps: WordLadderStep[] = [];
  const dict = new Set(wordList);
  const words = [begin, ...wordList.filter((w) => w !== begin)];
  let level = 1;
  let queue = [begin];
  const seen = new Set([begin]);

  const snap = (o: Partial<WordLadderData>): WordLadderData => ({ begin, end, words, level, frontier: [...queue], current: null, seen: [...seen], answer: null, ...o });
  const push = (line: number, explanation: string, data: WordLadderData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (!dict.has(end)) {
    push(2, `"${end}" is not in the word list → 0.`, snap({ answer: 0 }));
    return steps;
  }

  push(3, `BFS from "${begin}"; each step changes one letter.`, snap({}));

  while (queue.length) {
    const next: string[] = [];
    for (const word of queue) {
      if (word === end) {
        push(8, `Reached "${end}" at level ${level} → answer ${level}.`, snap({ current: word, answer: level }));
        return steps;
      }
      const nb = neighbors(word, dict).filter((w) => !seen.has(w));
      for (const w of nb) {
        seen.add(w);
        next.push(w);
      }
      push(9, `Expand "${word}": ${nb.length ? nb.join(", ") : "no new neighbours"}.`, snap({ current: word }));
    }
    queue = next;
    level++;
    if (queue.length) push(13, `Advance to level ${level} (${queue.length} word(s)).`, snap({}));
  }

  push(15, "Frontier exhausted — no transformation exists → 0.", snap({ answer: 0 }));
  return steps;
}
