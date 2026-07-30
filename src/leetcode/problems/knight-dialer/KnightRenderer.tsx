import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KnightData } from "./algorithm";

// keypad layout; null cells are '*' and '#'
const PAD: (number | null)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null];

export function KnightRenderer({ step }: RendererProps<KnightData>) {
  const { n, dp, length, total, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-sm text-muted-foreground">
        counting {n}-digit numbers · current length <b className="text-foreground">{length}</b>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {PAD.map((d, i) =>
          d === null ? (
            <div key={i} className="h-14 w-14" />
          ) : (
            <div key={i} className={`flex h-14 w-14 flex-col items-center justify-center rounded-lg border-2 ${dp[d] > 0 ? "border-role-active bg-role-active/15" : "border-border text-muted-foreground"}`}>
              <span className="text-lg font-bold">{d}</span>
              <span className="text-[10px] tabular-nums text-muted-foreground">{dp[d]}</span>
            </div>
          ),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        total = <b className="tabular-nums">{answer ?? total}</b>
      </div>

      <Legend items={[{ role: "active", label: "Reachable digit (count)" }]} />
    </div>
  );
}
