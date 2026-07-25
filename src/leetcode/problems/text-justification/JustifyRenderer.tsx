import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { JustifyData } from "./algorithm";

/** Render a line making its spaces visible as middots so justification is legible. */
function Line({ text, width, highlight }: { text: string; width: number; highlight?: boolean }) {
  return (
    <div className="flex">
      <div className={`flex font-mono text-sm ${highlight ? "rounded bg-role-current/15 ring-1 ring-role-current" : ""}`}>
        {Array.from({ length: width }).map((_, i) => {
          const ch = text[i] ?? " ";
          return (
            <span key={i} className={`inline-flex w-[0.7rem] justify-center ${ch === " " ? "text-muted-foreground/40" : ""}`}>
              {ch === " " ? "·" : ch}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function JustifyRenderer({ step }: RendererProps<JustifyData>) {
  const { words, maxWidth, lineWords, lines, justLine, answer } = step.data;
  const shown = answer ?? lines;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {words.map((w, i) => (
          <span key={i} className={`rounded-md border px-2 py-0.5 font-mono text-sm ${lineWords.includes(i) ? "border-role-current bg-role-current/15" : ""}`}>
            {w}
          </span>
        ))}
        <span className="ml-2 rounded-md border px-2 py-0.5 text-xs text-muted-foreground">width {maxWidth}</span>
      </div>

      <div className="flex flex-col gap-0.5 rounded-md border bg-muted/20 p-3">
        {shown.length === 0 ? (
          <span className="text-sm text-muted-foreground">no lines yet</span>
        ) : (
          shown.map((ln, i) => <Line key={i} text={ln} width={maxWidth} highlight={!answer && ln === justLine && i === shown.length - 1} />)
        )}
      </div>

      <Legend items={[{ role: "current", label: "Current line / picked words" }]} />
    </div>
  );
}
