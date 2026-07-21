import type { Highlight, Step } from "@/core/types";

export interface DecodeData {
  chars: string[];
  i: number | null;
  counts: number[];
  strings: string[];
  cur: string;
  num: number;
}

export type DecodeStep = Step<DecodeData>;

const isDigit = (ch: string) => ch >= "0" && ch <= "9";

/**
 * Two stacks handle arbitrary nesting: on '[' we stash the repeat count and the
 * string built so far, then start fresh; on ']' we pop them and splice the
 * repeated inner string back onto the outer one. `line` indexes CODE.
 */
export function decodeSteps(s: string): DecodeStep[] {
  const chars = [...s];
  const steps: DecodeStep[] = [];
  const counts: number[] = [];
  const strings: string[] = [];
  let cur = "";
  let num = 0;

  const snap = (o: Partial<DecodeData>): DecodeData => ({
    chars: [...chars],
    i: null,
    counts: [...counts],
    strings: [...strings],
    cur,
    num,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: DecodeData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { depth: counts.length } });
  };

  push(2, "Use one stack for repeat counts and one for partial strings.", snap({}), []);

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const mark: Highlight[] = [{ ref: i, role: "current" }];
    if (isDigit(ch)) {
      num = num * 10 + Number(ch);
      push(4, `Digit '${ch}' — build the repeat count: ${num}.`, snap({ i, num }), mark);
    } else if (ch === "[") {
      counts.push(num);
      strings.push(cur);
      push(6, `'[' — push count ${num} and "${cur}", then reset for the inner block.`, snap({ i, counts: [...counts], strings: [...strings] }), mark);
      num = 0;
      cur = "";
    } else if (ch === "]") {
      const k = counts.pop()!;
      const prev = strings.pop()!;
      cur = prev + cur.repeat(k);
      push(9, `']' — repeat "${cur.slice(prev.length) || ""}" ${k}× and append to "${prev}" → "${cur}".`, snap({ i, cur }), mark);
    } else {
      cur += ch;
      push(10, `Letter '${ch}' — append to the current string: "${cur}".`, snap({ i, cur }), mark);
    }
  }

  push(12, `Decoded string: "${cur}".`, snap({ i: null }), []);
  return steps;
}
