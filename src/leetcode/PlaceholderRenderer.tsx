import { Construction } from "lucide-react";
import type { RendererProps } from "@/core/types";

/**
 * Stand-in stage for a LeetCode problem whose real visual hasn't been built
 * yet. A problem can be fully registered (so it shows up in the list and its
 * detail page is navigable) before its bespoke Renderer exists — swap this out
 * for the real renderer in a future change.
 */
export function PlaceholderRenderer(_props: RendererProps<unknown>) {
  return (
    <div className="flex h-full min-h-[18rem] items-center justify-center">
      <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed bg-card/40 px-8 py-10 text-center">
        <Construction className="size-8 text-muted-foreground" />
        <div>
          <p className="font-medium">Visual coming soon</p>
          <p className="mt-1 max-w-xs text-sm text-muted-foreground">
            An interactive visualization for this problem is on the way.
          </p>
        </div>
      </div>
    </div>
  );
}
