import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PowerValueData } from "./algorithm";

export function PowerValueRenderer({ step }: RendererProps<PowerValueData>) {
  const { k, power, order, measuring, sorted, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">{sorted ? "sorted by power, then value" : "computing power values"}</div>

      <div className="flex max-w-3xl flex-wrap items-end justify-center gap-2">
        {order.map((v, idx) => {
          const p = power[v];
          const isAnswer = answer !== null && idx === k - 1;
          const isMeasuring = v === measuring;
          const cls = isAnswer
            ? "border-role-target bg-role-target/20"
            : isMeasuring
              ? "border-role-current bg-role-current/20"
              : p !== undefined
                ? "border-role-visited bg-role-visited/10"
                : "border-border bg-card";
          return (
            <div key={v} className="flex flex-col items-center gap-1">
              <div className={`flex size-11 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${cls}`}>{v}</div>
              <span className="text-[10px] tabular-nums text-muted-foreground">{p !== undefined ? `p=${p}` : "—"}</span>
              {sorted && <span className="text-[10px] tabular-nums text-muted-foreground">#{idx + 1}</span>}
            </div>
          );
        })}
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-target">{k}th value = {answer}</div>}

      <Legend items={[{ role: "current", label: "Measuring" }, { role: "visited", label: "Power known" }, { role: "target", label: "kth answer" }]} />
    </div>
  );
}
