import type { RendererProps } from "@/core/types";
import type { ConcatBinaryData } from "./algorithm";

export function ConcatBinaryRenderer({ step }: RendererProps<ConcatBinaryData>) {
  const { n, i, binary, appendedFrom, value, answer } = step.data;
  const bits = binary.split("");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        n = {n}
        {i !== null && ` · appending ${i}`}
      </span>

      <div className="flex max-w-2xl flex-wrap justify-center gap-0.5 font-mono">
        {bits.length === 0 ? (
          <span className="text-sm text-muted-foreground">(empty)</span>
        ) : (
          bits.map((b, idx) => (
            <span
              key={idx}
              className={`flex size-6 items-center justify-center rounded text-sm ${
                appendedFrom !== null && idx >= appendedFrom
                  ? "bg-role-current text-white"
                  : "bg-muted/40 text-foreground"
              }`}
            >
              {b}
            </span>
          ))
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm tabular-nums">
        value mod 1e9+7 = <b>{answer ?? value}</b>
      </div>
    </div>
  );
}
