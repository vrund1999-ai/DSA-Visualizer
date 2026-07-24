import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FreqSortData } from "./algorithm";

export function FreqSortRenderer({ step }: RendererProps<FreqSortData>) {
  const { entries, counting, sorted, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{sorted ? "sorted by descending frequency" : "counting characters"}</div>

      <div className="flex flex-col items-stretch gap-1.5">
        {entries.length === 0 ? (
          <span className="text-xs text-muted-foreground">no characters yet</span>
        ) : (
          entries.map((e) => {
            const isCounting = e.char === counting;
            const cls = isCounting ? "border-role-current bg-role-current/20" : sorted ? "border-role-visited bg-role-visited/10" : "border-border bg-card";
            return (
              <div key={e.char} className={`flex items-center gap-3 rounded-md border-2 px-3 py-1.5 ${cls}`}>
                <span className="font-mono text-sm font-semibold">'{e.char}'</span>
                <span className="inline-block h-3 rounded bg-role-active/60" style={{ width: `${e.freq * 16}px` }} />
                <b className="tabular-nums text-sm">{e.freq}</b>
              </div>
            );
          })
        )}
      </div>

      {answer !== null && <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">{answer}</div>}

      <Legend items={[{ role: "current", label: "Counting" }, { role: "visited", label: "Sorted" }]} />
    </div>
  );
}
