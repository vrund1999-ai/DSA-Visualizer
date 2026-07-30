import type { RendererProps } from "@/core/types";
import type { TwoLetterPalinData } from "./algorithm";

export function TwoLetterPalinRenderer({ step }: RendererProps<TwoLetterPalinData>) {
  const { counts, active, length, center, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {counts.map((c) => (
          <div
            key={c.word}
            className={`flex flex-col items-center rounded-md border px-3 py-1.5 ${
              c.word === active ? "border-role-current bg-role-current/20" : "border-border"
            }`}
          >
            <span className="font-mono text-sm font-semibold">{c.word}</span>
            <span className="text-xs text-muted-foreground">×{c.count}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-sm tabular-nums">
        <span>length so far = {length}</span>
        {center && <span className="text-role-pivot">+ center</span>}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        longest palindrome = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
