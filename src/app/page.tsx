// This is a Server Component by default in the App Router
import { Button } from "@/components/ui/button"; // Import Button from Shadcn UI

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Welcome to ContentCraft AI
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl">
          Your intelligent partner for creating amazing content.
        </p>
      </header>

      <section className="text-center">
        <p className="mb-6 text-base">
          Get started by exploring our features or sign up to begin generating content.
        </p>
        {/* Example Button Usage */}
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="default">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </section>

      {/* Placeholder for future content sections */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Features Placeholder</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-lg bg-card text-card-foreground">Feature 1</div>
          <div className="p-6 border rounded-lg bg-card text-card-foreground">Feature 2</div>
          <div className="p-6 border rounded-lg bg-card text-card-foreground">Feature 3</div>
        </div>
      </section>
    </div>
  );
}