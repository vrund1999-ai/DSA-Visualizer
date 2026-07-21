import { Construction, ExternalLink, Flame } from "lucide-react";
import type { RendererProps } from "@/core/types";
import type { PlaceholderData } from "./placeholder";

/**
 * Stand-in stage for a LeetCode problem whose bespoke visual hasn't been built
 * yet. A problem can be fully registered (so it shows up in the list and its
 * detail page is navigable, tagged and searchable) before its Renderer exists.
 * It surfaces the concepts involved + a link out, and is swapped for the real
 * renderer in a future change.
 */
export function PlaceholderRenderer({ step }: RendererProps<PlaceholderData>) {
  const data = step.data;
  // Older no-op placeholders emitted `data: null`; guard so this stays safe.
  const topics = data?.topics ?? [];
  const companies = data?.companies ?? [];
  const frequency = data?.frequency;
  const url = data?.url;

  return (
    <div className="flex h-full min-h-[18rem] items-center justify-center">
      <div className="flex max-w-md flex-col items-center gap-4 rounded-lg border border-dashed bg-card/40 px-8 py-10 text-center">
        <Construction className="size-8 text-muted-foreground" />
        <div>
          <p className="font-medium">Interactive visual coming soon</p>
          <p className="mt-1 text-sm text-muted-foreground">
            This problem is fully cataloged and searchable — its step-through
            animation is on the way.
          </p>
        </div>

        {topics.length > 0 && (
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Concepts
            </span>
            <div className="flex flex-wrap justify-center gap-1.5">
              {topics.map((t) => (
                <span
                  key={t}
                  className="rounded-md border bg-muted/30 px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          {companies.length > 0 && <span>Asked at {companies.join(", ")}</span>}
          {typeof frequency === "number" && (
            <span className="inline-flex items-center gap-1">
              <Flame className="size-3.5 text-amber-500" />
              {frequency.toFixed(0)} frequency
            </span>
          )}
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-primary bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            Solve on LeetCode
            <ExternalLink className="size-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
