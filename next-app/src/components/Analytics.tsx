import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/analytics-board/data-table";
import { columns } from "@/components/analytics-board/columns";

export const Analytics = async () => {
  return (
    <Card className="hover-lift card-gradient border-0 shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-chart-3/10 flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-chart-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold">User Analytics</CardTitle>
        </div>
        <p className="text-muted-foreground">
          Comprehensive insights into user behavior and platform usage
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="bg-card/50 rounded-lg border border-border/50">
          <DataTable columns={columns} />
        </div>
      </CardContent>
    </Card>
  );
};
