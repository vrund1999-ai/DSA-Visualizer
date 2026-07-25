import type { Step } from "@/core/types";

export interface JustifyData {
  words: string[];
  maxWidth: number;
  /** indices of words chosen for the line currently being built */
  lineWords: number[];
  /** completed justified lines so far */
  lines: string[];
  /** the line just produced (for highlighting), or null */
  justLine: string | null;
  kind: "left" | "spread" | null;
  answer: string[] | null;
}

export type JustifyStep = Step<JustifyData>;

const leftJustify = (words: string[], i: number, j: number, maxWidth: number): string => {
  const line = words.slice(i, j).join(" ");
  return line + " ".repeat(maxWidth - line.length);
};

const spread = (words: string[], i: number, j: number, len: number, maxWidth: number): string => {
  const gaps = j - i - 1;
  const totalSpaces = maxWidth - len;
  const base = Math.floor(totalSpaces / gaps);
  const extra = totalSpaces % gaps;
  let line = words[i];
  for (let k = 1; k < j - i; k++) {
    const spaces = base + (k - 1 < extra ? 1 : 0);
    line += " ".repeat(spaces) + words[i + k];
  }
  return line;
};

/**
 * Greedily pack as many words as fit (each needs at least one trailing space before the next),
 * then justify: the last line and single-word lines are left-aligned and right-padded, while
 * full lines spread the leftover spaces as evenly as possible with extras going to the leftmost
 * gaps. `line` indexes CODE.
 */
export function justifySteps(words: string[], maxWidth: number): JustifyStep[] {
  const steps: JustifyStep[] = [];
  const lines: string[] = [];

  const snap = (o: Partial<JustifyData>): JustifyData => ({ words, maxWidth, lineWords: [], lines: [...lines], justLine: null, kind: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<JustifyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Pack words into lines of width ${maxWidth}, then justify each.`);

  for (let i = 0; i < words.length; ) {
    let j = i;
    let len = 0;
    while (j < words.length && len + words[j].length + (j - i) <= maxWidth) len += words[j++].length;
    const lineWords = Array.from({ length: j - i }, (_, k) => i + k);
    const gaps = j - i - 1;
    const isLast = j === words.length;
    push(7, `Line packs ${j - i} word(s): ${lineWords.map((k) => words[k]).join(" ")}.`, { lineWords });

    let produced: string;
    if (gaps === 0 || isLast) {
      produced = leftJustify(words, i, j, maxWidth);
      lines.push(produced);
      push(10, `${isLast ? "Last line" : "Single word"} → left-justify and right-pad.`, { lineWords, justLine: produced, kind: "left" });
    } else {
      produced = spread(words, i, j, len, maxWidth);
      lines.push(produced);
      push(12, `Full line → spread ${maxWidth - len} spaces across ${gaps} gap(s).`, { lineWords, justLine: produced, kind: "spread" });
    }
    i = j;
  }

  push(15, `Produced ${lines.length} justified lines.`, { answer: [...lines] });
  return steps;
}
