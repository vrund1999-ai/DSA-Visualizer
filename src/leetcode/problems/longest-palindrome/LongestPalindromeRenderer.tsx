import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LongestPalindromeData } from "./algorithm";

export function LongestPalindromeRenderer({ step }: RendererProps<LongestPalindromeData>) {
  const { entries, activeChar, len, hasOdd, answer } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Paired length</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{len}</span>
        <span className="text-muted-foreground">odd leftover?</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold">{hasOdd ? "yes (+1)" : "no"}</span>
        {answer !== null && (
          <>
            <span className="text-muted-foreground">answer</span>
            <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{answer}</span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-2">
        {entries.map((e) => (
          <div key={e.char} className={`flex flex-col items-center gap-1 rounded-md border-2 px-3 py-2 transition-colors ${e.char === activeChar ? "border-role-current bg-role-current/10" : "border-border bg-muted/30"}`}>
            <span className="font-mono text-lg font-semibold">{e.char}</span>
            <span className="text-[10px] tabular-nums text-muted-foreground">×{e.n}</span>
            <span className={`text-[10px] tabular-nums ${e.odd ? "text-role-swapped" : "text-role-sorted"}`}>use {e.usable}{e.odd ? " +odd" : ""}</span>
          </div>
        ))}
      </div>

      <Legend
        items={[
          { role: "current", label: "Current character" },
          { role: "target", label: "Answer" },
        ]}
      />
    </div>
  );
}
