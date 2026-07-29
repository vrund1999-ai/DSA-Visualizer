import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RangeData } from "./algorithm";

export function RangeRenderer({ step }: RendererProps<RangeData>) {
  const { lists, ptr, lo, hi, minList, answer } = step.data;
  const range = answer ?? (lo !== null && hi !== null ? [lo, hi] : null);

  const cellClass = (li: number, ci: number) => {
    const v = lists[li][ci];
    if (ci === ptr[li]) {
      if (li === minList) return "bg-role-current text-white border-role-current";
      if (v === hi) return "bg-role-target text-white border-role-target";
      return "bg-role-active/30 border-role-active";
    }
    if (ci < ptr[li]) return "bg-muted/40 border-border text-muted-foreground line-through";
    return "bg-muted/20 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-2">
        {lists.map((list, li) => (
          <div key={li} className="flex items-center gap-1">
            <span className="w-6 text-right text-xs text-muted-foreground">{li}:</span>
            {list.map((v, ci) => (
              <span key={ci} className={`flex h-9 min-w-9 items-center justify-center rounded border px-1 text-sm font-semibold tabular-nums ${cellClass(li, ci)}`}>
                {v}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        smallest range = <b className="tabular-nums">{range && range[0] > -1e8 ? `[${range[0]}, ${range[1]}]` : "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "Current min (advances)" }, { role: "target", label: "Current max" }, { role: "active", label: "List pointer" }]} />
    </div>
  );
}
