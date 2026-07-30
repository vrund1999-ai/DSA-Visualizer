import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CustomSortData } from "./algorithm";

export function CustomSortRenderer({ step }: RendererProps<CustomSortData>) {
  const { order, count, cur, res, answer } = step.data;
  const countMap = new Map(count);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase text-muted-foreground">order:</span>
        {order.split("").map((c, i) => (
          <span key={i} className={`flex h-9 w-9 items-center justify-center rounded border-2 font-mono text-lg ${c === cur ? "bg-role-current text-white border-role-current" : "bg-role-active/20 border-role-active"}`}>{c}</span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {count.map(([c]) => (
          <div key={c} className={`flex flex-col items-center rounded border px-2 py-1 ${c === cur ? "border-role-current" : "border-border"}`}>
            <span className="font-mono text-lg">{c}</span>
            <span className="text-xs tabular-nums text-muted-foreground">×{countMap.get(c)}</span>
          </div>
        ))}
      </div>

      <div className="rounded-md border-2 border-role-sorted bg-role-sorted/5 px-4 py-2 font-mono text-xl tracking-widest">{answer ?? (res || "…")}</div>

      <Legend items={[{ role: "current", label: "Current character" }, { role: "active", label: "Priority order" }]} />
    </div>
  );
}
