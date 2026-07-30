import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BinSubData } from "./algorithm";

export function BinSubRenderer({ step }: RendererProps<BinSubData>) {
  const { s, k, kept, i, val, ans, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex gap-1">
        {s.split("").map((ch, idx) => {
          const cls = idx === i ? "bg-role-current text-white border-role-current" : kept[idx] ? (ch === "1" ? "bg-role-sorted text-white border-role-sorted" : "bg-role-active/40 border-role-active") : "bg-muted/40 border-border text-muted-foreground line-through opacity-60";
          return <span key={idx} className={`flex h-11 w-9 items-center justify-center rounded border font-mono text-xl ${cls}`}>{ch}</span>;
        })}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">value = {val} / {k}</span>
        <span className="rounded-md border px-3 py-1">length = <b className="tabular-nums">{answer ?? ans}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "sorted", label: "Kept 1" }, { role: "active", label: "Kept 0" }]} />
    </div>
  );
}
