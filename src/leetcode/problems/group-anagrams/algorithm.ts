import type { Highlight, Step } from "@/core/types";

export interface Group {
  key: string;
  members: string[];
}

export interface GroupAnagramsData {
  words: string[];
  i: number | null;
  groups: Group[];
  currentKey: string | null;
}

export type GroupAnagramsStep = Step<GroupAnagramsData>;

const toGroups = (m: Map<string, string[]>): Group[] =>
  [...m.entries()].map(([key, members]) => ({ key, members: [...members] }));

/**
 * Anagrams share the same multiset of letters, so their sorted form is identical
 * — use it as a hash-map key that buckets anagrams together. `line` indexes CODE.
 */
export function groupAnagramsSteps(words: string[]): GroupAnagramsStep[] {
  const steps: GroupAnagramsStep[] = [];
  const groups = new Map<string, string[]>();

  const snap = (o: Partial<GroupAnagramsData>): GroupAnagramsData => ({
    words: [...words],
    i: null,
    groups: toGroups(groups),
    currentKey: null,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: GroupAnagramsData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { groups: groups.size } });
  };

  push(1, "Bucket words by their sorted letters — anagrams collide on the same key.", snap({}), []);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const key = [...word].sort().join("");
    push(3, `"${word}" sorted → "${key}".`, snap({ i, currentKey: key }), [{ ref: i, role: "current" }]);
    const isNew = !groups.has(key);
    if (isNew) groups.set(key, []);
    groups.get(key)!.push(word);
    push(
      5,
      isNew
        ? `No bucket "${key}" yet — create it and add "${word}".`
        : `Bucket "${key}" exists — add "${word}" to it.`,
      snap({ i, currentKey: key }),
      [{ ref: i, role: "sorted" }],
    );
  }

  push(7, `Done — ${groups.size} anagram group(s).`, snap({}), []);
  return steps;
}
