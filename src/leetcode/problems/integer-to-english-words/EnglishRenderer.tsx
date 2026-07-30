import type { RendererProps } from "@/core/types";
import type { EnglishData } from "./algorithm";

export function EnglishRenderer({ step }: RendererProps<EnglishData>) {
  const { num, chunks, activeChunk, partial, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <span className="text-2xl font-semibold tabular-nums">{num.toLocaleString("en-US")}</span>

      <div className="flex flex-wrap justify-center gap-2">
        {chunks.map((c, i) => (
          <div
            key={i}
            className={`flex flex-col items-center rounded-md border px-3 py-1.5 ${
              i === activeChunk ? "border-role-current bg-role-current/20" : "border-border"
            }`}
          >
            <span className="text-lg font-semibold tabular-nums">{String(c.value).padStart(i === 0 ? 1 : 3, "0")}</span>
            {c.scale && <span className="text-[10px] uppercase tracking-wide text-muted-foreground">{c.scale}</span>}
          </div>
        ))}
      </div>

      <div className="max-w-md rounded-md border px-4 py-2 text-center text-sm">
        {answer ?? (partial || <span className="text-muted-foreground">…</span>)}
      </div>
    </div>
  );
}
