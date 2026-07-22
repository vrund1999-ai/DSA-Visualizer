import type { Highlight, Step } from "@/core/types";

export interface BackspaceInput {
  s: string;
  t: string;
}

export interface BackspaceData {
  chars: string[];
  which: "s" | "t";
  i: number | null;
  out: string[];
  builtS: string | null;
  builtT: string | null;
  result: boolean | null;
}

export type BackspaceStep = Step<BackspaceData>;

/**
 * Simulate the typing with a stack: a normal character is pushed, a '#' pops the
 * last one (a backspace). Do this for both strings and compare the results.
 * `line` indexes CODE.
 */
export function backspaceSteps(input: BackspaceInput): BackspaceStep[] {
  const steps: BackspaceStep[] = [];

  const build = (str: string, which: "s" | "t", builtOther: string | null): string => {
    const chars = [...str];
    const out: string[] = [];
    const push = (line: number, explanation: string, i: number | null, highlights: Highlight[]) => {
      steps.push({
        id: steps.length,
        line,
        explanation,
        data: {
          chars,
          which,
          i,
          out: [...out],
          builtS: which === "t" ? builtOther : null,
          builtT: null,
          result: null,
        },
        highlights,
      });
    };
    push(2, `Build the typed result of "${str}".`, null, []);
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === "#") {
        const popped = out.pop();
        push(4, `'#' at ${i} — backspace${popped ? ` deletes '${popped}'` : " (nothing to delete)"}.`, i, [{ ref: i, role: "swapped" }]);
      } else {
        out.push(chars[i]);
        push(4, `Type '${chars[i]}'.`, i, [{ ref: i, role: "current" }]);
      }
    }
    return out.join("");
  };

  const builtS = build(input.s, "s", null);
  const builtT = build(input.t, "t", builtS);
  const result = builtS === builtT;
  steps.push({
    id: steps.length,
    line: 7,
    explanation: result ? `Both produce "${builtS}" — equal.` : `"${builtS}" ≠ "${builtT}" — not equal.`,
    data: { chars: [...input.t], which: "t", i: null, out: [...builtT], builtS, builtT, result },
    highlights: [],
  });
  return steps;
}
