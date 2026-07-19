import { cn } from "@/lib/utils";

/**
 * Pure. Highlights `activeLine`. Dependency-free (no heavy syntax highlighter)
 * so it scales; the inner <span> can be swapped for a highlighter later without
 * touching callers.
 */
export function CodePanel({
  code,
  activeLine,
  language,
}: {
  code: string[];
  activeLine: number;
  language?: string;
}) {
  return (
    <div className="flex min-h-0 flex-col overflow-hidden rounded-lg border bg-muted/30">
      <div className="flex items-center justify-between border-b bg-muted/50 px-3 py-1.5">
        <span className="text-xs font-medium text-muted-foreground">Code</span>
        {language && (
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
            {language}
          </span>
        )}
      </div>
      <pre className="min-h-0 flex-1 overflow-auto p-2 text-[13px] leading-6">
        <code>
          {code.map((line, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-[2.25rem_1fr] rounded px-1 transition-colors",
                i === activeLine &&
                  "bg-primary/15 ring-1 ring-inset ring-primary/40",
              )}
            >
              <span className="select-none pr-3 text-right tabular-nums text-muted-foreground/70">
                {i + 1}
              </span>
              <span className="whitespace-pre font-mono">{line || " "}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
