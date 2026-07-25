import type { Step } from "@/core/types";

export interface SimplifyPathData {
  parts: string[];
  pos: number | null;
  stack: string[];
  /** action taken this step */
  action: "skip" | "up" | "enter" | null;
  answer: string | null;
}

export type SimplifyPathStep = Step<SimplifyPathData>;

/**
 * Split the path on '/'. Empty parts and '.' are ignored, '..' pops the last
 * directory, and any real name is pushed. The canonical path is the stack joined by
 * '/'. `line` indexes CODE.
 */
export function simplifyPathSteps(path: string): SimplifyPathStep[] {
  const steps: SimplifyPathStep[] = [];
  const parts = path.split("/");
  const stack: string[] = [];

  const snap = (pos: number, o: Partial<SimplifyPathData>): SimplifyPathData => ({ parts: [...parts], pos, stack: [...stack], action: null, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<SimplifyPathData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, `Simplify "${path}" by processing each part.`, -1);

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === "" || part === ".") {
      push(3, `"${part || "(empty)"}" — ignore.`, i, { action: "skip" });
    } else if (part === "..") {
      stack.pop();
      push(4, `".." — go up a directory.`, i, { action: "up" });
    } else {
      stack.push(part);
      push(5, `"${part}" — enter directory.`, i, { action: "enter" });
    }
  }

  const answer = "/" + stack.join("/");
  push(7, `Canonical path: "${answer}".`, -1, { answer });
  return steps;
}
