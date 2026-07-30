import type { RendererProps } from "@/core/types";
import type { CloseData } from "./algorithm";

function FreqRow({ label, freq }: { label: string; freq: { ch: string; count: number }[] }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-14 text-right text-[10px] uppercase tracking-wide text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {freq.map((f) => (
          <span key={f.ch} className="rounded border border-border px-2 py-0.5 font-mono text-sm">
            {f.ch}:{f.count}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CloseRenderer({ step }: RendererProps<CloseData>) {
  const { word1, word2, freq1, freq2, setEqual, freqEqual, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <FreqRow label={word1} freq={freq1} />
        <FreqRow label={word2} freq={freq2} />
      </div>

      <div className="flex gap-3 text-sm">
        <span className={setEqual === null ? "text-muted-foreground" : setEqual ? "text-role-sorted" : "text-role-swapped"}>
          same char set: {setEqual === null ? "…" : setEqual ? "✓" : "✗"}
        </span>
        <span className={freqEqual === null ? "text-muted-foreground" : freqEqual ? "text-role-sorted" : "text-role-swapped"}>
          same freq multiset: {freqEqual === null ? "…" : freqEqual ? "✓" : "✗"}
        </span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        close? <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
      </div>
    </div>
  );
}
