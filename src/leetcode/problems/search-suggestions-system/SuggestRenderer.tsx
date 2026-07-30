import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SuggestData } from "./algorithm";

export function SuggestRenderer({ step }: RendererProps<SuggestData>) {
  const { products, searchWord, typed, prefix, hits } = step.data;
  const hitSet = new Set(hits);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-1">
        {searchWord.split("").map((ch, i) => (
          <span key={i} className={`flex h-9 w-8 items-center justify-center rounded border font-mono text-lg ${i < typed ? "bg-role-current text-white border-role-current" : "bg-muted/40 border-border text-muted-foreground"}`}>{ch}</span>
        ))}
        <span className="ml-2 text-xs text-muted-foreground">prefix "{prefix}"</span>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col items-start gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">catalog</span>
          {products.map((p) => (
            <span key={p} className={`rounded px-2 py-0.5 font-mono text-sm ${hitSet.has(p) ? "bg-role-sorted/20 text-foreground" : "text-muted-foreground"}`}>
              {prefix && p.startsWith(prefix) ? (
                <>
                  <b className="text-role-sorted">{p.slice(0, prefix.length)}</b>
                  {p.slice(prefix.length)}
                </>
              ) : (
                p
              )}
            </span>
          ))}
        </div>

        <div className="flex min-w-[8rem] flex-col items-start gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">suggestions</span>
          {hits.length ? (
            hits.map((h) => <span key={h} className="rounded border border-role-sorted bg-role-sorted/15 px-2 py-0.5 font-mono text-sm">{h}</span>)
          ) : (
            <span className="text-sm text-muted-foreground">—</span>
          )}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Typed" }, { role: "sorted", label: "Matches prefix" }]} />
    </div>
  );
}
