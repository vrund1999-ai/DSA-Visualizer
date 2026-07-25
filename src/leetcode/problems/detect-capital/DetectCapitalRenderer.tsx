import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DetectCapitalData } from "./algorithm";

export function DetectCapitalRenderer({ step }: RendererProps<DetectCapitalData>) {
  const { word, isUpper, allCaps, allLower, titleCase, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex gap-1">
        {word.split("").map((c, i) => (
          <div key={i} className={`flex size-11 items-center justify-center rounded-md border-2 text-lg font-bold ${isUpper[i] ? "border-role-current bg-role-current/15" : "border-role-active bg-role-active/15"}`}>{c}</div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {allCaps !== null && <span className={`rounded-md border px-3 py-1 ${allCaps ? "border-role-sorted" : ""}`}>all caps {allCaps ? "✓" : "✗"}</span>}
        {allLower !== null && <span className={`rounded-md border px-3 py-1 ${allLower ? "border-role-sorted" : ""}`}>all lower {allLower ? "✓" : "✗"}</span>}
        {titleCase !== null && <span className={`rounded-md border px-3 py-1 ${titleCase ? "border-role-sorted" : ""}`}>title case {titleCase ? "✓" : "✗"}</span>}
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Valid capitalization ✓" : "Invalid ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Uppercase" }, { role: "active", label: "Lowercase" }]} />
    </div>
  );
}
