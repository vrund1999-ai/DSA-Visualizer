import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RemoveDigitData } from "./algorithm";

export function RemoveDigitRenderer({ step }: RendererProps<RemoveDigitData>) {
  const { number, digit, tryIndex, candidate, best, bestRemoved, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {number.split("").map((c, i) => {
          const isTry = i === tryIndex;
          const isBest = answer !== null && i === bestRemoved;
          return (
            <span
              key={i}
              className={`flex size-9 items-center justify-center rounded-md border-2 text-sm ${
                isBest
                  ? "border-role-sorted bg-role-sorted/20 line-through"
                  : isTry
                    ? "border-role-current bg-role-current text-white line-through"
                    : c === digit
                      ? "border-role-active bg-role-active/20"
                      : "border-border"
              }`}
            >
              {c}
            </span>
          );
        })}
      </div>

      {candidate && answer === null && (
        <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 font-mono text-sm">
          candidate = {candidate}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 font-mono text-sm">
        best = <b>{answer ?? (best || "…")}</b>
      </div>

      <Legend items={[{ role: "current", label: "trying to remove" }, { role: "sorted", label: "removed in best" }]} />
    </div>
  );
}
