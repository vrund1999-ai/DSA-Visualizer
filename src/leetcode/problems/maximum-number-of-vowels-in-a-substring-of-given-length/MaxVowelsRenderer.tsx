import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxVowelsData } from "./algorithm";

const isV = (c: string) => "aeiou".includes(c);

export function MaxVowelsRenderer({ step }: RendererProps<MaxVowelsData>) {
  const { s, k, start, cur, best, answer } = step.data;

  const roleFor = (i: number) => {
    const inWindow = i >= start && i < start + k;
    if (inWindow && isV(s[i])) return "sorted";
    if (inWindow) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">window size k = <b className="tabular-nums">{k}</b></div>

      <ArrayCells values={s.split("")} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">window vowels = <b className="tabular-nums">{cur}</b></span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "sorted", label: "Vowel in window" }, { role: "current", label: "Consonant in window" }]} />
    </div>
  );
}
