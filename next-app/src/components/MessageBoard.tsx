import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/message-board/data-table";
import { columns } from "@/components/message-board/columns";

export const MessageBoard = async () => {
  return (
    <Card className="hover-lift card-gradient border-0 shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold">Message Board</CardTitle>
        </div>
        <p className="text-muted-foreground">
          Browse all messages posted to the blockchain
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
