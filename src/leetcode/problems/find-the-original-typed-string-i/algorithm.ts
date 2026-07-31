import type { Step } from "@/core/types";

export interface TypedStringData {
  word: string;
  scan: number | null;
  /** indices where word[i] == word[i-1] */
  repeats: number[];
  count: number;
  answer: number | null;
}

export type TypedStringStep = Step<TypedStringData>;

/**
 * Find the Original Typed String I: Alice may have held one key too long, at most once. Every position where
 * a character repeats its predecessor is a candidate long-press that could be shortened, so the number of
 * possible originals is 1 (no error) plus the count of such adjacent-equal positions. `line` indexes CODE.
 */
export function typedStringSteps(word: string): TypedStringStep[] {
  const steps: TypedStringStep[] = [];
  const repeats: number[] = [];
  let count = 1;

  const snap = (o: Partial<TypedStringData>): TypedStringData => ({
    word,
    scan: null,
    repeats: [...repeats],
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TypedStringData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Start at 1 (the typed word itself); each repeat adds a possibility.`);

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      repeats.push(i);
      count++;
      push(5, `word[${i}] = '${word[i]}' repeats → count ${count}.`, { scan: i });
    } else {
      push(4, `word[${i}] = '${word[i]}' differs from '${word[i - 1]}'.`, { scan: i });
    }
  }

  push(7, `Possible original strings = ${count}.`, { answer: count });
  return steps;
}
