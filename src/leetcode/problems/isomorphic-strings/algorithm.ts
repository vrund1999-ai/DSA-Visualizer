import type { Highlight, Step } from "@/core/types";

export interface IsomorphicInput {
  s: string;
  t: string;
}

export interface MapPair {
  from: string;
  to: string;
}

export interface IsomorphicData {
  s: string[];
  t: string[];
  i: number | null;
  map1: MapPair[];
  map2: MapPair[];
  result: boolean | null;
}

export type IsomorphicStep = Step<IsomorphicData>;

/**
 * Two strings are isomorphic when there's a consistent one-to-one character
 * mapping both ways. Keep s→t and t→s maps; any character that already maps to
 * something else breaks it. `line` indexes CODE.
 */
export function isomorphicSteps(input: IsomorphicInput): IsomorphicStep[] {
  const s = [...input.s];
  const t = [...input.t];
  const steps: IsomorphicStep[] = [];
  const map1 = new Map<string, string>();
  const map2 = new Map<string, string>();
  let result: boolean | null = null;

  const pairs = (m: Map<string, string>): MapPair[] => [...m.entries()].map(([from, to]) => ({ from, to }));
  const snap = (o: Partial<IsomorphicData>): IsomorphicData => ({
    s: [...s],
    t: [...t],
    i: null,
    map1: pairs(map1),
    map2: pairs(map2),
    result,
    ...o,
  });
  const push = (line: number, explanation: string, data: IsomorphicData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Map characters both ways; the mapping must stay consistent.", snap({}), []);

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];
    if (!map1.has(a) && !map2.has(b)) {
      map1.set(a, b);
      map2.set(b, a);
      push(5, `New pair '${a}' ↔ '${b}'.`, snap({ i }), [{ ref: `s${i}`, role: "sorted" }, { ref: `t${i}`, role: "sorted" }]);
    } else if (map1.get(a) !== b || map2.get(b) !== a) {
      result = false;
      push(7, `Conflict at ${i}: '${a}' or '${b}' already maps differently — not isomorphic.`, snap({ i, result: false }), [{ ref: `s${i}`, role: "swapped" }, { ref: `t${i}`, role: "swapped" }]);
      return steps;
    } else {
      push(6, `'${a}' ↔ '${b}' is consistent with the existing mapping.`, snap({ i }), [{ ref: `s${i}`, role: "compared" }, { ref: `t${i}`, role: "compared" }]);
    }
  }

  result = true;
  push(10, "Mapping stayed consistent throughout — the strings are isomorphic.", snap({ result: true }), []);
  return steps;
}
