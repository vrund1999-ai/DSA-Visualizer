import { Gauge } from "lucide-react";
import { SPEED_OPTIONS } from "@/core/usePlayer";

export function SpeedControl({
  speed,
  onChange,
}: {
  speed: number;
  onChange: (s: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <Gauge className="size-4 text-muted-foreground" />
      <select
        aria-label="Playback speed"
        className="h-9 rounded-md border border-input bg-background px-2 text-xs tabular-nums text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        value={speed}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {SPEED_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}x
          </option>
        ))}
      </select>
    </div>
  );
}
