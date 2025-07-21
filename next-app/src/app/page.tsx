import { MessageBoard } from "@/components/MessageBoard";
import { CreateMessage } from "@/components/CreateMessage";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <MessageBoard />
        <CreateMessage />
      </div>
    </div>
  );
}
