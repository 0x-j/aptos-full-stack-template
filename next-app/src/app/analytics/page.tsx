import { Analytics } from "@/components/Analytics";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <div className="max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient">
            Analytics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Track user activity and engagement metrics across the platform
          </p>
        </div>
      </section>
      
      <Analytics />
    </div>
  );
}
