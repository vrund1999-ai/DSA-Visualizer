import type { Step } from "@/core/types";

export interface MaxScoreWordsData {
  words: string[];
  wordScores: number[];
  /** current include/exclude decision per word (null = undecided) */
  chosen: (boolean | null)[];
  /** remaining letters as {ch,count} */
  avail: { ch: string; count: number }[];
  best: number;
  bestChoice: boolean[] | null;
  answer: number | null;
}

export type MaxScoreWordsStep = Step<MaxScoreWordsData>;

const MAX_STEPS = 400;

/**
 * Maximum Score Words Formed by Letters: choose a subset of words spellable from the shared letter pool that
 * maximizes the total letter score. Backtracking decides include/exclude for each word, deducting letters on
 * include and restoring on backtrack. `line` indexes CODE.
 */
export function maxScoreWordsSteps(words: string[], letters: string[], score: number[]): MaxScoreWordsStep[] {
  const steps: MaxScoreWordsStep[] = [];
  const avail = new Array(26).fill(0);
  for (const c of letters) avail[c.charCodeAt(0) - 97]++;
  const wordScore = (w: string) => [...w].reduce((s, c) => s + score[c.charCodeAt(0) - 97], 0);
  const wordScores = words.map(wordScore);
  const chosen: (boolean | null)[] = words.map(() => null);
  let best = 0;
  let bestChoice: boolean[] | null = null;

  const availArr = () =>
    avail.map((count, i) => ({ ch: String.fromCharCode(97 + i), count })).filter((x) => x.count > 0);
  const snap = (o: Partial<MaxScoreWordsData>): MaxScoreWordsData => ({
    words,
    wordScores,
    chosen: [...chosen],
    avail: availArr(),
    best,
    bestChoice: bestChoice ? [...bestChoice] : null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MaxScoreWordsData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const canUse = (w: string) => [...w].every((c, _, arr) => avail[c.charCodeAt(0) - 97] >= arr.filter((x) => x === c).length);
  const apply = (w: string, sign: number) => {
    for (const c of w) avail[c.charCodeAt(0) - 97] += sign;
  };

  push(2, `Pick a subset of words spellable from the letters, maximizing score.`);

  const dfs = (i: number, acc: number): number => {
    if (i === words.length) {
      if (acc > best) {
        best = acc;
        bestChoice = chosen.map((c) => c === true);
      }
      push(6, `Selection scores ${acc}${acc > best || acc === best ? "" : ""}. Best so far ${best}.`, {});
      return 0;
    }
    chosen[i] = false;
    let res = dfs(i + 1, acc);
    if (canUse(words[i])) {
      apply(words[i], -1);
      chosen[i] = true;
      push(9, `Take "${words[i]}" (+${wordScores[i]}).`, {});
      res = Math.max(res, wordScores[i] + dfs(i + 1, acc + wordScores[i]));
      apply(words[i], +1);
    }
    chosen[i] = null;
    return res;
  };

  dfs(0, 0);
  push(16, `Maximum score = ${best}.`, { answer: best, chosen: bestChoice ?? chosen });
  return steps;
}
