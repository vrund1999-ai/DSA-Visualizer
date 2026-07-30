import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PowerFourData } from "./algorithm";

export function PowerFourRenderer({ step }: RendererProps<PowerFourData>) {
  const { n, bits, setPos, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-2xl font-semibold tabular-nums">{n}</span>

      <div className="flex flex-wrap justify-center gap-1">
        {bits.map((b) => {
          const isSet = b.value === 1;
          const isThe = b.pos === setPos;
          const even = b.pos % 2 === 0;
          const role = isThe ? (even ? "sorted" : "swapped") : isSet ? "current" : "default";
          return (
            <div key={b.pos} className="flex flex-col items-center gap-1">
              <div
                className={`flex size-8 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${
                  role === "sorted"
                    ? "border-role-sorted bg-role-sorted text-white"
                    : role === "swapped"
                      ? "border-role-swapped bg-role-swapped text-white"
                      : role === "current"
                        ? "border-role-current bg-role-current text-white"
                        : "border-border bg-muted/30 text-muted-foreground"
                }`}
              >
                {b.value}
              </div>
              <span className={`text-[9px] tabular-nums ${b.pos % 2 === 0 ? "text-foreground" : "text-muted-foreground"}`}>{b.pos}</span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        power of four? <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "set bit at even pos" }, { role: "swapped", label: "set bit at odd pos" }]} />
    </div>
  );
}
