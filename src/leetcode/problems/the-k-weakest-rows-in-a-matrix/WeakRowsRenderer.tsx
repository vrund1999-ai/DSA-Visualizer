import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { WeakRowsData } from "./algorithm";

export function WeakRowsRenderer({ step }: RendererProps<WeakRowsData>) {
  const { mat, k, counts, cur, answer } = step.data;
  const chosen = new Set(answer ?? []);
  const rank = new Map((answer ?? []).map((idx, r) => [idx, r]));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-1">
        {mat.map((row, r) => (
          <div key={r} className="flex items-center gap-2">
            <span className={`w-6 text-right text-xs ${r === cur ? "font-bold text-role-current" : "text-muted-foreground"}`}>{r}</span>
            <div className="flex gap-0.5">
              {row.map((v, c) => (
                <span key={c} className={`flex h-6 w-6 items-center justify-center rounded text-[10px] font-semibold ${v === 1 ? "bg-role-active/50 text-foreground" : "bg-muted/40 text-muted-foreground"}`}>{v}</span>
              ))}
            </div>
            <span className="text-xs tabular-nums text-muted-foreground">= {counts[r]}</span>
            {chosen.has(r) && <span className="rounded bg-role-sorted px-1.5 text-[10px] font-bold text-white">#{(rank.get(r) ?? 0) + 1}</span>}
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">{k} weakest rows = [<b className="tabular-nums">{(answer ?? []).join(", ")}</b>]</div>

      <Legend items={[{ role: "active", label: "Soldier (1)" }, { role: "current", label: "Counting row" }, { role: "sorted", label: "Selected (weakest)" }]} />
    </div>
  );
}
