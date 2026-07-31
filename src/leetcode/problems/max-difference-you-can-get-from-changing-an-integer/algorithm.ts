import type { Step } from "@/core/types";

export interface MaxDiffChangeData {
  num: number;
  s: string;
  hi: string | null;
  lo: string | null;
  hiReplace: { from: string; to: string } | null;
  loReplace: { from: string; to: string } | null;
  answer: number | null;
}

export type MaxDiffChangeStep = Step<MaxDiffChangeData>;

/**
 * Max Difference From Changing an Integer: for the maximum, turn the first non-9 digit into 9 everywhere;
 * for the minimum, turn the leading digit into 1 (or, if it is already 1, the first later digit that isn't 0
 * or the leading digit into 0). The answer is max − min. `line` indexes CODE.
 */
export function maxDiffChangeSteps(num: number): MaxDiffChangeStep[] {
  const steps: MaxDiffChangeStep[] = [];
  const s = "" + num;

  const snap = (o: Partial<MaxDiffChangeData>): MaxDiffChangeData => ({
    num,
    s,
    hi: null,
    lo: null,
    hiReplace: null,
    loReplace: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MaxDiffChangeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Maximize and minimize ${num} by replacing one digit value everywhere.`);

  let hi = s;
  let hiReplace: { from: string; to: string } | null = null;
  for (const d of s) {
    if (d !== "9") {
      hi = s.split(d).join("9");
      hiReplace = { from: d, to: "9" };
      break;
    }
  }
  push(5, hiReplace ? `MAX: replace all '${hiReplace.from}' → 9 = ${hi}.` : `MAX: already all 9s → ${hi}.`, { hi, hiReplace });

  let lo = s;
  let loReplace: { from: string; to: string } | null = null;
  if (s[0] !== "1") {
    lo = s.split(s[0]).join("1");
    loReplace = { from: s[0], to: "1" };
  } else {
    for (let i = 1; i < s.length; i++) {
      if (s[i] !== "0" && s[i] !== s[0]) {
        lo = s.split(s[i]).join("0");
        loReplace = { from: s[i], to: "0" };
        break;
      }
    }
  }
  push(11, loReplace ? `MIN: replace all '${loReplace.from}' → ${loReplace.to} = ${lo}.` : `MIN: can't shrink → ${lo}.`, { hi, hiReplace, lo, loReplace });

  const answer = Number(hi) - Number(lo);
  push(13, `Difference = ${hi} − ${lo} = ${answer}.`, { hi, hiReplace, lo, loReplace, answer });
  return steps;
}
