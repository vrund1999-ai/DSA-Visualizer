import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GcdStringsData } from "./algorithm";

export function GcdStringsRenderer({ step }: RendererProps<GcdStringsData>) {
  const { str1, str2, commute, gcdChain, g, answer } = step.data;

  const highlightPrefix = (s: string) =>
    s.split("").map((ch, i) => (
      <span key={i} className={`font-mono ${g !== null && i < g ? "rounded bg-role-visited/25 text-role-visited" : ""}`}>{ch}</span>
    ));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2 text-lg">
        <div>str1 = {highlightPrefix(str1)}</div>
        <div>str2 = {highlightPrefix(str2)}</div>
      </div>

      {commute !== null && (
        <div className={`text-sm ${commute ? "text-muted-foreground" : "text-role-target"}`}>
          {commute ? "strings commute under concatenation ✓" : "strings do not commute — answer is empty"}
        </div>
      )}

      {gcdChain.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {gcdChain.map((s, i) => (
            <span key={i} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">gcd({s.a},{s.b})</span>
          ))}
          {g !== null && <span className="rounded-md border-2 border-role-current bg-role-current/15 px-2 py-1 font-mono text-xs">= {g}</span>}
        </div>
      )}

      {answer !== null && (
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg">"{answer}"</div>
      )}

      <Legend items={[{ role: "visited", label: "GCD prefix" }, { role: "current", label: "gcd length" }]} />
    </div>
  );
}
