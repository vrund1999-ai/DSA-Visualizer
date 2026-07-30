import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BullsData } from "./algorithm";

function DigitRow({ label, str, bullAt, cursor }: { label: string; str: string; bullAt: boolean[]; cursor: number | null }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-14 text-right text-xs text-muted-foreground">{label}</span>
      <div className="flex gap-1">
        {str.split("").map((ch, i) => {
          const cls = bullAt[i] ? "bg-role-sorted text-white border-role-sorted" : i === cursor ? "bg-role-current text-white border-role-current" : "bg-muted/40 border-border";
          return <span key={i} className={`flex h-10 w-10 items-center justify-center rounded border font-mono text-lg font-semibold ${cls}`}>{ch}</span>;
        })}
      </div>
    </div>
  );
}

export function BullsRenderer({ step }: RendererProps<BullsData>) {
  const { secret, guess, bullAt, i, s, g, bulls, cows, phase, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <DigitRow label="secret" str={secret} bullAt={bullAt} cursor={phase === "bulls" ? i : null} />
      <DigitRow label="guess" str={guess} bullAt={bullAt} cursor={phase === "bulls" ? i : null} />

      {phase === "cows" && (
        <div className="flex gap-1 text-xs">
          {Array.from({ length: 10 }).map((_, d) => (
            <div key={d} className={`flex flex-col items-center rounded border px-1 py-0.5 ${Math.min(s[d], g[d]) > 0 ? "border-role-active bg-role-active/15" : "border-border text-muted-foreground"}`}>
              <span className="font-semibold">{d}</span>
              <span className="tabular-nums">{s[d]}/{g[d]}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-sorted px-3 py-1">bulls = {bulls}</span>
        <span className="rounded-md border border-role-active px-3 py-1">cows = {cows}</span>
        <span className="rounded-md border px-3 py-1">result = <b className="font-mono">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "sorted", label: "Bull (in place)" }, { role: "current", label: "Comparing" }, { role: "active", label: "Cow digits" }]} />
    </div>
  );
}
