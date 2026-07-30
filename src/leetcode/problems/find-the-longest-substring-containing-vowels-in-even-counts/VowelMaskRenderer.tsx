import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { VowelMaskData } from "./algorithm";

const V = "aeiou";

export function VowelMaskRenderer({ step }: RendererProps<VowelMaskData>) {
  const { s, i, mask, best, bestRange, answer } = step.data;

  const charCls = (idx: number) => {
    if (answer !== null && bestRange && idx >= bestRange[0] && idx <= bestRange[1]) return "bg-role-sorted text-white border-role-sorted";
    if (idx === i) return "bg-role-current text-white border-role-current";
    if (i !== null && idx < i) return "bg-role-visited/25 border-role-visited";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-0.5">
        {s.split("").map((ch, idx) => (
          <span key={idx} className={`flex h-9 w-7 items-center justify-center rounded border font-mono text-sm ${charCls(idx)}`}>{ch}</span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs uppercase text-muted-foreground">vowel parity:</span>
        {V.split("").map((v, b) => {
          const odd = (mask & (1 << b)) !== 0;
          return <span key={v} className={`flex h-8 w-8 items-center justify-center rounded border-2 font-mono ${odd ? "bg-role-swapped/30 border-role-swapped text-foreground" : "bg-role-active/20 border-role-active"}`}>{v}</span>;
        })}
        <span className="ml-1 text-[10px] text-muted-foreground">(highlighted = odd count)</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">longest = <b className="tabular-nums">{answer ?? best}</b></div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "sorted", label: "Best substring" }, { role: "swapped", label: "Odd vowel" }]} />
    </div>
  );
}
