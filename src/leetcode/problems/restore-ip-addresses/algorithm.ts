import type { Step } from "@/core/types";

export interface IpData {
  s: string;
  /** parts placed so far */
  parts: string[];
  /** [start, end) of the segment currently being tried */
  trying: [number, number] | null;
  status: "place" | "reject-zero" | "reject-big" | "record" | "dead" | null;
  results: string[];
  answer: string[] | null;
}

export type IpStep = Step<IpData>;

/**
 * A valid IPv4 splits the digits into four parts, each 0–255 with no leading zeros. Backtracking tries
 * segment lengths 1–3 at each cut, pruning any part that has a leading zero or exceeds 255, and records
 * a solution when four parts consume the whole string. `line` indexes CODE.
 */
export function ipSteps(s: string): IpStep[] {
  const steps: IpStep[] = [];
  const results: string[] = [];

  const snap = (o: Partial<IpData>): IpData => ({ s, parts: [], trying: null, status: null, results: [...results], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<IpData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  function bt(start: number, parts: string[]) {
    if (parts.length === 4) {
      if (start === s.length) {
        results.push(parts.join("."));
        push(4, `Four parts consume every digit → record ${parts.join(".")}.`, { parts: [...parts], status: "record" });
      } else {
        push(5, `Four parts but ${s.length - start} digit(s) left over — dead end.`, { parts: [...parts], status: "dead" });
      }
      return;
    }
    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) break;
      const seg = s.slice(start, start + len);
      if (seg.length > 1 && seg[0] === "0") {
        push(10, `"${seg}" has a leading zero — reject.`, { parts: [...parts], trying: [start, start + len], status: "reject-zero" });
        continue;
      }
      if (Number(seg) > 255) {
        push(11, `"${seg}" > 255 — reject.`, { parts: [...parts], trying: [start, start + len], status: "reject-big" });
        continue;
      }
      push(12, `Place part "${seg}" (part ${parts.length + 1}).`, { parts: [...parts, seg], trying: [start, start + len], status: "place" });
      bt(start + len, [...parts, seg]);
    }
  }

  push(15, `Backtrack over segmentations of "${s}".`);
  bt(0, []);
  push(16, `Found ${results.length} valid address(es).`, { answer: [...results] });
  return steps;
}
