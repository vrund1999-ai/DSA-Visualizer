import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TopKWordsData } from "./algorithm";

export function TopKWordsRenderer({ step }: RendererProps<TopKWordsData>) {
  const { k, entries, counting, sorted, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{sorted ? "sorted by frequency, then alphabetically" : "counting word frequencies"}</div>

      <div className="flex flex-col items-stretch gap-1.5">
        {entries.length === 0 ? (
          <span className="text-xs text-muted-foreground">no words yet</span>
        ) : (
          entries.map((e, idx) => {
            const inTopK = sorted && idx < k;
            const isCounting = e.word === counting;
            const cls = answer && inTopK
              ? "border-role-target bg-role-target/15"
              : isCounting
                ? "border-role-current bg-role-current/20"
                : inTopK
                  ? "border-role-visited bg-role-visited/10"
                  : "border-border bg-card";
            return (
              <div key={e.word} className={`flex items-center justify-between gap-6 rounded-md border-2 px-3 py-1.5 ${cls}`}>
                <span className="font-mono text-sm">{e.word}</span>
                <span className="flex items-center gap-2">
                  <span className="inline-block h-2 rounded bg-role-active/60" style={{ width: `${e.freq * 14}px` }} />
                  <b className="tabular-nums text-sm">{e.freq}</b>
                </span>
              </div>
            );
          })
        )}
      </div>

      {answer && <div className="text-sm font-semibold text-role-target">result: {answer.map((w) => `"${w}"`).join(", ")}</div>}

      <Legend items={[{ role: "current", label: "Counting" }, { role: "target", label: `Top ${k}` }]} />
    </div>
  );
}
