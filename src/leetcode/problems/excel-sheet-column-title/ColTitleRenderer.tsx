import type { RendererProps } from "@/core/types";
import type { ColTitleData } from "./algorithm";

export function ColTitleRenderer({ step }: RendererProps<ColTitleData>) {
  const { n, cur, title, lastLetter, answer } = step.data;
  const letters = (answer ?? title).split("");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">input n = <b className="tabular-nums">{n}</b></span>
        <span className="rounded-md border px-3 py-1">remaining = <b className="tabular-nums">{cur}</b></span>
      </div>

      <div className="flex items-end gap-2">
        {letters.length === 0 ? (
          <span className="text-muted-foreground">building…</span>
        ) : (
          letters.map((ch, i) => (
            <div
              key={i}
              className={`flex size-14 items-center justify-center rounded-lg border-2 text-2xl font-bold transition-colors ${
                !answer && i === 0 && ch === lastLetter
                  ? "border-role-current bg-role-current text-white"
                  : "border-border bg-muted/30"
              }`}
            >
              {ch}
            </div>
          ))
        )}
      </div>

      {answer && <div className="text-lg font-semibold">"{answer}"</div>}
    </div>
  );
}
