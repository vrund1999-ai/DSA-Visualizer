import type { Step } from "@/core/types";

export interface ComplementData {
  n: number;
  /** bit width used */
  width: number;
  mask: number | null;
  answer: number | null;
}

export type ComplementStep = Step<ComplementData>;

/**
 * The complement flips every bit within the number's own bit-width. Build an all-ones
 * mask the same width as n, then XOR — this flips exactly those bits. `line` indexes
 * CODE.
 */
export function complementSteps(n: number): ComplementStep[] {
  const steps: ComplementStep[] = [];
  const width = n === 0 ? 1 : n.toString(2).length;

  const snap = (o: Partial<ComplementData>): ComplementData => ({ n, width, mask: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: ComplementData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (n === 0) {
    push(1, "0 has complement 1.", snap({ answer: 1 }));
    return steps;
  }

  push(2, `Build an all-ones mask matching ${n}'s bit width.`, snap({}));

  let mask = 1;
  while (mask < n) {
    mask = (mask << 1) | 1;
    push(4, `Extend mask → ${mask} (binary ${mask.toString(2)}).`, snap({ mask }));
  }

  const answer = n ^ mask;
  push(6, `${n} ^ ${mask} = ${answer}.`, snap({ mask, answer }));
  return steps;
}
