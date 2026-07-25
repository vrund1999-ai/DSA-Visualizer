import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DigitOneData } from "./algorithm";

export function DigitOneRenderer({ step }: RendererProps<DigitOneData>) {
  const { n, place, high, cur, low, added, count, answer } = step.data;
  const digits = String(n).split("");
  // Which digit index corresponds to the current place? Rightmost is place 1.
  const placeIdx = place ? digits.length - 1 - Math.round(Math.log10(place)) : -1;

  const roleFor = (i: number) => {
    if (i === placeIdx) return "current";
    if (place !== null && i < placeIdx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="flex gap-1.5">
        {digits.map((d, i) => (
          <div
            key={i}
            className={`flex size-12 items-center justify-center rounded-md border-2 text-xl font-bold tabular-nums transition-colors ${
              roleFor(i) === "current" ? "border-role-current bg-role-current text-white" : roleFor(i) === "visited" ? "border-role-visited/40 bg-role-visited/15 text-muted-foreground" : "border-border bg-muted/30"
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {place !== null && (
        <div className="flex items-center gap-3 text-sm">
          <span className="rounded-md border px-3 py-1">place = <b className="tabular-nums">{place}</b></span>
          <span className="rounded-md border px-3 py-1">high <b className="tabular-nums">{high}</b> | cur <b className="tabular-nums">{cur}</b> | low <b className="tabular-nums">{low}</b></span>
          <span className="rounded-md border border-role-current px-3 py-1">+{added} ones</span>
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">count = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Current place" }, { role: "visited", label: "Lower places done" }]} />
    </div>
  );
}
