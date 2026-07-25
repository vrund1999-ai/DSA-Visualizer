import type { Step } from "@/core/types";

export interface DecodeWaysData {
  s: string;
  dp: number[];
  /** dp index being filled (maps to s[i-1]) */
  i: number | null;
  oneOk: boolean | null;
  twoValue: number | null;
  twoOk: boolean | null;
  answer: number | null;
}

export type DecodeWaysStep = Step<DecodeWaysData>;

/**
 * dp[i] counts decodings of the first i characters. Each new character either stands alone (if it
 * isn't '0', inheriting dp[i-1]) or joins the previous one as a 10-26 pair (inheriting dp[i-2]) —
 * the classic Fibonacci-shaped recurrence, blocked by invalid zeros. `line` indexes CODE.
 */
export function decodeWaysSteps(s: string): DecodeWaysStep[] {
  const steps: DecodeWaysStep[] = [];
  const dp = new Array(s.length + 1).fill(0);

  const snap = (o: Partial<DecodeWaysData>): DecodeWaysData => ({ s, dp: [...dp], i: null, oneOk: null, twoValue: null, twoOk: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DecodeWaysData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (s[0] === "0") {
    push(1, "String starts with '0' — no valid decoding → 0.", { answer: 0 });
    return steps;
  }

  dp[0] = 1;
  dp[1] = 1;
  push(3, "dp[0] = dp[1] = 1 (empty and first single-digit prefix).");

  for (let i = 2; i <= s.length; i++) {
    const oneOk = s[i - 1] !== "0";
    if (oneOk) dp[i] += dp[i - 1];
    push(5, `s[${i - 1}]='${s[i - 1]}' ${oneOk ? `decodes alone → +dp[${i - 1}]` : "is '0', can't stand alone"} (dp[${i}] = ${dp[i]}).`, { i, oneOk });

    const two = Number(s.slice(i - 2, i));
    const twoOk = two >= 10 && two <= 26;
    if (twoOk) dp[i] += dp[i - 2];
    push(7, `pair "${s.slice(i - 2, i)}" = ${two} ${twoOk ? `is 10-26 → +dp[${i - 2}]` : "out of 10-26"} (dp[${i}] = ${dp[i]}).`, { i, oneOk, twoValue: two, twoOk });
  }

  push(9, `Total decodings: ${dp[s.length]}.`, { answer: dp[s.length] });
  return steps;
}
