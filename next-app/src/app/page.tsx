import { MessageBoard } from "@/components/MessageBoard";
import { CreateMessage } from "@/components/CreateMessage";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 mb-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Decentralized Message Board
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Share your thoughts on the Aptos blockchain. Create, read, and interact with messages stored permanently on-chain.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Gasless Transactions
            </span>
            <span className="px-3 py-1 bg-chart-2/10 text-chart-2 text-sm font-medium rounded-full">
              On-Chain Storage
            </span>
            <span className="px-3 py-1 bg-chart-3/10 text-chart-3 text-sm font-medium rounded-full">
              Real-time Updates
            </span>
          </div>
        </div>
      </section>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MessageBoard />
        </div>
        <div className="lg:col-span-1">
          <CreateMessage />
        </div>
      </div>
    </div>
  );
}
