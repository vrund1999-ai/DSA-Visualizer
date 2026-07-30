import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { IpData } from "./algorithm";

const STATUS_TEXT: Record<string, string> = {
  place: "placed a part",
  "reject-zero": "rejected: leading zero",
  "reject-big": "rejected: > 255",
  record: "recorded a valid IP",
  dead: "dead end",
};

export function IpRenderer({ step }: RendererProps<IpData>) {
  const { s, parts, trying, status, results, answer } = step.data;
  const placedLen = parts.join("").length;

  const charClass = (i: number) => {
    if (trying && i >= trying[0] && i < trying[1]) {
      if (status === "reject-zero" || status === "reject-big") return "bg-role-swapped text-white border-role-swapped";
      return "bg-role-current text-white border-role-current";
    }
    if (i < placedLen) return "bg-role-visited/25 border-role-visited";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex gap-1">
        {s.split("").map((ch, i) => (
          <span key={i} className={`flex h-10 w-8 items-center justify-center rounded border font-mono text-lg font-semibold ${charClass(i)}`}>{ch}</span>
        ))}
      </div>

      <div className="text-sm">
        current: <span className="font-mono">{parts.join(".") || "—"}</span>
        {status && <span className="ml-2 text-muted-foreground">({STATUS_TEXT[status]})</span>}
      </div>

      <div className="flex min-h-[3rem] flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">valid addresses</span>
        <div className="flex flex-wrap justify-center gap-2">
          {(answer ?? results).map((ip) => (
            <span key={ip} className="rounded border border-role-sorted bg-role-sorted/15 px-2 py-1 font-mono text-xs">{ip}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Trying segment" }, { role: "swapped", label: "Rejected" }, { role: "visited", label: "Placed parts" }]} />
    </div>
  );
}
