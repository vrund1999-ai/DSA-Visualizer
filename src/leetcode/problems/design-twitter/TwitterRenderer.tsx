import type { RendererProps } from "@/core/types";
import type { TwitterData } from "./algorithm";

export function TwitterRenderer({ step }: RendererProps<TwitterData>) {
  const { ops, opIndex, users, feed } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {ops.map((op, i) => (
          <span
            key={i}
            className={`rounded border px-1.5 py-0.5 font-mono text-xs ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {op}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {users.map((u) => (
          <div key={u.id} className="flex flex-col items-center gap-1 rounded-md border px-3 py-1.5">
            <span className="text-sm font-semibold">user {u.id}</span>
            <span className="text-xs text-muted-foreground">
              tweets: {u.tweets.length ? u.tweets.join(", ") : "—"}
            </span>
            {u.follows.length > 0 && (
              <span className="text-xs text-role-active">→ follows {u.follows.join(", ")}</span>
            )}
          </div>
        ))}
      </div>

      {feed !== null && (
        <div className="rounded-md border border-role-sorted bg-role-sorted/15 px-3 py-1 text-sm">
          news feed = <b className="tabular-nums">[{feed.join(", ")}]</b>
        </div>
      )}
    </div>
  );
}
