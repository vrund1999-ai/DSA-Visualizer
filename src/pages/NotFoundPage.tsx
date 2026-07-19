import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <main className="mx-auto flex max-w-md flex-col items-center gap-4 p-16 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">
        That visualizer doesn&apos;t exist (yet).
      </p>
      <Button asChild>
        <Link to="/">Back to catalog</Link>
      </Button>
    </main>
  );
}
