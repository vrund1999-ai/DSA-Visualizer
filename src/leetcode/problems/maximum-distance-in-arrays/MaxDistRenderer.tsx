import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxDistData } from "./algorithm";

export function MaxDistRenderer({ step }: RendererProps<MaxDistData>) {
  const { arrays, activeArr, lo, hi, best, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col items-center gap-1.5">
        {arrays.map((a, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-10 text-right text-[10px] uppercase tracking-wide text-muted-foreground">arr {i}</span>
            <div className="flex gap-1">
              {a.map((v, j) => {
                const isEnd = j === 0 || j === a.length - 1;
                return (
                  <span
                    key={j}
                    className={`flex size-8 items-center justify-center rounded border text-sm tabular-nums ${
                      i === activeArr && isEnd
                        ? "border-role-current bg-role-current text-white"
                        : isEnd
                          ? "border-role-active bg-role-active/20"
                          : "border-border text-muted-foreground"
                    }`}
                  >
                    {v}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-sm tabular-nums">
        <span>lo = {lo}</span>
        <span>hi = {hi}</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        maximum distance = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "current", label: "current array ends" }, { role: "active", label: "array endpoints" }]} />
    </div>
  );
}
