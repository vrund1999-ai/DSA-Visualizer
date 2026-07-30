import type { Step } from "@/core/types";

export interface HappyData {
  cnt: Record<string, number>;
  res: string;
  /** the letter just appended */
  pick: string | null;
  answer: string | null;
}

export type HappyStep = Step<HappyData>;

/**
 * To use up the most letters, always append whichever letter has the most remaining — unless doing so
 * would create three in a row, in which case take the next-most-available. Repeating until no legal move
 * remains yields the longest "happy" string. `line` indexes CODE.
 */
export function happySteps(a: number, b: number, c: number): HappyStep[] {
  const steps: HappyStep[] = [];
  const cnt: Record<string, number> = { a, b, c };
  const res: string[] = [];

  const snap = (o: Partial<HappyData>): HappyData => ({ cnt: { ...cnt }, res: res.join(""), pick: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<HappyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Build the longest string from a=${a}, b=${b}, c=${c} with no letter three times in a row.`);

  for (;;) {
    const order = ["a", "b", "c"].sort((x, y) => cnt[y] - cnt[x]);
    let pick: string | null = null;
    for (const ch of order) {
      if (cnt[ch] === 0) continue;
      const n = res.length;
      if (n >= 2 && res[n - 1] === ch && res[n - 2] === ch) continue;
      pick = ch;
      break;
    }
    if (!pick) {
      push(16, "No letter can be added without a triple — done.", {});
      break;
    }
    res.push(pick);
    cnt[pick]--;
    push(17, `Append '${pick}' (most available, no triple). Remaining ${pick}=${cnt[pick]}.`, { pick });
  }

  push(19, `Longest happy string: "${res.join("")}" (length ${res.length}).`, { answer: res.join("") });
  return steps;
}
