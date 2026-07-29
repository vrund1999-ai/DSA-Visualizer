import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RanksData } from "./algorithm";

const medalColor = (label: string | null) => {
  if (label === "Gold Medal") return "border-yellow-400 bg-yellow-400/20";
  if (label === "Silver Medal") return "border-slate-400 bg-slate-400/20";
  if (label === "Bronze Medal") return "border-amber-600 bg-amber-600/20";
  return "border-border bg-muted/30";
};

export function RanksRenderer({ step }: RendererProps<RanksData>) {
  const { score, assignIdx, ans, answer } = step.data;
  const finalAns = answer ?? ans;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">athletes (original order)</span>
      <div className="flex flex-wrap justify-center gap-2">
        {score.map((s, i) => (
          <div key={i} className={`flex w-24 flex-col items-center rounded-md border-2 px-2 py-1.5 ${i === assignIdx ? "ring-2 ring-role-current" : ""} ${medalColor(finalAns[i])}`}>
            <span className="text-lg font-bold tabular-nums">{s}</span>
            <span className="text-xs text-muted-foreground">{finalAns[i] ?? "—"}</span>
          </div>
        ))}
      </div>

      <Legend items={[{ role: "current", label: "Just ranked" }]} />
    </div>
  );
}
