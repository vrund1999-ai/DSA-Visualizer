import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Flame, Play, Search } from "lucide-react";
import { leetcode } from "@/leetcode/registry";
import { DIFFICULTY_CLASS, DIFFICULTY_LABEL } from "@/leetcode/difficulty";
import type { Difficulty } from "@/leetcode/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 60;

type SortKey = "frequency" | "difficulty" | "title";
type VisualKey = "all" | "visualized" | "placeholder";

const SELECT_CLASS =
  "h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground " +
  "focus:outline-none focus:ring-2 focus:ring-ring";

export function LeetCodeCatalogPage() {
  const all = useMemo(() => leetcode.all(), []);
  const topics = useMemo(() => leetcode.topics(), []);
  const companies = useMemo(() => leetcode.companies(), []);

  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<"all" | Difficulty>("all");
  const [topic, setTopic] = useState<string>("all");
  const [company, setCompany] = useState<string>("all");
  const [visual, setVisual] = useState<VisualKey>("all");
  const [sort, setSort] = useState<SortKey>("frequency");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Any filter/sort change resets pagination back to the first page.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, difficulty, topic, company, visual, sort]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = all.filter((p) => {
      if (q && !p.title.toLowerCase().includes(q)) return false;
      if (difficulty !== "all" && p.difficulty !== difficulty) return false;
      if (topic !== "all" && !p.topics?.includes(topic)) return false;
      if (company !== "all" && !p.companies?.includes(company)) return false;
      if (visual !== "all") {
        const built = leetcode.hasVisualizer(p.id);
        if (visual === "visualized" && !built) return false;
        if (visual === "placeholder" && built) return false;
      }
      return true;
    });

    if (sort === "difficulty") {
      result.sort(
        (a, b) =>
          leetcode.difficultyOrder[a.difficulty] -
            leetcode.difficultyOrder[b.difficulty] ||
          (b.frequency ?? -1) - (a.frequency ?? -1),
      );
    } else if (sort === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    // "frequency" — `all` is already frequency-sorted, filter() preserves order.
    return result;
  }, [all, query, difficulty, topic, company, visual, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-8">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
          <Code2 className="size-3.5 text-primary" />
          Interview problems, visualized
        </div>
        <h1 className="text-4xl font-bold tracking-tight">LeetCode</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {leetcode.count().toLocaleString()} company-tagged problems,{" "}
          {leetcode.visualizedCount().toLocaleString()} with an interactive
          visualizer. Filter by difficulty, topic, company, or whether it's been
          built, then step through the solution line by line.
        </p>
      </section>

      {/* Filters */}
      <section className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[14rem]">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search problems…"
            className={cn(SELECT_CLASS, "w-full pl-9")}
            aria-label="Search problems by title"
          />
        </div>

        <select
          className={SELECT_CLASS}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as "all" | Difficulty)}
          aria-label="Filter by difficulty"
        >
          <option value="all">All difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <select
          className={SELECT_CLASS}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-label="Filter by topic"
        >
          <option value="all">All topics</option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          className={SELECT_CLASS}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          aria-label="Filter by company"
        >
          <option value="all">All companies</option>
          {companies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          className={SELECT_CLASS}
          value={visual}
          onChange={(e) => setVisual(e.target.value as VisualKey)}
          aria-label="Filter by visualizer availability"
        >
          <option value="all">All problems</option>
          <option value="visualized">Has visualizer</option>
          <option value="placeholder">Coming soon</option>
        </select>

        <select
          className={SELECT_CLASS}
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="Sort problems"
        >
          <option value="frequency">Sort: Frequency</option>
          <option value="difficulty">Sort: Difficulty</option>
          <option value="title">Sort: Title</option>
        </select>
      </section>

      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length.toLocaleString()}{" "}
        {filtered.length === 1 ? "problem" : "problems"}
      </p>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">
          No problems match these filters.
        </p>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <Link key={p.id} to={`/leetcode/${p.id}`} className="group">
                <Card className="flex h-full flex-col transition hover:border-primary hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between gap-2">
                      <span>
                        {typeof p.number === "number" ? `${p.number}. ` : ""}
                        {p.title}
                      </span>
                      <Badge className={DIFFICULTY_CLASS[p.difficulty]}>
                        {DIFFICULTY_LABEL[p.difficulty]}
                      </Badge>
                    </CardTitle>
                    {leetcode.hasVisualizer(p.id) && (
                      <span className="inline-flex w-fit items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        <Play className="size-2.5 fill-current" />
                        Visualizer
                      </span>
                    )}
                    <CardDescription>{p.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-col gap-2">
                    {p.topics && p.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {p.topics.slice(0, 3).map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="text-[10px]"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                      {p.companies && p.companies.length > 0 && (
                        <span>{p.companies.join(", ")}</span>
                      )}
                      {typeof p.frequency === "number" && (
                        <span className="inline-flex items-center gap-1">
                          <Flame className="size-3 text-amber-500" />
                          {p.frequency.toFixed(0)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {shown.length < filtered.length && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
              >
                Load more ({filtered.length - shown.length} remaining)
              </Button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
