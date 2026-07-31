import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BeautifulArrData } from "./algorithm";

export function BeautifulArrRenderer({ step }: RendererProps<BeautifulArrData>) {
  const { n, arrangement, pos, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">n = {n}</span>

      <div className="flex gap-1.5">
        {Array.from({ length: n }).map((_, i) => {
          const p = i + 1;
          const v = arrangement[i];
          return (
            <div key={p} className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-muted-foreground">pos {p}</span>
              <div
                className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${
                  p === pos
                    ? "border-role-current bg-role-current text-white"
                    : v !== null
                      ? "border-role-active bg-role-active/20"
                      : "border-dashed border-border text-muted-foreground"
                }`}
              >
                {v ?? "·"}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        beautiful arrangements = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "current", label: "placing" }, { role: "active", label: "placed" }]} />
    </div>
  );
}
