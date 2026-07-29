import type { Step } from "@/core/types";

export interface JumpVIIData {
  s: string;
  minJump: number;
  maxJump: number;
  dp: boolean[];
  i: number | null;
  /** window of source positions [i-maxJump, i-minJump] */
  window: [number, number] | null;
  windowReach: number;
  answer: boolean | null;
}

export type JumpVIIStep = Step<JumpVIIData>;

/**
 * Position i is reachable if it's a '0' and some already-reachable position lies in the window
 * [i−maxJump, i−minJump]. A running count of reachable positions in that shrinking/growing window makes
 * each check O(1). `line` indexes CODE.
 */
export function jumpVIISteps(s: string, minJump: number, maxJump: number): JumpVIIStep[] {
  const steps: JumpVIIStep[] = [];
  const n = s.length;
  const dp = new Array(n).fill(false);
  dp[0] = true;
  let windowReach = 0;

  const snap = (o: Partial<JumpVIIData>): JumpVIIData => ({ s, minJump, maxJump, dp: [...dp], i: null, window: null, windowReach, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<JumpVIIData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Start at 0. Reach i if s[i]='0' and a reachable spot lies in [i−${maxJump}, i−${minJump}].`);

  for (let i = 1; i < n; i++) {
    if (i >= minJump) windowReach += dp[i - minJump] ? 1 : 0;
    if (i > maxJump) windowReach -= dp[i - maxJump - 1] ? 1 : 0;
    dp[i] = s[i] === "0" && windowReach > 0;
    const window: [number, number] = [Math.max(0, i - maxJump), i - minJump];
    push(8, `i=${i} ('${s[i]}'): window [${window[0]}, ${window[1]}] has ${windowReach} reachable → ${dp[i] ? "reachable" : "blocked"}.`, { i, window, windowReach });
  }

  push(10, `Last index reachable: ${dp[n - 1]}.`, { answer: dp[n - 1] });
  return steps;
}
