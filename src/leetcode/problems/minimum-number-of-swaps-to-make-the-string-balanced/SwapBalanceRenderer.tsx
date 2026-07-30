import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SwapBalanceData } from "./algorithm";

export function SwapBalanceRenderer({ step }: RendererProps<SwapBalanceData>) {
  const { s, i, balance, unmatched, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-1">
        {s.split("").map((ch, idx) => (
          <span key={idx} className={`flex h-10 w-9 items-center justify-center rounded border font-mono text-xl font-bold ${idx === i ? "bg-role-current text-white border-role-current" : idx < (i ?? 0) ? "bg-role-visited/25 border-role-visited" : "bg-muted/40 border-border"} ${ch === "[" ? "text-role-active" : "text-role-target"}`}>{ch}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-active px-3 py-1">open balance = {balance}</span>
        <span className="rounded-md border border-role-swapped px-3 py-1">unmatched ] = {unmatched}</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">minimum swaps = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "active", label: "'[' open" }, { role: "target", label: "']' close" }]} />
    </div>
  );
}
