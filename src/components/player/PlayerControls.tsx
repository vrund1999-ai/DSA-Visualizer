import { useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpeedControl } from "./SpeedControl";
import { ProgressScrubber } from "./ProgressScrubber";
import type {
  PlayerControls as Controls,
  PlayerState,
} from "@/core/usePlayer";

export function PlayerControls({
  state,
  controls,
}: {
  state: PlayerState;
  controls: Controls;
}) {
  // Keyboard shortcuts: space = play/pause, ← / → = step, Home = reset.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      switch (e.key) {
        case " ":
          e.preventDefault();
          controls.toggle();
          break;
        case "ArrowRight":
          e.preventDefault();
          controls.stepForward();
          break;
        case "ArrowLeft":
          e.preventDefault();
          controls.stepBack();
          break;
        case "Home":
          e.preventDefault();
          controls.reset();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [controls]);

  return (
    <div className="flex flex-col gap-3 border-t bg-card p-3">
      <ProgressScrubber
        index={state.index}
        count={state.count}
        onSeek={controls.seek}
      />
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={controls.reset}
            title="Reset (Home)"
          >
            <RotateCcw className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={controls.stepBack}
            disabled={state.atStart}
            title="Step back (←)"
          >
            <SkipBack className="size-4" />
          </Button>
          <Button
            size="icon"
            onClick={controls.toggle}
            title={state.isPlaying ? "Pause (Space)" : "Play (Space)"}
          >
            {state.isPlaying ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={controls.stepForward}
            disabled={state.atEnd}
            title="Step forward (→)"
          >
            <SkipForward className="size-4" />
          </Button>
        </div>
        <div className="text-xs tabular-nums text-muted-foreground">
          {state.count === 0 ? 0 : state.index + 1} / {state.count}
        </div>
        <SpeedControl speed={state.speed} onChange={controls.setSpeed} />
      </div>
    </div>
  );
}
