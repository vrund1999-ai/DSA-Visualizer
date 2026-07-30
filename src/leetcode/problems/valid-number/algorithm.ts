import type { Step } from "@/core/types";

export interface ValidNumberData {
  s: string;
  scan: number | null;
  digit: boolean;
  dot: boolean;
  exp: boolean;
  rejectedAt: number | null;
  answer: boolean | null;
}

export type ValidNumberStep = Step<ValidNumberData>;

/**
 * Validate a number string in one pass with three flags: seen a digit, seen a dot, seen an exponent. Signs
 * are legal only at the start or right after e/E; a dot can't follow another dot or an exponent; an exponent
 * needs a digit before it and resets the digit flag (digits are then required after it). `line` indexes CODE.
 */
export function validNumberSteps(s: string): ValidNumberStep[] {
  const steps: ValidNumberStep[] = [];
  let digit = false;
  let dot = false;
  let exp = false;

  const snap = (o: Partial<ValidNumberData>): ValidNumberData => ({
    s,
    scan: null,
    digit,
    dot,
    exp,
    rejectedAt: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ValidNumberData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Scan "${s}" character by character, tracking digit / dot / exponent flags.`);

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c >= "0" && c <= "9") {
      digit = true;
      push(4, `'${c}' is a digit.`, { scan: i });
    } else if (c === "+" || c === "-") {
      if (i > 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
        push(7, `Sign '${c}' not at start or after e → invalid.`, { scan: i, rejectedAt: i, answer: false });
        return steps;
      }
      push(6, `Sign '${c}' is in a legal position.`, { scan: i });
    } else if (c === ".") {
      if (dot || exp) {
        push(9, `Extra '.' (already had a dot or exponent) → invalid.`, { scan: i, rejectedAt: i, answer: false });
        return steps;
      }
      dot = true;
      push(10, `First decimal point.`, { scan: i });
    } else if (c === "e" || c === "E") {
      if (exp || !digit) {
        push(12, `'${c}' with no preceding digit (or a repeat) → invalid.`, { scan: i, rejectedAt: i, answer: false });
        return steps;
      }
      exp = true;
      digit = false;
      push(13, `Exponent '${c}'; now digits are required after it.`, { scan: i });
    } else {
      push(14, `'${c}' is not a valid character → invalid.`, { scan: i, rejectedAt: i, answer: false });
      return steps;
    }
  }

  push(16, digit ? `Ended with a digit → valid number.` : `No digit where one was required → invalid.`, { answer: digit });
  return steps;
}
