import { Link } from "react-router-dom";
import {
  BarChart3,
  GitBranch,
  List,
  Route,
  Search,
  Table2,
  Type,
  Undo2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { registry } from "@/core/registry";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ComplexityBadge } from "@/components/panels/ComplexityBadge";

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Route,
  GitBranch,
  List,
  Search,
  Table2,
  Undo2,
  Type,
};

export function CatalogPage() {
  const categories = registry.categories();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-10">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" />
          Interactive, step-by-step algorithm explanations
        </div>
        <h1 className="text-4xl font-bold tracking-tight">DSA Visualizer</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Watch data structures and algorithms come to life. Step through each
          one line-by-line, control the speed, and see exactly what happens at
          every stage — built for interview prep and building real intuition.
        </p>
      </section>

      {categories.map((cat) => {
        const items = registry.byCategory(cat.id);
        const Icon = (cat.icon && ICONS[cat.icon]) || BarChart3;
        return (
          <section key={cat.id} className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <Icon className="size-5 text-primary" />
              <div>
                <h2 className="text-xl font-semibold leading-tight">
                  {cat.label}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((d) => (
                <Link key={d.id} to={`/v/${d.id}`} className="group">
                  <Card className="flex h-full flex-col transition hover:border-primary hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {d.title}
                      </CardTitle>
                      <CardDescription>{d.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto flex flex-col gap-3">
                      <ComplexityBadge complexity={d.complexity} />
                      {d.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {d.tags.map((t) => (
                            <Badge key={t} variant="outline" className="text-[10px]">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
