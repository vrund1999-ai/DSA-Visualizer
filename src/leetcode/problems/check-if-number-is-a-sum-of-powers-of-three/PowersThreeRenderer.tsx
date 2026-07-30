import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PowersThreeData } from "./algorithm";

export function PowersThreeRenderer({ step }: RendererProps<PowersThreeData>) {
  const { n, digits, cur, power, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-lg">n = <b className="font-mono">{n}</b></div>

      {cur > 0 && power !== null && (
        <div className="text-sm text-muted-foreground">
          {cur} mod 3 = <b className={cur % 3 === 2 ? "text-role-swapped" : "text-foreground"}>{cur % 3}</b> · ⌊{cur}/3⌋ = {Math.floor(cur / 3)}
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">base-3 digits (high → low)</span>
        <div className="flex gap-1">
          {digits.length === 0 && <span className="text-sm text-muted-foreground">…</span>}
          {[...digits].reverse().map((d, k) => {
            const p = digits.length - 1 - k;
            return (
              <div key={k} className="flex flex-col items-center">
                <span className={`flex h-10 w-10 items-center justify-center rounded border-2 text-lg font-bold ${d === 2 ? "bg-role-swapped text-white border-role-swapped" : "bg-role-sorted/20 border-role-sorted"}`}>{d}</span>
                <span className="text-[9px] text-muted-foreground">3^{p}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        sum of distinct powers of 3 = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "Digit 0 or 1 (ok)" }, { role: "swapped", label: "Digit 2 (fail)" }]} />
    </div>
  );
}
