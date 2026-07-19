import { Gauge } from "lucide-react";
import { Slider } from "@/components/ui/slider";

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
      <Slider
        aria-label="Speed"
        className="w-24"
        min={0.5}
        max={30}
        step={0.5}
        value={[speed]}
        onValueChange={([v]) => onChange(v)}
      />
      <span className="w-10 text-xs tabular-nums text-muted-foreground">
        {speed}x
      </span>
    </div>
  );
}
