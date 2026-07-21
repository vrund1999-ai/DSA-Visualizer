import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";
import { leetcode } from "@/leetcode/registry";
import { DIFFICULTY_CLASS, DIFFICULTY_LABEL } from "@/leetcode/difficulty";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LeetCodeCatalogPage() {
  const problems = leetcode.all();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-10">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
          <Code2 className="size-3.5 text-primary" />
          Interview problems, visualized
        </div>
        <h1 className="text-4xl font-bold tracking-tight">LeetCode</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Pick a problem to step through an interactive visualization of how its
          solution works — the same line-by-line player used across the site.
        </p>
      </section>

      {problems.length === 0 ? (
        <p className="text-muted-foreground">Problems coming soon.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <Link key={p.id} to={`/leetcode/${p.id}`} className="group">
              <Card className="flex h-full flex-col transition hover:border-primary hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span>
                      {p.number}. {p.title}
                    </span>
                    <Badge className={DIFFICULTY_CLASS[p.difficulty]}>
                      {DIFFICULTY_LABEL[p.difficulty]}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{p.summary}</CardDescription>
                </CardHeader>
                {p.topics && p.topics.length > 0 && (
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {p.topics.map((t) => (
                        <Badge key={t} variant="outline" className="text-[10px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
