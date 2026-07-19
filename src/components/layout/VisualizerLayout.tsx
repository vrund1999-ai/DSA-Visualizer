import type { ReactNode } from "react";

/**
 * Two-column responsive frame every visualizer renders into. Pure layout — it
 * receives already-built slots and never knows about categories.
 *  - left: stage (renderer) + narration + player controls
 *  - right: title + complexity + input + code panel
 */
export function VisualizerLayout(props: {
  title: string;
  summary: string;
  stage: ReactNode;
  narration: ReactNode;
  controls: ReactNode;
  code: ReactNode;
  complexity: ReactNode;
  input: ReactNode;
}) {
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-1 lg:h-[calc(100vh-3.5rem)] lg:grid-cols-[1fr_26rem]">
      <section className="flex min-h-0 flex-col">
        <div className="min-h-[22rem] flex-1 p-4 lg:min-h-0">{props.stage}</div>
        <div className="px-4">{props.narration}</div>
        {props.controls}
      </section>

      <aside className="flex min-h-0 flex-col gap-3 border-t bg-card/40 p-4 lg:border-l lg:border-t-0">
        <div>
          <h1 className="text-lg font-semibold">{props.title}</h1>
          <p className="text-sm text-muted-foreground">{props.summary}</p>
        </div>
        {props.complexity}
        {props.input}
        <div className="min-h-[16rem] flex-1">{props.code}</div>
      </aside>
    </div>
  );
}
