import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BitFlipsData } from "./algorithm";

export function BitFlipsRenderer({ step }: RendererProps<BitFlipsData>) {
  const { start, goal, width, pos, flips, answer } = step.data;
  const bits = (n: number) => Array.from({ length: width }, (_, k) => (n >> (width - 1 - k)) & 1);
  const sB = bits(start);
  const gB = bits(goal);

  const Row = ({ label, arr, other }: { label: string; arr: number[]; other?: number[] }) => (
    <div className="flex items-center gap-2">
      <span className="w-12 text-right text-xs text-muted-foreground">{label}</span>
      <div className="flex gap-0.5">
        {arr.map((b, k) => {
          const bitPos = width - 1 - k;
          const differs = other && other[k] !== b;
          const active = pos === bitPos;
          return <div key={k} className={`flex size-7 items-center justify-center rounded border text-xs tabular-nums ${active ? "border-role-current bg-role-current text-white" : differs ? "border-role-compared bg-role-compared/20" : "border-border bg-muted/30"}`}>{b}</div>;
        })}
      </div>
    </div>
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Row label={`start ${start}`} arr={sB} other={gB} />
      <Row label={`goal ${goal}`} arr={gB} other={sB} />

      <div className="rounded-md border px-3 py-1 text-sm">flips = <b className="tabular-nums">{answer ?? flips}</b></div>

      <Legend items={[{ role: "current", label: "Examined bit" }, { role: "compared", label: "Differing bit" }]} />
    </div>
  );
}
