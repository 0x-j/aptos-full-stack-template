import { ThemeToggle } from "@/components/ThemeToggle";
import { WalletSelector } from "@/components/wallet/WalletSelector";

export const RootHeader = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform">
                  Aptos MessageBoard
                </h1>
                <p className="text-xs text-muted-foreground">Full Stack Demo</p>
              </div>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="/"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                Messages
              </a>
              <a
                href="/analytics"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                Analytics
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <WalletSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
