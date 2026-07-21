import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Flame } from "lucide-react";
import { leetcode } from "@/leetcode/registry";
import { DIFFICULTY_CLASS, DIFFICULTY_LABEL } from "@/leetcode/difficulty";
import { Badge } from "@/components/ui/badge";
import { VisualizerHost } from "./VisualizerPage";
import { NotFoundPage } from "./NotFoundPage";

export function LeetCodeProblemPage() {
  const { id } = useParams();
  const problem = id ? leetcode.byId(id) : undefined;
  if (!problem) return <NotFoundPage />;

  const header = (
    <div className="flex flex-col gap-2 px-4 pt-3">
      <Link
        to="/leetcode"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All problems
      </Link>
      <div className="flex flex-wrap items-center gap-2">
        <Badge className={DIFFICULTY_CLASS[problem.difficulty]}>
          {DIFFICULTY_LABEL[problem.difficulty]}
        </Badge>
        {problem.topics?.map((t) => (
          <Badge key={t} variant="outline" className="text-[10px]">
            {t}
          </Badge>
        ))}
        <a
          href={problem.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          View on LeetCode
          <ExternalLink className="size-3.5" />
        </a>
      </div>
      {(problem.companies?.length || typeof problem.frequency === "number") && (
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {problem.companies && problem.companies.length > 0 && (
            <span>Asked at {problem.companies.join(", ")}</span>
          )}
          {typeof problem.frequency === "number" && (
            <span className="inline-flex items-center gap-1">
              <Flame className="size-3.5 text-amber-500" />
              {problem.frequency.toFixed(0)} frequency
            </span>
          )}
        </div>
      )}
      <p className="max-w-3xl text-sm text-muted-foreground">{problem.prompt}</p>
    </div>
  );

  // No live input for problems yet — placeholders (and most problems) drive
  // their own fixed example, so hide the generic input controls.
  return (
    <VisualizerHost
      key={problem.id}
      def={problem}
      header={header}
      showInput={false}
    />
  );
}
