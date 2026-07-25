import type { Step } from "@/core/types";

export interface ColTitleData {
  n: number;
  /** running column number as we divide it down */
  cur: number;
  title: string;
  /** letter just prepended, for highlighting */
  lastLetter: string | null;
  answer: string | null;
}

export type ColTitleStep = Step<ColTitleData>;

/**
 * Excel columns are bijective base-26 (A..Z, then AA..) with no zero digit, so each step
 * decrements n before taking n % 26 to map into 0..25 → 'A'..'Z', prepends that letter,
 * and divides n by 26. `line` indexes CODE.
 */
export function colTitleSteps(input: number): ColTitleStep[] {
  const steps: ColTitleStep[] = [];
  let n = input;
  let title = "";

  const snap = (o: Partial<ColTitleData>): ColTitleData => ({ n: input, cur: n, title, lastLetter: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ColTitleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Convert ${input} to a bijective base-26 column title.`);

  while (n > 0) {
    n--;
    const r = n % 26;
    const letter = String.fromCharCode(65 + r);
    title = letter + title;
    push(5, `Decrement to ${n}; ${n} % 26 = ${r} → '${letter}'. Title = "${title}".`, { cur: n, lastLetter: letter });
    n = Math.floor(n / 26);
    push(6, `n = floor(${n * 26 + r} / 26) = ${n}.`, { cur: n, lastLetter: letter });
  }

  push(8, `Column title: "${title}".`, { answer: title });
  return steps;
}
