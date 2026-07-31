import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MinSwapsData } from "./algorithm";

export function MinSwapsRenderer({ step }: RendererProps<MinSwapsData>) {
  const { zeros, n, target, moving, swaps, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-1.5">
        {zeros.map((z, i) => {
          const need = n - 1 - i;
          const ok = z >= need;
          const role = i === moving ? "current" : i === target ? "compared" : ok ? "sorted" : "default";
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-10 text-right text-[10px] uppercase tracking-wide text-muted-foreground">row {i}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: n }).map((_, c) => {
                  const isZero = c >= n - z;
                  return (
                    <span
                      key={c}
                      className={`flex size-6 items-center justify-center rounded text-xs ${
                        role === "current"
                          ? "bg-role-current/30"
                          : role === "compared"
                            ? "bg-role-compared/20"
                            : "bg-muted/20"
                      } ${isZero ? "text-role-sorted" : "text-foreground"}`}
                    >
                      {isZero ? "0" : "·"}
                    </span>
                  );
                })}
              </div>
              <span className="text-[10px] tabular-nums text-muted-foreground">
                {z}z (need {need})
              </span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        swaps = <b className="tabular-nums">{answer ?? swaps}</b>
      </div>

      <Legend items={[{ role: "current", label: "bubbling row" }, { role: "compared", label: "target row" }]} />
    </div>
  );
}
