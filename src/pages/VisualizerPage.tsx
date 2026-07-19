import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { registry } from "@/core/registry";
import { usePlayer } from "@/core/usePlayer";
import { useVisualizerInput } from "@/core/useVisualizerInput";
import { VisualizerLayout } from "@/components/layout/VisualizerLayout";
import { InputControls } from "@/components/layout/InputControls";
import { PlayerControls } from "@/components/player/PlayerControls";
import { CodePanel } from "@/components/panels/CodePanel";
import { ComplexityBadge } from "@/components/panels/ComplexityBadge";
import { StepNarration } from "@/components/panels/StepNarration";
import { NotFoundPage } from "./NotFoundPage";

export function VisualizerPage() {
  const { id } = useParams();
  const def = id ? registry.byId(id) : undefined;
  if (!def) return <NotFoundPage />;
  return <VisualizerHost key={def.id} />;
}

/**
 * The generic host — the heart of the "one player system". Looks up the
 * definition, builds its steps (pure, memoized), and drives the shared player.
 * Re-mounts per algorithm via the `key` above so all hook state resets cleanly.
 */
function VisualizerHost() {
  const { id } = useParams();
  const def = registry.byId(id!)!;

  const { input, options, setInput, regenerate } = useVisualizerInput(def);

  // Pure generation, memoized on input/options.
  const steps = useMemo(
    () => def.buildSteps(input, options),
    [def, input, options],
  );

  const [state, controls] = usePlayer(steps.length);
  const step = steps[state.index] ?? steps[0];
  const Renderer = def.Renderer;

  return (
    <div className="flex flex-col">
      <div className="px-4 pt-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All visualizers
        </Link>
      </div>
      <VisualizerLayout
        title={def.title}
        summary={def.summary}
        stage={
          <Renderer
            step={step}
            frameIndex={state.index}
            frameCount={steps.length}
          />
        }
        narration={<StepNarration step={step} />}
        controls={<PlayerControls state={state} controls={controls} />}
        code={
          <CodePanel
            code={def.code}
            activeLine={step.line}
            language={def.language}
          />
        }
        complexity={<ComplexityBadge complexity={def.complexity} />}
        input={
          <InputControls
            def={def}
            input={input}
            onInputChange={setInput}
            onRandomize={regenerate}
          />
        }
      />
    </div>
  );
}
