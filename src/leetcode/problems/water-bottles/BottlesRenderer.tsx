import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BottlesData } from "./algorithm";

export function BottlesRenderer({ step }: RendererProps<BottlesData>) {
  const { numExchange, drunk, empty, fresh, round, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="rounded-md border px-3 py-1 text-sm">round {round} · exchange {numExchange} empties → 1 full</div>

      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <div className="flex max-w-[16rem] flex-wrap justify-center gap-0.5">
            {Array.from({ length: Math.min(empty, 60) }).map((_, i) => (
              <span key={i} className={`text-lg ${i < (fresh ?? 0) ? "opacity-100" : "opacity-60"}`}>🫙</span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">empties: <b className="text-foreground tabular-nums">{empty}</b></span>
        </div>
      </div>

      <div className="rounded-md border-2 border-role-sorted px-4 py-2 text-lg">
        drunk = <b className="tabular-nums">{answer ?? drunk}</b> 💧
      </div>

      <Legend items={[{ role: "sorted", label: "Total bottles drunk" }]} />
    </div>
  );
}
