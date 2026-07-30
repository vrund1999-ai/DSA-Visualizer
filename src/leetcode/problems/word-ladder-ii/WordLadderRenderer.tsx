import type { RendererProps } from "@/core/types";
import type { WordLadderData } from "./algorithm";

export function WordLadderRenderer({ step }: RendererProps<WordLadderData>) {
  const { begin, end, layers, frontier, paths } = step.data;
  const frontierSet = new Set(frontier);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        {layers.map((layer, li) => (
          <div key={li} className="flex items-center gap-2">
            <span className="w-14 text-right text-[10px] uppercase tracking-wide text-muted-foreground">
              layer {li}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {layer.map((w) => (
                <span
                  key={w}
                  className={`rounded-md border px-2 py-1 font-mono text-sm ${
                    frontierSet.has(w)
                      ? "border-role-current bg-role-current text-white"
                      : w === end
                        ? "border-role-target bg-role-target/20 text-foreground"
                        : w === begin
                          ? "border-role-active bg-role-active/20 text-foreground"
                          : "border-border text-muted-foreground"
                  }`}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {paths.length > 0 && (
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {paths.length} shortest path(s)
          </span>
          {paths.map((p, i) => (
            <div key={i} className="flex items-center gap-1 font-mono text-sm">
              {p.map((w, j) => (
                <span key={j} className="flex items-center gap-1">
                  <span className="rounded bg-role-path/30 px-1.5 py-0.5">{w}</span>
                  {j < p.length - 1 && <span className="text-muted-foreground">→</span>}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
