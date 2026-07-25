import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CookiesData } from "./algorithm";

export function CookiesRenderer({ step }: RendererProps<CookiesData>) {
  const { g, s, child, cookie, satisfied, answer } = step.data;

  const childRole = (i: number) => {
    if (i < child) return "sorted";
    if (i === child) return "current";
    return "default";
  };

  const cookieRole = (i: number) => {
    if (i === cookie) return satisfied === true ? "sorted" : satisfied === false ? "target" : "current";
    if (i < cookie) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">children (greed, sorted)</span>
        <ArrayCells values={g} roleFor={childRole} topLabel={(i) => (i === child ? "child" : "")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">cookies (size, sorted)</span>
        <ArrayCells values={s} roleFor={cookieRole} topLabel={(i) => (i === cookie ? "cookie" : "")} showIndex={false} />
      </div>

      <div className="text-sm">content children = <b className="tabular-nums text-role-sorted">{answer ?? child}</b></div>

      <Legend items={[{ role: "current", label: "Pointer" }, { role: "sorted", label: "Satisfied" }, { role: "target", label: "Too small" }]} />
    </div>
  );
}
